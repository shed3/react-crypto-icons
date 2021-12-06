<div id="top"></div>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![MIT License][license-shield]][license-url]
![top-languages-shield]
![languages-count-shield]
![package-version-shield]
![npm-monthly-downloads-shield]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/Shed-Enterprises/react-crypto-icons">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->
  <h2 align="center">React Crypto Icons</h2>
  <p align="center">
    <i>A simple React component that can display 600 crypto icons</i>
    <br />
    <br />
    <!-- <a href="https://github.com/Shed-Enterprises/react-crypto-icons">View Demo</a>
    · -->
    <a href="https://github.com/Shed-Enterprises/react-crypto-icons/issues">Report Bug</a>
    ·
    <a href="https://github.com/Shed-Enterprises/react-crypto-icons/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About React Crypto Icons</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>
<br />

<!-- ABOUT THE PROJECT -->
## About React Crypto Icons

React Crypto Icons provides a simple React component that can be used to display crypto logos. This project supports nearly 600 (okay 594) SVG icons taken from the [cryptocurrency-icons][cryptocurrency-icons] project. You can check out the supported icons [here](http://cryptoicons.co/)!

### Built With
This library requires the following packages to be installed:

* [React.js][react] v17.0.2+
* [react-dom ][react-dom] v17.0.2+

<!-- GETTING STARTED -->
## Getting Started

Getting React Crypto Icons integrated with your project is a breeze! Just install using the node package manager of your choosing and _voilà_!

### Prerequisites

React Crypto Icons requires [Node.js][nodejs] v12+ to run.

### Installation


Install React Crypto Icons from npm

```sh
npm install react-crypto-icons
```

Or with yarn

```sh
yarn add react-crypto-icons
```

## Usage

All icon names should be lowercase to avoid capitalization mismatching. To ensure consistant icon sizing, you **MUST** specify a size for each icon.

```js
import React from "react";
import Icon from "react-crypto-icons";

function App() {
    return (
        <div className="App">
            <Icon name="btc" size={25} />
        </div>
    );
}

export default App;
```

_Pretty much all there is to it :)_

<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [ ] Add Additional Example Docs
- [ ] Add Live Demo

See the [open issues][github-issues] for a full list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch
   ```sh
   git checkout -b feature/AmazingFeature
   ```
3. Commit your Changes 
    ```sh
    git commit -m 'Add some AmazingFeature'
    ```
4. Push to the Branch 
   ```sh
    git push origin feature/AmazingFeature
    ```
6. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.
**Free Software, Yee Haw!**

<!-- CONTACT -->
## Contact

Riley Stephens - rileystephens@escalatorllc.com

<p align="right"><a href="#top">back to top</a></p>



<!-- Project URLS-->
[github-url]: https://github.com/Shed-Enterprises/react-crypto-icons
[github-issues]: https://github.com/Shed-Enterprises/react-crypto-icons/issues
[repo-path]: Shed-Enterprises/react-crypto-icons
[logo-path]: assets/img/logo

<!-- Built With -->
[nodejs]: https://nodejs.org/
[react]: https://www.npmjs.com/package/react
[react-dom]: https://www.npmjs.com/package/react-dom
[cryptocurrency-icons]: https://github.com/spothq/cryptocurrency-icons

<!-- License Badge -->
[license-shield]: https://img.shields.io/github/license/Shed-Enterprises/react-crypto-icons.svg?style=for-the-badge
[license-url]: https://github.com/Shed-Enterprises/react-crypto-icons/blob/main/LICENSE.txt

<!-- Version Badge -->
[package-version-shield]: https://img.shields.io/github/package-json/v/Shed-Enterprises/react-crypto-icons.svg?style=for-the-badge

<!-- Build Status Badge -->
[build-status-shield]: https://img.shields.io/travis/com/Shed-Enterprises/react-crypto-icons.svg?style=for-the-badge

<!-- Contributors Badge -->
[contributors-shield]: https://img.shields.io/github/contributors/Shed-Enterprises/react-crypto-icons.svg?style=for-the-badge
[contributors-url]: https://github.com/Shed-Enterprises/react-crypto-icons/graphs/contributors

<!-- Downloads Badge -->
[npm-monthly-downloads-shield]: https://img.shields.io/npm/dt/react-crypto-icons?style=for-the-badge
[npm-monthly-downloads-url]: https://www.npmjs.com/package/react-crypto-icons

<!-- Languages Badge-->
[top-languages-shield]: https://img.shields.io/github/languages/top/Shed-Enterprises/react-crypto-icons.svg?style=for-the-badge

[languages-count-shield]: https://img.shields.io/github/languages/count/Shed-Enterprises/react-crypto-icons.svg?style=for-the-badge