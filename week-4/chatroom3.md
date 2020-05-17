# Chat Room - Phase 3

In this phase of the project, we will refactor our old chatroom server to use the express framework, as well as implement an event-driven architecture using web sockets.

## Requirements

* Routing, static file serving, and general request/response handling should use Express
* Clients should no longer have to continuously poll for new messages
  * Instead, clients should be notified of new messages through an event system over web sockets
* Backend should still save messages to a file. Messages from that file should be served upon client connection
* If you haven't already, add the rooms feature and the username feature