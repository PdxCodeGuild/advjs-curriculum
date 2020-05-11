# Todo List

In this lab you will create a simple todo list in the browser. The main point of this lab is to dust off your browser javascript skills, as well as to practice using browserify.

We won't be using any fancy libraries or frameworks, just vanilla javascript for now.

You will want to use the browser-native DOM functions for reading/writing to the DOM:

* [document.getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
* [document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) and [document.querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
* [document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
* [Node.appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
* [Node.removeChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)

Feel free to use other native DOM methods as well, but the above list should be enough.

If it has been a while since you have done html stuff, you should probably flesh out the html structure first, before adding much javascript.

## Requirements

### Main Functionality

* There should be a text field for entering the text of the todo list
* There should be a button for adding the todo item to the page
* When added to the page, the todo item should have a button for marking it as done/completed
* When clicking on the done button, the todo item should be visually marked as completed
  * strikethrough, color it with CSS, move it to a different section, whatever you want
* Each todo item should also have a delete button for removing it from the list
* There should be 3 buttons for controlling/filtering the display
  * A button for filtering out the completed todos
  * A button for filtering out the non-completed todos
  * A button for showing all todos

### Other Requirements

You are required to use Browserify. This means your index.html file should only include one script tag, and that script tag's src should be a bundled js file.

Strive to break your code into meaningful modules. For example, in a very basic setup you might have:

* A "main" file that does most of the work
* A module for rendering a single todo item

A more modular setup might be something like:

* A "main" file that does little more than including your other modules and putting them together
  * probably will also have some state that gets passed around to the other modules
* A module for rendering a single todo item
* A module for rendering the list of todos
* A module for the text form
* Basically a separate module for everything... You get the idea

The best thing might be something in between these two approaches. Start with the simple approach and try to feel out what you think is the best design.

### Extra Credit

If you complete the above and are happy with your level of modularity achieved, the extra credit is to get more practice with node servers by writing a backend for this todo list app.

Note: "extra credit" doesn't mean "optional". It just means I don't expect everyone will have the time. If you do get this far, you do have to do the extra credit.

There are two main components to this:

1. serve the static files (html, css, and the javascript bundle file)
2. API for saving/retrieving todo items

The second part above (the backend API) will be very similar to the Chatroom app from last week. You just need GET + POST url endpoints, and in those request handlers you can read/write a file which stores the todos.

Another thing you will have to do is modify the frontend to send the GET and POST requests.
