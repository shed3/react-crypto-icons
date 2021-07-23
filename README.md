# React Crypto Icons

## _A simple React component that can display 600 crypto icons_

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

React Crypto Icons provides a simple icon component that can display crypto logos

## Dependencies

This library requires the following packages to be installed:

-   [react][react] v17.0.2+
-   [react-dom ][react-dom] v17.0.2+

## Installation

React Crypto Icons requires [Node.js](https://nodejs.org/) v12+ to run.

Install React Crypto Icons from npm

```sh
npm install react-crypto-icons
```

Or with yarn

```sh
yarn add react-crypto-icons
```

## Icons

This project supports nearly 600 (okay 594) SVG icons taken from the [cryptocurrency-icons][cryptocurrency-icons] project.
You can check out the supported icons [here](http://cryptoicons.co/)!

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

## Development

We love contributions 'round these parts!

React Crypto Icons is written in TypeScript and **will** be tested using jest.
Make sure all new features are tested before creating PR.

If you are into making SVGs, head over to the [cryptocurrency-icons][cryptocurrency-icons] project. I am sure they would love the extra iconage.

Build:

```sh
npm run build
```

Run tests:

```sh
npm run test
```

## License

MIT

**Free Software, Yee Haw!**

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[react]: https://www.npmjs.com/package/react
[react-dom]: https://www.npmjs.com/package/react-dom
[cryptocurrency-icons]: https://www.npmjs.com/package/cryptocurrency-icons

[icons] <http://cryptoicons.co>
