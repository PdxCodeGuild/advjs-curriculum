# Week 5 - Frontend Frameworks (React)

In this section of the course we build off of the modular UI concepts we've briefly seen from yo-yo by learning the React framework.


## Rough outline


### Day 1

* Solution lecture to chatroom phase 3
* Intro to React
  * counter example
* Activity: follow the [official React tutorial](https://reactjs.org/tutorial/tutorial.html)
  * Make sure you setup the local development environment using create-react-app
  * When finished, work on making the following changes:
    * Simplify the time-travel feature to just be Undo/Redo buttons
    * When the game is over, present a "Play again?" button, and automatically restart the game if they click it
    * Before the game starts, ask if X or O should get the first move 
* Also see the [step-by-step guide](https://reactjs.org/docs/hello-world.html)
* Note: a lot of previous techniques/patterns we've seen are used all the time in React (it's almost like I planned that...)
  * notice how some of the click handlers make use of closure-scope variables
  * notice the use of `map` to go from an array of data to an array of components
  * notice the similarity between JSX and yo-yo's tagged template strings
  * notice how create-react-app bundles the javascript files and adds the ability for us to use a module system in the browser
  * notice how React uses a State -> DOM architecture instead of keeping state in the DOM nodes

### Day 2

* more React fundamentals

### Day 3

* Topic: Anatomy of a Modern React Stack (Tooling)
  * Lecture on Babel, JSX, Webpack, create-react-app, and modern React ecosystem in general
    * warning: may include rants about needless complexity
    * see the brilliant article [How it feels to learn JavaScript in 2016](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f)
* Activity: [Build System From Scratch Lab](./lab)


### Day 4

* Activity: [Course Project Phase 4](./chatroom4.md)


### Day 5

* Continue Course Project

## Docs

Check out the following for more info:

* [React official homepage](https://reactjs.org/)
* [JSX](./docs/JSX.md)
* [Components](./docs/components.md)
* [The Virtual DOM](./docs/vdom.md)
* [Webpack](./docs/webpack.md)
* [create-react-app](./docs/CRA.md)
