# Todo List 2

This assignment builds off of the previous Todo List assignment. The idea here is to practice modern SPA techniques/technology. Specifically routing.

The Todo List app is already a single page application. However, we don't have any routing functionality. Modern SPAs emulate the URL/address-bar experience, meaning a new "screen" in the app is accompanied with the URL in the address bar changing as if it was a new html page.

## Requirements

Your task is to add routing to the app.

* going to `/done` should display all of the completed items
* going to `/todo` should display all of the incomplete items
* going to `/all` should disaply all of the items

The URL in the address bar should always reflect which view the user is seeing.

### Technology Requirements

* use the [routes](https://www.npmjs.com/package/routes) modules to help with routing
* refactor the app to use [yo-yo](https://github.com/maxogden/yo-yo) for UI components