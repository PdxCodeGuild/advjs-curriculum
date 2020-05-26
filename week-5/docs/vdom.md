<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Virtual DOM](#virtual-dom)
  - [What is the Virtual DOM?](#what-is-the-virtual-dom)
  - [How it works](#how-it-works)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Virtual DOM

DOM manipulation is central to modern, dynamic web applications. Modern websites, especially with the trend to single-page applications, can have enormous DOM trees. Because DOM manipulations are significantly slower than most JavaScript operations, these operations can end up being very expensive. This is exacerbated by the fact that most JavaScript frameworks update the DOM much more than they actually need to.

Say you have a todo list. When you check off a single item, most JavaScript frameworks would rerender the entire list rather than updating the single item that has changed. This is just a small example, but thinking on the scale of modern sites with huge DOM trees, inefficient DOM updating can result in huge performance losses. 

To address wasteful DOM manipulation, React uses something called the *Virtual DOM* or *VDOM*. 

## What is the Virtual DOM?
The virtual DOM is an lightweight abstraction of the HTML DOM. 

There is a corresponding VDOM object for each DOM object. The VDOM object acts as a lightweight representation of the real DOM object. The VDOM object contains the same properties of its corresponding DOM object, but it lacks the ability to directly change what renders to the browser.

You can liken the VDOM as a *blueprint* whereas the DOM is the constructed house. Editing a blueprint is much more efficient than making changes to an existing house. This is why manipulating the VDOM is much faster: no objects are being rendered onto the screen when you edit the VDOM.

## How it works
ReactDOM takes snapshots of the virtual DOM and syncs up those snapshots with the real DOM. This process is called [*reconciliation*](https://reactjs.org/docs/reconciliation.html), or *diffing*.

Whenever a JSX element is rendered, the entire VDOM updates. React then compares the current VDOM with the last snapshot. Through this comparison, React can discriminate *exactly* which objects have changed. Only the objects that changed get updated onto the DOM. 

This is the heart of React's performance. By updating only the necessary objects on the DOM, React achieves its telltale speed.

