# Chat Room - Phase 5

In this phase of the project, we will add a routing system to the UI of the chatroom app, as well as the beginnings of a user system.

## Requirements

* Navigating to a url such as `/rooms/<roomname>` should take the app to the "roomname" page
  * additionally, when a user changes rooms, it should be reflected in the URL (i.e. switching to the room "general" should cause the URL to change to `/rooms/general`)
* create routes for `/login`, `/logout`, and `/signup`
  * The login page should present a form for entering username and password
    * for now, submitting the form should just redirect to the home page (`/`) 
  * The logout page should (for now) just be a component that redirects to the login page
    * Meaning, when a user navigates to `/logout`, the result is simply that they are redirected to `/login`
  * The signup page should present a form for signing up a new user (as opposed to logging in an existing one)
    * the form should collect email, username, and password
    * submitting this form should redirect to the home page

## Notes

Next week we will have the app authenticate/authorize users using proper security measures. For now, we are just fleshing out what the behavior will look like.