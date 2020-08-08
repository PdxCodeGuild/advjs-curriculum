# Chat Room

In this lab you will build a backend for a simple chat room app.

Do not worry about the frontend at all. We will get to that in a future lab.

## Requirements

### REST API

Your server should expose REST endpoints (URLs) to GET/POST to.

Clients of your server should be able to fetch all messages, as well as post new messages.

It will be up to you to design a URL scheme. I recommend keeping it very simple for now. For example, maybe just have an endpoint `/messages`. Sending a GET to `/messages` will respond with a list of messages. Etc.

### Persistence

We need some way to save messages on the server. This is so we can send the messages to clients on a GET request.

For now, we will choose a simple yet very effective option: files.

Later in the course we will learn about databases, but for now, files will work great.

It will be up to you to design a scheme for saving messages to files. Consider the following questions:

* Should every message have its own file?
* Should every message be appended to one file?
* What metadata should we store along with the message (date/time, etc.)?
* What format should we store data (one line per message, csv, JSON, etc.)?

### Testing

You will need some way of testing that your server is behaving how you want.

To test your server, there are a few options. Each has its own tradeoffs.

* use a command like `curl` to GET/POST from the command line
  * maybe even write a bash script to automate sending different types of requests

* write node scripts that send http requests
  * either log out the output, or write proper tests
    * check out [tape](https://github.com/substack/tape) for a simple node testing framework

* make a simple frontend page (html + js) that will send http requests to the server
  * your frontend script could either append results to the DOM, or just log out the response
  * you could also have a frontend testing framework like we've seen in previous weeks to test the response

## Extra Credit

Here are some ideas to take the application further:

* Store additional data with each message
  * username field, date, etc.
* create a simple html page
  * there should be a display section that displays all messages
  * there should be a form for submitting new messages
  * your server should serve the static files (html, css, js)
* better error handling
  * respond properly to bad requests, such as 404s
* Write automated tests using [tape](https://github.com/substack/tape)
