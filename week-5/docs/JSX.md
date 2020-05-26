<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [JSX](#jsx)
    - [How to use JSX](#how-to-use-jsx)
    - [JSX Elements](#jsx-elements)
      - [Attributes](#attributes)
        - [Special cases](#special-cases)
          - [Event Listeners](#event-listeners)
    - [Embedding JS Expressions in JSX](#embedding-js-expressions-in-jsx)
  - [Conditionals in JSX](#conditionals-in-jsx)
  - [Arrays in JSX](#arrays-in-jsx)
    - [Keys](#keys)
  - [Rendering JSX](#rendering-jsx)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# JSX
JSX stands for *JavaScript XML*. JSX is essentially syntactic sugar for JavaScript to allow it to play well with HTML. 

Consider the variable declaration:
```jsx
const element = <h1>Hello, world!</h1>;
```

This is JSX. It looks like HTML, but it comes with the full power of JavaScript. JSX creates React elements, which compiles into regular DOM elements.

Note that React [doesn't require](https://reactjs.org/docs/react-without-jsx.html) JSX, but it's highly recommended to use it. We'll be using a lot in this course.

JSX allows for inline templating. This means your React projects will likely have very empty HTML files, since most of the HTML will be programmatically generated when the JSX compiles.

### How to use JSX
JSX is a *syntax extension* that needs to be *compiled* into plain JavaScript for browsers to run. You'll need to install **Babel** to transpile JSX into regular JavaScript. 

Once Babel is installed and configured, you're ready to go. You can write basically any HTML expression using JSX.

### JSX Elements
JSX elements are treated as JavaScript expressions. A JavaScript expression is anything that *evaluates to a value*: variables, function calls, operations, and values themselves. 
This means JSX elements can go where any valid JS expressions can go:
- Saved in a variable
```jsx
const attackBtn = <button>ATTACK</button>;
```
- Passed into a function
```jsx
ReactDOM.render(<p>I'm JSX!</p>, document.getElementById('app'));
```
- Stored in an array 
```jsx
const blogPosts = [
  <p>Blog is short for bullfrog</p>,
  <p>Blog is short for boiled log</p>,
  <p>Blog is short for boy lord ogre</p>,
  <p>Blog is short for bologna</p>
];
```
- Stored in an object 
```jsx
const blog = {
  title: <h1>Blog</h1>,
  subtitle: <h2>Blog is short for...</h2>,
  posts: blogPosts
};
```
[Try it on CodePen.](https://codepen.io/DED8IRD/pen/pKxJdb)
- etc.

JSX elements can be *nested* like HTML elements.

```jsx
const nestedList = (
  <ul>
    <li>eggs</li>
    <li>bacon</li>
    <li>milk</li>
  </ul>
);
```

Note that a JSX element **must be enclosed as a single element**.

Invalid:
```jsx
const notValidJSX = (
  <p>Gives</p>
  <p>You</p>
  <p>An</p>
  <p>Error</p>
);
```

Valid:
```jsx
const validJSX = (
  <React.Fragment>
    <p>No</p>
    <p>Errors!</p>
    <p>:^)</p>
  </React.Fragment>
);
```

We enclosed our `p` elements with a `<React.Fragment>` tag. This is because a JSX element **must be a single element**. The `<React.Fragment>` tags aren't rendered onto the actual DOM. It's perfectly fine to enclose your child elements with a `<div>` tag as well, just note that the `<div>` tags *will* be rendered.

#### Attributes
JSX elements can have *attributes* like HTML elements can. 

```jsx
const helloWorld = <h1 id="hello">Hello, world!</h1>;
```

Note: Wrap multiline JSX expressions with parentheses.

```jsx
const worldImg = (
  <img 
  src="https://bit.ly/2Ig7SHP"
  alt="world"
  width="400px" 
  height="400px"
  />
); 
```

##### Special cases 
Some HTML attributes have slightly different names in JSX. This is typically because some words are reserved keywords in JavaScript and therefore must have a different name in JSX.

- Use `className` instead of `class`

###### Event Listeners 
Event listeners are written in **camelCase**
- Use `onClick` instead of `click`
- Use `onMouseOver` instead of `onmouseover`
- etc. (See all React-supported events [here](https://reactjs.org/docs/events.html#supported-events))
  

### Embedding JS Expressions in JSX
You can embed any valid JavaScript expression inside curly braces in JSX. 

Consider this example:
```jsx
const name = 'John Doe';
const element = <p>Hello, {name}</p>;

ReactDOM.render(element, document.getElementById('app'));
```
Let's not worry about that last line just yet. It's what actually renders the JSX element to the DOM. 
In the above example, `Hello, John Doe` is rendered to the page. 

Any valid JavaScript expression can be embedded inside the JSX curly braces. For example, `1+1`, `user.name`, and `greet(user)` are all valid JS expressions and can therefore be embedded in JSX.

We'll call the `greet(user)` function in the following example:
```jsx
function greet(user) {
  return 'Hello, ' + user.name;
}
const user = {
  name: 'Jane Doe',
  job: 'guinea pig'
};
const element = (
  <React.Fragment>
    <p>{greet(user)}!</p>
    <p>{user.name} is a {user.job}.</p>
  </React.Fragment>
);
ReactDOM.render(element, document.getElementById('app'));
```
The above example renders: 
```
Hello, Jane Doe!
Jane Doe is a guinea pig.
```
[Try it on CodePen.](https://reactjs.org/redirect-to-codepen/introducing-jsx)

## Conditionals in JSX
You can't insert `if` statements in JSX. 
Instead, there are three basic ways to conditionally render JSX:
1. Functional conditional (if statement within a function)
```jsx 
const gradeMessage = (gpa) => {
  if (gpa > 3.0) {
    return <p>You're doing great!</p>;
  } else if (gpa > 2.0) {
    return <p>You're passing</p>;
  } else if (gpa > 1.0) {
    return <p>You're not doing so hot</p>;
  } else {
    return <p>You're failing</p>;
  }
}
const gpa = 3.9;
const progressReport = (
  <div>
    <p>GPA: {gpa}</p>
    {gradeMessage(gpa)}
  </div>
);
ReactDOM.render(progressReport, document.getElementById('app'));
```
The above renders:
```
GPA: 3.9 
You're doing great!
```
2. Ternary operator `(conditional ? if : else)`
If you only need to render an if-else condition, you can use a ternary operator for shorthand.
```jsx 
const person = {
  name: 'Brutus',
  job: 'Strong Man'
};
  const personDetails = (
  <p>{person.name ? person.name : 'Anon'} is {person.job ? person.job : 'unemployed'}.</p>
);
ReactDOM.render(personDetails, document.getElementById('app'));
```
The above renders:
`Brutus is Strong Man.`

Comment out `name: 'Brutus',` and it will render to:
`Anon is Strong Man.`

Comment out `job: 'Strong Man'` and it will render:
`Anon is unemployed.`

3. Logical AND `(condition && <jsx element>)`
If you only need to render something if a condition is true, you can use the `&&` operator. This is because in JavaScript, `true && expression` always evaluates to `expression` and `false && expression` always evaluates to `false`. 

```jsx 
const messageCount = 0;
const messageCountDisplay = (
  <React.Fragment>
    {messageCount > 0 && <p>You have {messageCount} new messages.</p>}
  </React.Fragment>
);
ReactDOM.render(messageCountDisplay, document.getElementById('app'));
```
The above renders nothing to the DOM.
Change `messageCount` to be equal to `3` and it will render `You have 3 new messages.` to screen.

## Arrays in JSX
If you try to embed an array directly in a JSX element, you probably won't get the result you want. React renders an array as its items joined together without a  delimiter. 
```jsx
const fruits = ['apples', 'oranges', 'bananas'];
const badFruitsList = <p>{fruits}</p>;
```
The above renders `applesorangesbananas` onscreen.

You might think to iterate over the array like so: 
```jsx
{
  for (let i=0; i<fruits.length; ++i){
    <li>{fruits[i]}</li>
  }  
}
```
... but this will give you a syntax error. Unfortunately, loops are *not JavaScript expressions*, so you can't embed them in JSX.

Instead, use `Array.map` to map array items to their JSX element presentations.
```jsx
const goodFruitsList = (
  <ul>
    {fruits.map((fruit) => <li>{fruit}</li>)}
  </ul>
);
```
The above renders:
- apples
- oranges 
- bananas

If you run the code above and open up your console, you'll get the following warning:

`Warning: Each child in an array or iterator should have a unique "key" prop.`

... which brings us to another point:

### Keys

The **key** should be a unique identifier for your iterable item. Keys allow React to identify which items have been added/removed/updated. 

Not all lists need keys. It is necessary to set up keys when:
1. List items need to maintain a stable sense of identity (e.g. keeping track of whether a todo has been checked off), or
2. The list order might be rearranged/shuffled.

When in doubt, it doesn't hurt to use keys. 

Typically if you're working with a database, this will be the item's *primary key*. Otherwise, you'll need to assign an unique identifier.

A good rule of thumb is that elements inside the `map()` call need keys.

To fix the above code, we'll assign a `key` prop inside the JSX list element in your `map`:
```jsx
const goodFruitsListWithKeys = (
  <ul>
    {fruits.map((fruit) => <li key={fruit}>{fruit}</li>)}
  </ul>
);
```
Here, we're using the item's value for the `key` prop. Note: if you're allowing duplicate entries in your list, you should select a different key.

Read more about why keys are necessary [here](https://reactjs.org/docs/reconciliation.html#recursing-on-children).

[Try out Arrays in JSX on CodePen](https://codepen.io/DED8IRD/pen/gKBabb)

## Rendering JSX
We saw this line in some of the examples:
```jsx
ReactDOM.render(element, document.getElementById('app'));
```
This line is what actually renders the JSX element onscreen. 

`ReactDOM` is the name of the library that contains React-specific methods that interact with the DOM. We'll go into detail about how to import ReactDOM later in the course. 

ReactDOM's `render` method takes two arguments:
1. JSX element
2. DOM element (where you want your JSX element rendered)

`ReactDOM.render` *appends* its first argument onto the DOM element selected as its second argument.

In `app.js`:
```jsx
const element = <h1>Hello, world!</h1>;
ReactDOM.render(element, document.getElementById('app'));
```

The above is equivalent to:
```jsx 
ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById('app'));
```

In `index.html`:
```html 
<!doctype html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>Learn ReactJS</title>
  </head>

  <body>
    <div id='app'></div>

    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src='app.js'></script>
  </body>

</html>
```
Try it out [here](https://codepen.io/DED8IRD/pen/bKMrqG).