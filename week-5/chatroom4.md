# Chat Room - Phase 4

In this phase of the project, we will refactor our old chatroom server to use React on the fronted.

## Requirements

* Completely replace yo-yo with React
* Use JSX
* The backend should not have to change, other than the build system
* Use create-react-app to generate the starter files, compile the JSX, and bundle the modules

## Helpful tips

* create-react-app will serve the static files, but this causes a problem where HTTP requests from the frontend will be talking to the wrong backend
  * I found this article helpful: [Create React App with an Express Backend](https://daveceddia.com/create-react-app-express-backend/)
  * the trick is to configure create-react-app to forward requests to the server pointed to by the "proxy" option
  * essentially you will add a line to the package.json that looks something like this: `"proxy": "http://localhost:8000",`
  * official docs here: [Proxying API Requests in Development](https://create-react-app.dev/docs/proxying-api-requests-in-development/)
* Also check out the docs for [creating forms in react](https://reactjs.org/docs/forms.html#gatsby-focus-wrapper)
