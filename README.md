# React Boilerplate

## Content

1. Scripts
2. DevDependencies
3. Dependencies

### General Info

 * [Webpack](https://webpack.js.org/concepts/)
  
    *Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of           transforming, bundling, or packaging just about any resource or asset.*

### 1. Scripts

```javascript
"scripts": {
  "dev": "webpack-dev-server --progress --colors --inline --hot",
  "build": "webpack --progress -p"
},
```

#### 1.1 "dev": "webpack-dev-server --progress --colors --inline --hot",

  Builds the development server [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)
  
  **Options:**
  
 * *--progress: Output running progress to console.*
  
 * *--colors: Enables/Disables colors on the console.*
  
*  *--inline: Toggle between the dev-server's two different modes. By default the application will be served with inline mode enabled. This means that a script will be inserted in your bundle to take care of live reloading, and build messages will appear in the browser console.*
            
* *--hot: Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload.
        More information at [HMR](https://webpack.js.org/concepts/hot-module-replacement/)*
        

#### 1.2  "build": "webpack --progress -p"
  
  Builds webpack modules, that are mapped under *[webpack.config.js](webpack.config.js)*
 
  **Options:**
  
  * *--progress: Output running progress to console.*
  
  
### 2. DevDependencies
  
  * [Axios](https://github.com/axios/axios)
  
      Promise based HTTP client for the browser and node.js, used for making promise based asynchronous requests.
  
  * [Babel](https://babeljs.io/)
  
      It's a "transpiler" for Javascript language, meaning that it takes modern Javascript (ES6) and transforms it to older versions, so      other browsers can support the site's Javascript.
  
    ```javascript
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-plugin-transform-class-properties": "^6.24.1",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    ```
    
     * [Babel Loader](https://github.com/babel/babel-loader)
        
        Loader for using Babel in webpack, configuration is done in: webpack.config.js.
      
     * Babel Presets
       
       Presets serve the purpose of taking sintax e.g (ES6, React, ...) and transpiling it to basic Javascript sintax.
       
* [Copy Webpack Plugin](https://github.com/webpack-contrib/copy-webpack-plugin)
  
  Copies individual files or entire directories to the build directory.
        
* [Css Loader](https://github.com/webpack-contrib/css-loader)
     
  The css-loader interprets @import and url() like import/require() and will resolve them.
        
* [Extract Text Webpack Plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)
       
  Extract text from a bundle, or bundles, into a separate file. It moves all the required .css modules in entry chunks into a    separate CSS file. So your styles are no longer inlined into the JS bundle, but in a separate CSS file (styles.css). If your total stylesheet volume is big, it will be faster because the CSS bundle is loaded in parallel to the JS bundle.
  
* [Imagemin Webpack Plugin](https://github.com/Klathmon/imagemin-webpack-plugin)
  
  This is a simple plugin that uses Imagemin to compress all images in your project.

* [Node Sass](https://github.com/sass/node-sass)

  Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.
It allows you to natively compile .scss files to css at incredible speed and automatically via a connect middleware.
  
* [React](https://reactjs.org/)
  
  A JavaScript library for building user interfaces
  
* [React Redux](https://github.com/reactjs/react-redux)
    
  Official React bindings for Redux.
    
 * [Redux](https://redux.js.org/)
    
   Redux is a predictable state container for JavaScript apps.
    
* [Redux Multi](https://github.com/ashaffer/redux-multi)
    
  Dispatch multiple actions from one action creator
   
 * [Redux Saga](https://github.com/redux-saga/redux-saga)
  
    Redux Saga is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, simple to test, and better at handling failures.
    
* [Sass Loader](https://github.com/webpack-contrib/sass-loader)
   
  Loads a SASS/SCSS file and compiles it to CSS.
    
 * [Style Loader](https://github.com/webpack-contrib/style-loader)
   
   Adds CSS to the DOM by injecting a <style> tag
  
 * [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/)
  
    Webpack development server 
    
## 3. Dependencies

  This are needed dependencies on production
  
  * [Boostrap](https://getbootstrap.com/)
    
    Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.

  * [Reacstrap](http://reactstrap.github.io/)
  
    Stateless React Components for Bootstrap 4.

