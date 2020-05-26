<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Components](#components)
    - [Component-based web architecture](#component-based-web-architecture)
  - [React Components](#react-components)
    - [Class-based components](#class-based-components)
        - [Import statements](#import-statements)
        - [Class definition](#class-definition)
        - [render()](#render)
        - [Component instance](#component-instance)
        - [Rendering onscreen](#rendering-onscreen)
        - [constructor()](#constructor)
    - [Stateless Functional Components](#stateless-functional-components)
        - [When should you use functional components?](#when-should-you-use-functional-components)
        - [When should you use class-based components?](#when-should-you-use-class-based-components)
  - [Props](#props)
  - [Component State](#component-state)
    - [How to bind objects to the component state](#how-to-bind-objects-to-the-component-state)
    - [Example - Counter App](#example---counter-app)
    - [Lifting State up - Communication between parent to child and child to parent components](#lifting-state-up---communication-between-parent-to-child-and-child-to-parent-components)
    - [Props vs. State](#props-vs-state)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Components

### Component-based web architecture
React applications are typically made of **components**.

Web components couple the power of JavaScript with HTML to create custom HTML elements. Components allow you to break down your UI into encapsulated, modular, reusable pieces.

## React Components
There are two ways of creating a React component:
1. [Class-based Component](#class-based-component)
2. [Stateless Functional Component](#stateless-functional-component) 

The second way is simpler, but we'll start by introducing **class-based components** to get a more in-depth understanding of React components.

### Class-based components
Consider the following HelloWorld component class:
```jsx 
1  import React from 'react';
2  import ReactDOM from 'react-dom'; 
3  
4  class HelloWorld extends React.Component {
5    render() {
6      return (
7        <h1>Hello World!</h1>
8      );
9    }
10  }
```
To render the component onscreen:
```jsx 
11  ReactDOM.render(<HelloWorld />, document.getElementById('app'));
```

There's a few things to unpack here.
##### Import statements
```jsx 
1  import React from 'react';
2  import ReactDOM from 'react-dom'; 
```  
Lines 1 & 2 *import* key libraries needed to run React: `react` and `react-dom`.
##### Class definition
Lines 4-10 define the actual HelloWorld component class. 
```jsx 
4  class HelloWorld extends React.Component {
```  
On line 4, we define a class called `HelloWorld` that *extends* the `React.Component` class. 
This is how we create a class-based component: by *inheriting* from React's `Component` class. 
**Note: Always name component classes using UpperCamelCase.**
There are two reasons for this:
1. React interprets components starting with lowercase letters as DOM tags. For example, `<img />`represents an HTML `img` tag, but `<Image />` represents a component and requires `Image` to be in scope.
2. It's the convention for class names.

##### render()
```jsx 
5  render() {
6    return (
7      <h1>Hello World!</h1>
8    );
9  }
```  
Lines 5-9 define the `render` method.
This method is **required**. In fact, it is the *only* required property in a component class definition. This is how you want your component to be *presented*. This typically returns a React element (usually in JSX).

When called, `render` can examine `this.props` and `this.state` and return one of the following:
- React elements (typically JSX)
- String
- Numbers
- Portals (created with `ReactDOM.createPortal`)
- null (renders nothing)

##### Component instance
```jsx 
11  ReactDOM.render(<HelloWorld />, document.getElementById('app'));
``` 
On line 11, we create the actual HelloWorld *component instance*: `<HelloWorld />` and render that component instance onscreen. Notice how the component looks a lot like an HTML tag. `<HelloWorld />` is in fact a JSX element, but instead of using HTML tags like `div` or `p`, we give the tag the same name as our component class. We wrote it out like a self-closing HTML tag. `<HelloWorld></HelloWorld>` is equivalent, but if we are not going to put anything between, it's much more concise to simply write it as a self-closing tag `<HelloWorld />`.

##### Rendering onscreen
Recall that we defined a single method in our component class: `render`. When we call `ReactDOM.render(<HelloWorld />, ... )` on line 11, we pass in our component instance. What happens is `ReactDOM.render()` invokes our component's `render` method, which returns this JSX element: `<h1>Hello World!</h1>`. `ReactDOM.render()` takes that JSX element and adds it to the DOM to make `Hello World!` appear onscreen.

**Do Not Modify State Directly**

##### constructor()
The `constructor` is the place to initialize state and bind event handlers to the class instance. You don't have to implement a constructor if your component is stateless and you don't need to bind methods. 

The constructor takes in the `props` parameter. Make sure to call `super(props)` before any other statement. 

```jsx
constructor(props) {
  super(props);
  this.method = this.method.bind(this);   // bind method
  this.state = { ... };       // initialize state obj
}
```

### Stateless Functional Components
Stateless functional components, also known as *stateless components* or *stateless functional components*, are the simplest way to define a React component. A stateless functional component is like a class-based component except a functional component: 
- is stateless, 
- is defined as a function, and 
- has no lifecycle methods. 

React has alluded to stateless functional components potentially being optimized in the future, but currently (React 16) stateless functional components perform as fast as their stateful class-based component counterpart. The fastest performance comes from [pure stateful class-based components](link).

Example:
```jsx
function Greet(props) {
  return <h1>Hello, {props.name}!</h1>
}
const Greet2 = (props) => { // equivalent as above
  return <h1>Hello, {props.name}!</h1>
} 
```
Functional components are essentially the `render` function of a class-based component. Functional components return a JSX element (just like the `render` function).

You render a functional component the same way you render a class-based component:
```jsx
ReactDOM.render(<Greet name="World"/>, document.getElementById('app'));
```
The above example renders `Hello, World!` to the page.

##### When should you use functional components?
- Your component doesn't manage state
- Your component simply presents data 
- You don't need to control component lifecycle

##### When should you use class-based components?
- Your component manages state
- You need to use component lifecycle methods

## Props
We can pass data one-way via **props**.

## Component State

The React component state allows components to manage data. When data changes, the component automatically rerenders to reflect the updated data.

This process goes through the following steps:

1. Set default state object
  > *React renders component with default state values* 
2. State changes based on event
  > *React rerenders the component*


### How to bind objects to the component state
1. Bind all methods in constructor
  ```jsx
  this.method = this.method.bind(this);
  ```
2. Set up default state object
  ```jsx
  this.state = {attr1: defaultVal, attr2: defaultVal, ...};
  ```
3. Update state based on event
  ```jsx
  method() {
    this.setState((prevState[, props]) => {
      return {attr: newVal};
    });
  }
  ```
  `setState()` takes an updater function with the signature:
  `(prevState, props) => stateChange`

  `stateChange` can just be an object containing state attributes and their new values. 

### Example - Counter App
In the following example, we are setting up a component called Counter that keeps track of a count. We have one button that increments the count. When the button is pressed, we update the state of count, and React dynamically renders the component to reflect the current count.

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    // Step 1
    this.addOne = this.addOne.bind(this);
    // Step 2
    this.state = {count: 0};
  }
  addOne() {
    // Step 3
    this.setState((prevState) => {
      return {count: prevState.count + 1}
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
      </div>
    );
  }
}
ReactDOM.render(<Counter />, document.getElementById('app'));
``` 
[Try it on CodePen](https://codepen.io/DED8IRD/pen/wXOpXW)

### Lifting State up - Communication between parent to child and child to parent components

In React, [the data flows down](https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down). A component's state is only available to itself. 

To enable two-way communication, you can pass parent methods as a prop to child components.

Passing data through props is a *one-way* process -- data is only passed from *parent to child*.

When several components need to reflect the same changing state, you should *lift the shared state up* to their closest common ancestor and then pass the state as props to its children that need it.

In the following example, only the `MainApp` component is *stateful*. It passes its state and its state modifiers as `props` to its child component `Counter`.

```jsx
class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.state = {count: 0}; // state
  }
  addOne() { // state modifier
    this.setState((prevState) => {
      return {count: prevState.count + 1}
    });
  }
  render() {
    return (
      <div>
        <Component1 />
        <Component2 />
        <Counter 
          addOne={this.addOne} // passing in method as prop
          count={this.state.count} // passing in state as prop
        />
      </div>
    );
  }
}


class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>Count: {this.props.count}</h1>
        <button onClick={this.props.addOne}>+1</button>
      </div>
    );
  }
}
ReactDOM.render(<MainApp />, document.getElementById('app'));
``` 

### Props vs. State
| Props                       | Both                       | State                     |
|--------------------------------------|:----------------------------:|------------------------------------|
| Can't be changed by component itself | Are objects           | Can be changed by component itself |
| Come from parent               | Can be used when rendering   | Defined in component itself      |
| Changes from parent cause rerenders  | Changes cause rerenders      | Changes to state cause rerenders   |
