
import AWS from 'aws-sdk'
import sharp from 'sharp'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const { pathname } = new URL(request.url)
  const pathSegments = pathname.split('/')
  const bucketName = pathSegments[1]
  const filePath = pathSegments.slice(2).join('/')

  const signedUrl = await getSignedUrl(bucketName, filePath)
  const mimeType = signedUrl.split('?')[0].split('.').pop()


  const { w, h } = await getQueryParams(request, ['w', 'h'])

  const image = await fetch(signedUrl).then(res => res.arrayBuffer())
  const resizedImage = await resizeImage(image, w, h)



  return new Response(resizedImage, {
    headers: {
      'Content-Type': `image/${mimeType}`,
    },
  })
}


async function resizeImage(image, width, height) {
  return await sharp(image)
    .resize({
      width: width,
      height: height,
      fit: 'fill'
    })
    .toBuffer()
}


async function getSignedUrl(bucketName, filePath) {
  const s3 = new AWS.S3({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    region: AWS_REGION,
    endpoint: new AWS.Endpoint(AWS_ENDPOINT),
  })
  const params = {
    Bucket: bucketName,
    Key: filePath,
  }
  return s3.getSignedUrl('getObject', params)
}

async function getQueryParams(request, queryParams = []) {
  const url = new URL(request.url)
  const params = {}
  for (const param of queryParams) {
    params[param] = url.searchParams.get(param)
  }
  return params
}
