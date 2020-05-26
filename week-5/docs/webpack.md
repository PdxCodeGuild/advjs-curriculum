<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Webpack](#webpack)
  - [Core Concepts](#core-concepts)
      - [Tools](#tools)
    - [Entry](#entry)
    - [Output](#output)
    - [Loaders](#loaders)
    - [Plugins](#plugins)
    - [Devtools](#devtools)
    - [DevServer](#devserver)
      - [To use:](#to-use)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Webpack

Webpack is an open-source *static module bundler*. Basically, Webpack is an intelligent bundler that bundles together modules and generates static assets representing those modules.

Webpack bundles the JS modules *you* write with third-party modules, and transpiles your code through any preprocessors you specify. Webpack is used primarily for JavaScript, but you can be used to transform all of your frontend assets, like HTML, CSS, and even images.

<!-- The end result: a single bundled JavaScript file. -->

## [Core Concepts](https://webpack.js.org/concepts/)
- [Entry](#entry)
- [Output](#output)
- [Loaders](#loaders)
- [Plugins](#plugins)

#### Tools
- [Devtools](#devtools)
- [DevServer](#devserver)


Note: Since Webpack 4.0, **Webpack no longer requires a configuration file**. Below we have listed the default values for the core concepts.

### Entry
The **entry** or entry point is the top level file(s) you want to include in your build. Webpack begins building out its *dependency graph* from here.

The default entry point is `./src/index.js`.

To configure an entry point, specify `module.exports.entry` in `webpack.config.js`:
```js
module.exports = {
  entry: './path/to/my/entry/file.js'
};
```

### Output 
The **output** is the final bundled file.

The default output file is `./dist/main.js`. Any other generated files are located by default in the `./dist/` directory.

To configure the output, specify `module.exports.output` in `webpack.config.js`:
```js
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),	// output dir
    filename: 'my-first-webpack.bundle.js'	// main output file
  }
};
```

### Loaders 
By default, Webpack only understands JavaScript files. **Loaders** allow Webpack to process other file types and convert them into valid [Webpack modules](https://webpack.js.org/concepts/modules/). With loaders, you can use JavaScript and CSS preprocessors and transpilers, such as Babel or SCSS/SASS. 

To use loaders, you need to specify two key points:
1. `test: <regex for which files to transform>`
2. `use: <which loader to use>`
3. (Optional) `exclude: <regex for which files to exclude>` 

To configure loaders, add the loader in the `module.exports.module.rules` array in `webpack.config.js`:
```js
const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { 
      	test: /\.js$/, // regex for .js file ext
      	use: { loader: 'babel-loader' }, // use babel as loader
      	exclude: /node_modules/	// exclude npm modules
      }
    ]
  }
};
```

Read more about loaders [here](https://webpack.js.org/concepts/loaders/).

### Plugins

To use a plugin, you need to import it via `require(<plugin>)` and add an instance of the plugin to `module.exports.plugins` array using the `new` keyword.

To configure plugins, add the plugin to the `module.exports.plugins` array in `webpack.config.js`:
```js
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
```
In the example above, the `html-webpack-plugin` generates an HTML file that automatically injects all of your generated bundles in it.

Webpack provides many plugins out of the box. Check them out [here](https://webpack.js.org/plugins/).

Read about the plugin interface [here](https://webpack.js.org/api/plugins).

### Devtools
One of the reasons to use Webpack is the performance gains it gives you when you combine and compress all your JS and CSS assets. However, debugging bundled and minimized/uglified code can be a nightmare. Think of your bundled output as a sort of franken-code that's been transpiled and patched together again.

The solution: **source maps**. 

A source map maps the code within your bundled file back to its original position in your source file. This allows for easy debugging after your assets have been optimized.

Webpack allows a `devtool` configuration to specify how source maps are generated. They provide a list of several styles of source mapping and a description on their build and rebuild speed, whether they are production ready, and the quality of the mapped code in their [documentation](https://webpack.js.org/configuration/devtool/).

To set up devtool, in `webpack.config.js`:
```js
module.exports {
  ...
  devtool: 'cheap-module-eval-source-map'
}
```
In the above example, we are using `cheap-module-eval-source-map`. This is a nice selection because it maps to original source code and has fast rebuild time. Feel free to work with a source mapping style that fits for you.

### DevServer
The **Webpack Dev Server** is a fast development server that allows live reloading. It provides fast in-memory access to Webpack assets. 

Note: The Webpack devServer should be used for development only.

#### To use:
1. Install devServer locally
```
> yarn add webpack-dev-server
// OR
> npm install webpack-dev-server
```
2. Set up absolute path to your generated assets in `webpack.config.js`
```js
module.exports {
    ...
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
}
```
3. Add script in `package.json`
```js 
"scripts": {
  "serve": "webpack-dev-server",
  "build": "webpack"
},
```