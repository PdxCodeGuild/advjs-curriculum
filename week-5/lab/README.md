# Build System From Scratch Lab

In this lab, you will refactor an existing app to use a different module system and bundler. Then you will swap out yo-yo for React.

This should prepare you for setting up react apps and integrating react into existing projects. Not only will this be useful in the "real world", but it will also be useful for this week's course project assignment, as well as your capstone projects.



## Step 1

refactor the existing project. 

1. change bundler from browserify to webpack
  * figure out how to run webpack in watch mode
    * check out the [webpack CLI docs](https://webpack.js.org/api/cli/)
2. use es6 modules instead of commonjs modules
  * [import docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
  * [export docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

At this point the project should be working as it was before, with the only changes in source code being the use of `import` instead of `require`.

Behind the scenes it is now bundling with webpack instead of browserify.

## Step 2

* change out yo-yo to use React with JSX
  * you will have to setup babel to compile the JSX
    * you will want to use babel's react preset to make this easy: [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react)


## useful links:

* [webpack getting started guide](https://webpack.js.org/guides/getting-started/)

* [babel](https://babeljs.io/)

* [creating a react app from scratch](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)




