## productly

### feature

- sass

  - 7 in 1 pattern (https://sass-guidelin.es/ru/#section-36)
  - bem (logically and functionally independent blocks)
  - mixins (@include)
  - placeholders (@extend)
  - normalize/reset
  - variable/local variable (/about-us.scss)

```js
// sass watch script
    "style": "sass --watch src/sass/style.scss src/sass/style.css"
```

- <ins>adaptive</ins> ([wha?](https://www.google.com/search?q=adaptive+vs+responsive)) layout resolutions

  - 1440px
  - 768px
  - 414px
  - 320px

- js pure

  - OOP & functional style

    ![functional style](productly/readmeAssets/functional-prog.png)

  - modal generator w modules

  ```js
  // watchers
  npm run style
  npx webpack --watch
  ```

- temp-source(D:\learn\temp\productly)

### install

- https://sass-lang.com/install

```js
npm install -g sass
// or
npm install --save-dev sass
// or
npm i sass
```

### webpack setup

```js
  npm init -y
  "devDependencies": {
    "@babel/core": "^7.15.8",
    "@babel/preset-env": "^7.15.8",
    "babel-loader": "^8.2.3",
    "clean-webpack-plugin": "^4.0.0",
    "copy-webpack-plugin": "^9.0.1",
    "cross-env": "^7.0.3",
    "css-loader": "^6.4.0",
    "html-loader": "^3.0.0",
    "html-webpack-plugin": "^5.4.0",
    "mini-css-extract-plugin": "^2.4.3",
    "node-sass": "^6.0.1",
    "sass-loader": "^12.2.0",
    "webpack": "^5.59.1",
    "webpack-cli": "^4.9.1",
    "webpack-dev-server": "^4.3.1"
  },
  "dependencies": {
    "normalize.css": "^8.0.1"
  }

// add scripts
  "dev": "webpack --mode development"
  "prod": "webpack --mode production"

  // 1 add webpack.config.js
  // 1.1 more → https://webpack.js.org/concepts/
  // 2 ...
```

- part1 (https://www.youtube.com/watch?v=ZAde-IJAHzo)
- part2 (https://www.youtube.com/watch?v=BJENQIX2e2o)
- part3 (https://www.youtube.com/live/fooyYgIuZe8)
- part4 (https://www.youtube.com/live/Qk2UGlFNKPE)
- part5 (https://www.youtube.com/live/ouZnGUefneQ)
- part6 (https://www.youtube.com/live/Ji52SxpEnxc)
