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
  npm install webpack webpack-cli --save-dev
  npm install --save-dev html-webpack-plugin
  npm i -D clean-webpack-plugin
  npm i babel-loader
  npm install --save-dev mini-css-extract-plugin
  npm install --save-dev style-loader
  npm install --save-dev css-loader
  npm install sass-loader sass webpack --save-dev
  npm i node-sass
  npm install file-loader --save-dev
  npm install --save-dev html-loader
  npm install copy-webpack-plugin --save-dev

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
