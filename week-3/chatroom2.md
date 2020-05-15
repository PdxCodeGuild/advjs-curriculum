# Chat Room - Phase 2

This assignment will be building off of last weeks Chat Room project. The idea is to add a frontend to last weeks backend.

## Starter Files

Starter files to go off of are provided [here](./chatroom-phase2-starter)

## Requirements

### Functionality Requirements

* all messages should be displayed in the UI
* there should be a text entry and submit button 
  * submit should send new message to the server
* a timer should fetch new messages at regular intervals
  * the UI should be updated to display the new messages
* There should be a username/nick feature
  * upon page load, the first thing that should happen is a prompt for the user to enter their nick
  * messages sent to the server should include the nick as part of the POST
  * messages recieved from the server should also include the nick, and the UI should display the nicknames for each message
* There should be a rooms/channels feature
  * posts should have a room/channel property
  * the frontend will filter posts based on which room the user has selected
  * the UI will need a way to select a room as well as add a room

### Other Requirements

* break code into modules, use browserify
* use [yo-yo](https://github.com/maxogden/yo-yo) for UI components
* write tests
  * how much to test is up to you
  * although you should at least test core functionality
