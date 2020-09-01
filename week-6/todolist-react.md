# Todo List React (Routing Lab)

In this lab we create a todo-list app using React a client-side routing library called react-router.

## Requirements

* same as the [todolist lab from week 3](./../week-3/todolist2.md), with the additional following requirements
* use React
* add a client-side routing feature
  * navigating to `/done` should display all completed todos
  * navigating to `/todo` should display all of the incomplete todos
  * navigating to `/all` should disaply all of the todos
* The URL in the address bar should always reflect which view the user is seeing
* use [react-router](https://reacttraining.com/react-router/web/guides/quick-start) for routing

## Hints + Tips

* react-router has a lot features. For this lab though, you probably only really need the stuff covered in the [Basic example](https://reactrouter.com/web/example/basic)
* similar to the structure of the chat app, you will probably want a parent component that keeps track of the todolist state