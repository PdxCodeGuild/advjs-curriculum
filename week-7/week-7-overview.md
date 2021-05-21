# Mongodb + Putting It All Together (MERN Stack)

In this section of the course we learn the final piece of the MERN stack: MongoDB. Mongo is a NoSQL database that stores data in JSON-like objects, and is queried using javascript (as opposed to SQL).

This week we will also learn about authentication and authorization. This will allow us to add a user system to the chat app.

## Rough Outline

### Day 1

* [MongoDB assignment](./mongodb.md)

### Day 2

* Enforcing Schemas with Mongoose
* Authentication and Authorization
  * User Systems 
* Assignment: [Todo List Auth](./todo-list-auth.md)
  

### Day 3

* [Course Project Phase 6](./chatroom6.md)

### Day 4

* Continue course project

### Day 5

* Continue course project

## More Resources

* [Mongo Overview](mongo-overview.md)
* [Mongoose Overview](mongoose-overview.md)
* [Mongoose Relations](mongoose-relations.md)
* [Mongoose docs](https://mongoosejs.com/docs/index.html)
* More on [JSON Web Tokens](https://jwt.io/introduction/)
* [jsonwebtoken node module](https://www.npmjs.com/package/jsonwebtoken)
* [bcrypt](https://github.com/kelektiv/node.bcrypt.js#readme)
  * for those who are curious on choosing a cost factor for hashing: [Recommended # of rounds for bcrypt](https://security.stackexchange.com/questions/17207/recommended-of-rounds-for-bcrypt) has some good info
* [Great article about JWTs](https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/#persistance) including best practices for persisting them
  * definitely required reading if you are considering persisting sessions. **Not required** for any assignment in this course since we don't persist sessions.
