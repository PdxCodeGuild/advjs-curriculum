<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Create-React-App Quickstart](#create-react-app-quickstart)
  - [To create an app](#to-create-an-app)
  - [Default scripts](#default-scripts)
    - [start](#start)
    - [test](#test)
    - [build](#build)
  - [Moving beyond Create-React-App](#moving-beyond-create-react-app)
    - [eject](#eject)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Create-React-App Quickstart

If you're looking for a quick and simple React configuration that doesn't require [webpack](https://github.com/DED8IRD/NodeReactFullStack/blob/master/2%20React/docs/Webpack.md) or Babel setup, you can use Facebook's [`create-react-app`](https://github.com/facebook/create-react-app) command-line utility. 

Create-react-app (CRA) preconfigures and hides Webpack and Babel so you can focus on just writing code.

## To create an app 
```sh
create-react-app my-app
```
This will create a new directory called `my-app` within the current directory. CRA generates the initial project structure inside `./my-app/` and installs the transitive dependencies: 
```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── registerServiceWorker.js
```

## Default scripts
CRA preconfigures the following scripts:
### start
To run your app in development mode:
```
> yarn start 
// OR 
> npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The development server features live-reload for any changes you make to your code.

Build errors and lint warnings are shown in the console.

### test
To run the test watcher in interactive mode:
```
> yarn test
// OR 
> npm test
```
Read more about testing [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

### build 
To build your app in production mode:
```
> yarn build 
// OR 
> npm build
```
This bundles React in production mode and optimizes your build for deployment. Your build is located in the `build` folder.

Read more about `create-react-app` [here](https://github.com/facebook/create-react-app).

## Moving beyond Create-React-App
### eject
**⚠ There's no turning back when you do this.**

If you want to configure your React app beyond what CRA supports, you can `eject`. This essentially pulls your app out of the CRA framework and into a standard Webpack build. CRA hides a lot of configuration (RE:Webpack, Babel, etc.) under the hood, and running `eject` pulls everything out and into the your app directory.

Specifically, `eject` removes `create-react-app` and copies your application's build dependencies, configuration files, and scripts into your app's directory.

To eject:
```
> yarn eject 
// OR 
> npm eject
```

Read more about ejecting [here](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md).