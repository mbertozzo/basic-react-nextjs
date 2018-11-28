# basic-react-nextjs
This project is just a playground to make some experiment with Next.js.

## Getting started
To get a working copy of this project on your machine you should:

1. clone the repo with `$ git clone git@github.com:mbertozzo/basic-react-nextjs.git your-local-folder`
2. install dependencies with `$ yarn` or `$ npm install`
3. launch the development environment with `$ yarn dev` or `$ npm run dev`
4. open your browser at the address `http://localhost:3000`

## Create and launch a production build
To get your production build ready and live use the commands:

```bash
$ yarn build  #or npm run build
$ yarn start  #or npm run start
```

## Some additional configurations
This project uses the `@zeit/next-sass` package to compile and bundle SCSS files. You can enable CSS modules by editing `next.config.js` as follows:

```javascript
const withSass = require('@zeit/next-sass')
module.exports = withSass({
  cssModules: true
})
```

For any further customization you can read (the package documentation)[https://github.com/zeit/next-plugins/tree/master/packages/next-sass].