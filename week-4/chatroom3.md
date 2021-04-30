# Chat Room - Phase 3

In this phase of the project, we will refactor our old chatroom server to use the express framework, as well as implement an event-driven architecture using web sockets.

## Requirements

* Routing, static file serving, and general request/response handling should use Express
* Clients should no longer have to continuously poll for new messages
  * Instead, clients should be notified of new messages through an event system over web sockets
* Backend should still save messages to a file. Messages from that file should be served upon client connection
* If you haven't already, add the rooms feature and the username feature

## Hints + Tips

* before adding web sockets, start by refactoring the backend to use express
* check out the docs for the following features:
  * [serving static files](https://expressjs.com/en/starter/static-files.html)
  * [basic routing](https://expressjs.com/en/starter/basic-routing.html)
* for getting the data out of a POST request, check out the [express.json() middleware](https://expressjs.com/en/4x/api.html#express.json)
  * check out [this article](https://codewithhugo.com/parse-express-json-form-body/#) to see example usage
  * here's a [good stack overflow answer](https://stackoverflow.com/a/10007542/2254887) which demonstrates how to use the `express.json` middleware
* don't make any changes to your frontend files until you get the express backend working
  * this will allow you to test your backend by using your old frontend
* once you get the old frontend working with the new express backend, now it's time to add web sockets
  * remove the setInterval, we no longer want to poll the server for chat messages. Instead, we want to be notified of new messages using web sockets
  * refer to the [socket.io tutorial from yesterday](https://socket.io/get-started/chat/) to see how to emit events and setup event listeners
  * to send a message using web sockets instead of HTTP: replace the POST request with `socket.emit`
  * to listen for message events instead of making a GET request: use `socket.on`
* one difference between the socketio tutorial and how we have our stuff setup is that we are using browserify (meaning we can `require` the library instead of adding a script tag in the html). 
  * however, this comes with a complication since socketio comes with both a server module and a client module
  * to properly require the client module in your frontend, write `const io = require('./node_modules/socket.io/client-dist/socket.io.js')`
