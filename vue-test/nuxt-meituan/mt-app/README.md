# mt-app

> My gnarly Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

###"dev": "cross-env NODE_ENV=development nodemon server/index.js --watch server",
###"dev": "cross-env NODE_ENV=development nodemon server/index.js --watch server --exec babel-node",
###"start": "cross-env NODE_ENV=production node server/index.js",
###"start": "cross-env NODE_ENV=production node server/index.js --exec babel-node",
###创建.babelrc
###.babelrc 文件中 {"presets": ["es2015"]}
###npm install babel-preset-es2015
###成功识别import
###npm i sass-loader node-sass