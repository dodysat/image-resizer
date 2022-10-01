<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![Docker Pull][docker-shield]][docker-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/dodysat/image-resizer">
    <img src="https://cdn.instorages.com/image-resizer/logo-image-resizer.png?w=85&q=50" alt="Logo" width="85" height="85">
  </a>

  <h3 align="center">Image Resizer</h3>

  <p align="center">
    Resize your image on the fly from S3 Compatible Storage
    <br />
    <a href="https://github.com/dodysat/image-resizer"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/dodysat/image-resizer">View Demo</a>
    ·
    <a href="https://github.com/dodysat/image-resizer/issues">Report Bug</a>
    ·
    <a href="https://github.com/dodysat/image-resizer/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#docker-deployment">Docker Deployment</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ABOUT THE PROJECT -->
## About The Project

At the beginning of making a project, you may directly upload images to S3 and don't think that you will have various types of devices or clients that require different image sizes.
This application can be used to resize images directly when your client requires images of different sizes

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/dodysat/image-resizer.git
   ```
1. Move to the directory
   ```sh
   cd image-resizer
   ```
1. Install NPM packages
   ```sh
   npm install
   ```
1. Copy .env.example to .env
   ```sh
   cp .env.example .env
   ```
1. Edit .env file with your own configuration
1. Run the application
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Docker Deployment
Anda dapat menggunakan image docker untuk mencoba aplikasi ini. Image docker tersedia di [Docker Hub](https://hub.docker.com/r/dodysat/image-resizer)

### Run with Docker

``` sh 
docker run -d -p 3000:3000 --name image-resizer -e \
AWS_ACCESS_KEY_ID=<your_aws_access_key_id> -e \
AWS_SECRET_ACCESS_KEY=<your_aws_secret_access_key> -e \
AWS_REGION=<your_aws_region> -e \
AWS_ENDPOINT=<your_aws_endpoint> -e \
IMAGE_QUALITY=<your_image_quality> -e PORT=3000 dodysat/image-resizer
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

![URL Mapping](https://cdn.instorages.com/image-resizer/url-mapping.png?h=100)

Supported Parameters
- `w` : width
- `h` : height
- `q` : quality (between 1 to 100, higher is better, default is 80)

      ps: If you declare `w` and `h` at the same time, the image will be cropped. If you only declare one of them, the image will be resized proportionally.

Example:
- https://cdn.instorages.com/image-resizer/sample/nested-directory/ERy7TXz8Mzg.jpg?w=512&h=512 : Resize and crop image to 512x512 px
- https://cdn.instorages.com/image-resizer/sample/nested-directory/6TaW2xmXKUs.jpg?w=312&q=1 : Resize image to 312px width and quality is 1


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap
- [x] Initial release 
- [ ] Supports secure image capture using dynamic token-based authentication


See the [open issues](https://github.com/dodysat/image-resizer/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the Apache License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Dody Satria - [LinkedIn](https://linkedin.com/in/dody-satria) - dody.satria13@gmail.com

Project Link: [https://github.com/dodysat/image-resizer](https://github.com/dodysat/image-resizer)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/dodysat/image-resizer.svg?style=for-the-badge
[contributors-url]: https://github.com/dodysat/image-resizer/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/dodysat/image-resizer.svg?style=for-the-badge
[forks-url]: https://github.com/dodysat/image-resizer/network/members

[stars-shield]: https://img.shields.io/github/stars/dodysat/image-resizer.svg?style=for-the-badge
[stars-url]: https://github.com/dodysat/image-resizer/stargazers

[issues-shield]: https://img.shields.io/github/issues/dodysat/image-resizer.svg?style=for-the-badge
[issues-url]: https://github.com/dodysat/image-resizer/issues

[license-shield]: https://img.shields.io/github/license/dodysat/image-resizer.svg?style=for-the-badge
[license-url]: https://github.com/dodysat/image-resizer/blob/master/LICENSE.txt

[docker-shield]: https://img.shields.io/docker/pulls/dodysat/image-resizer.svg?style=for-the-badge
[docker-url]: https://hub.docker.com/r/dodysat/image-resizer

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/dody-satria

[product-screenshot]: images/screenshot.png
