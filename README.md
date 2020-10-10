# udemy webpack set up - create-react-app under the hood
## not working - syntax change since time of lecture

## Useful Resources & Links
- [Webpack Docs:](https://webpack.js.org/concepts/)
- [More about Babel:](https://babeljs.io/)

# workflow

must handle 
- compile next gen js for older browsers
- handle jsx
- css autoprefixing
- support image imports
- optimize code

set up npm 
> $ npm init -y

> $ npm install --save-dev webpack webpack-dev-server 

set up basic react app file structure
- /src
    - app.js (routes)
    - index.html
    - index.js (mount react app w reactDOM)
    - index.css
    - /assets
    - /components
        - pizzaimage .js (to use image import as component and give style)
        - pizzaimage.css
    - /containers
        - pizza.js
        - users.js
    - /hoc
        - syncComponent.js (lazy loading)

install dependencies
> $ npm install --save react react-dom react-router-dom 

**package.json**

write new script for `npm start`

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server"                <<<                
  },
```

**error** : need webpack cli
> npm install --save-dev webpack-cli 

**error** : doesnt know jsx in `index.js`
needs `webpack.config.js` for it to use

## JS - babel
- webpack needs to understand next gen js to use modern js in browsers
- needs to understand `React` and `JSX`
- converts all js to run in older browsers

> $ npm install --sav-dev @babel/core @babel/preset-env @babel/preset-react @babel/preset-stage-2 babel-loader @babel/plugin-proposal-class-properties

- add to webpack rules /test to hand off files to babel
- babel file in json with double quotes to tell it what to do with files

## css 
> $ npm install --save-dev style-loader css-loader     

- add to webpack rules /test to hand off files

> $ npm install --save-dev postcss-loader

> $ npm install --save-dev autoprefixer   

**package.json**

- tell it how to autoprefix, what kind of browsers were supporting
```
  "license": "ISC",
  "browserslist": "> 1%, last 2 versions",    <<<
  "devDependencies": {
```

## images

- use images as urls to load in image 
> $ npm install --save-dev url-loader     

- inject scripts and styles into index.html
> $ npm install --save-dev html-webpack-plugin    

- ^^ transform files and transform into html


**error** : 'file-loader' wasnt found for image import 
> $ npm install --save-dev file-loader     
- ^^ url-loader depends on file-loader

**webpack.config.prod.js** 

copy `webpack.config.js` change `mode` and `devtool` 

**package.json**

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server",
    "build:prod": "webpack --config webpack.config.prod.js"        <<<
  },
```

> $ npm run build:prod
