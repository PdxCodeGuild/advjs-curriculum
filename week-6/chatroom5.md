# Chat Room - Phase 5

In this phase of the project, we will add a routing system to the UI of the chatroom app, as well as the beginnings of a user system.

## Requirements

* create a "welcome" page (a home page) that greets the user and has a room selection for entering a room
  * this page will be shown on the `/` route
  * entering a room will redirect to the corresponding page `/rooms/<roomname>`
* Navigating to a url such as `/rooms/<roomname>` should take the app to that room's page
  * additionally, when a user changes rooms, it should be reflected in the URL (i.e. switching to the room "general" should cause the URL to change to `/rooms/general`)
* The rooms page should display the chat log for that room, as well as a form for submitting messages to that room
  * also include a "back" button to get back to home (`/`)
* create routes for `/login`, `/logout`, and `/signup`
  * The login page should present a form for entering username and password
    * for now, submitting the form should just redirect to the home page (`/`) 
    * also include a link to the "sign up" page in case the user doesn't have an account to log in with
  * The logout page should (for now) just be a component that redirects to the login page
    * Meaning, when a user navigates to `/logout`, the result is simply that they are redirected to `/login`
  * The signup page should present a form for signing up a new user (as opposed to logging in an existing one)
    * the form should collect email, username, and password
    * submitting this form should redirect to the home page
* create a header with a "log out" button. This header should appear in all main pages.
  * include the current user's username in the header next to the logout button
  * if they are not logged in, display a "log in" button instead
* don't get the username by simply calling `prompt` like we did before. Instead, the username should come from the login form.

## Resources

* check out the [URL Parameters](https://reacttraining.com/react-router/web/example/url-params) page in the react-routers docs. This will be useful for rendering dynamic routes such (`/rooms/<roomname>`)
* For redirection, there are multiple options.
  * the [useHistory](https://reacttraining.com/react-router/web/api/Hooks/usehistory) hook is an easy way to dynamically trigger a redirect

## Notes

Next week we will have the app authenticate/authorize users using proper security measures. For now, we are just fleshing out what the behavior will look like.
