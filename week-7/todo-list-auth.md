# Todo List Auth & Mongoose

In this phase of the Todo List assignment, we add proper authentication/authorization, as well as introduce a higher level library for working with Mongo.

## Requirements

* create Mongoose schemas for Todo items as well as Users
* all users should have their own todo list, separate from other users' lists
* backend should have the following routes:
  * public routes: `POST /signup`, `POST /login`
  * private routes: `GET /todos`, `POST /todos`
    * private means the user must be authenticated in order to access the route
* frontend (react app) should have the following client-side routes:
  * public routes: `/login` and `/signup`
  * private routes: `/`, `/done`, `/todo`
    * `/` will be for displaying all todos
    * `/done` will be for displaying completed todos
    * `/todo` will be for displaying incomplete todos

## Hints & Tips

* definitely read the [Mongoose getting started guide](https://mongoosejs.com/docs/index.html)
* start with the backend. Once you have the mongoose models and the express routes, then move on to the frontend
* be careful with arrow functions in your mongoose model file! Binding `this` can cause your models to not refer to the proper `this`.

### useful curl commands for testing the backend routes

GET request to public route

```
curl localhost:8000/hello
```

POST request to login, sending username and password

```
curl -d '{"username":"bobby", "password":"123"}' -H "Content-Type: application/json" -X POST http://localhost:8000/login
```

GET to protected route with the Bearer token in the Authorization header. Assumes TOKEN is an environment variable with the value of the jwt string

```
curl -H 'Accept: application/json' -H "Authorization: Bearer ${TOKEN}" localhost:8000/protected
```

To assign the jwt to the TOKEN environment variable, simply copy the jwt string from the response object that came from `/login`, and assign it to TOKEN like so:

```
TOKEN=<jwt string>
```

To get more fancy, we can do it all on one line if we use a JSON stream parser such as [jq](https://stedolan.github.io/jq/):

```
TOKEN=$(curl -d '{"username":"bobby", "password":"123"}' -H "Content-Type: application/json" -X POST http://localhost:8000/login | jq -r '.token')
```

That will send the curl request to /login, then pipe the response object (which contains the jwt token) into jq. jq will then parse out the "token" field from the object, and assign it into the TOKEN var.
