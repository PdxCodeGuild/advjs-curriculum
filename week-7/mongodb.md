
# MongoDB

## MongoDB setup + interacting with the shell
  
* [install MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
* run `mongod` to start up the mongo database server
  * note that the specific command to run will depend on your operating system and whether you want to run it as a service
* in another shell, run `mongo` to start up a mongo client (it will connect to the server)

* Go through the following guides (make sure you select "mongo shell" as the client type):
  * [Create](https://docs.mongodb.com/guides/server/insert/)
  * [Retrieve](https://docs.mongodb.com/guides/server/read/)
  * [Retrieve - queries](https://docs.mongodb.com/guides/server/read_queries/)
  * [Retrieve - Operators and Compound Queries](https://docs.mongodb.com/guides/server/read_operators/)
  * [Update](https://docs.mongodb.com/guides/server/update/)
  * [Delete](https://docs.mongodb.com/guides/server/delete/)

Now you have seen enough Mongo to cover all of the basic CRUD operations.

## Interacting with Mongo through Nodejs

Interacting with the shell is often the fastest and easiest way to get something done. It also helps us understand how Mongo works. However, we want to be able to write these CRUD operations as part of a script file or an application.
  
* Follow the [official Node.js quick start guide](https://mongodb.github.io/node-mongodb-native/3.4/quick-start/quick-start/)

### What url do you use to connect to mongo?

Usually it will be a combo of hostname + dbname. Example:

```javascript
const hostname = 'localhost'
const databaseName = 'chatroom'

const mongourl = `mongodb://${hostname}/${databaseName}`
```

## Applying what you have learned

* Make a simple Todo-List app using Express, React, and MongoDB

## Notes

* If you want to specify which folder mongo uses to store data, run mongo like this: `mongod --dbpath=/data`
  * replace `/data` with the path to your folder
  * you can use this to have different folders for each project, if you want
