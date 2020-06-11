# Chat Room - Phase 6

In this phase of the project, you will refactor the backend to use MongoDB instead of simply writing to a text file.

You will also add authentication and authorization for users.

## Requirements

* Refactor to use MongoDB instead of text files for messages
* Store User data in MongoDB
* Properly hash passwords (do not store passwords as plain text)
* login page should actually check if username/password is a match before logging them in
* sign up page should actually create a user in the DB
* When a user tries to visit the home page or a rooms page, redirect them to the login page if they aren't already logged in
