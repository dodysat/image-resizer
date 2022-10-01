require('dotenv').config();
const AWS = require('aws-sdk');
const sharp = require('sharp');
const axios = require('axios');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/:bucket/*', async (req, res) => {
  const bucket = req.params.bucket;
  const key = req.params[0];

  let { w, h, q } = req.query;
  w = parseInt(w) || null;
  h = parseInt(h) || null;
  q = parseInt(q) || 65;

  const signedUrl = await getSignedUrl(bucket, key);
  const mimeType = signedUrl.split('?')[0].split('.').pop().toLowerCase();

  const image = await axios.get(signedUrl, { responseType: 'arraybuffer' }).then(res => res.data);
  const resizedImage = await resizeImage(image, w, h, q);

  res.set('Content-Type', `image/${mimeType}`);
  res.send(resizedImage);

});

async function getSignedUrl(bucketName, filePath) {
  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    endpoint: new AWS.Endpoint(process.env.AWS_ENDPOINT),
  })
  const params = {
    Bucket: bucketName,
    Key: filePath,
  }
  return s3.getSignedUrl('getObject', params)
}

async function resizeImage(image, width, height, quality) {
  return await sharp(image)
    .webp({
      quality: quality,
      effort: 1,
      palette: true,
    })
    .resize(width, height)
    .toBuffer()
}

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});



