# MongoDB Overview

## What is MongoDB?
MongoDB is a *non-relational* or **NoSQL database**. MongoDB has two key benefits over relational databases:

1. Flexibility
2. Scalability


To understand NoSQL and Mongo, let's dive a little into relational databases first.

### Relational databases vs NoSQL databases
Relational databases, or **SQL (Structured Query Language) databases**), have been the primary data storage mechanism for decades. NoSQL databases, however, are gaining in popularity.

There are different types of database models for NoSQL databases, since 'NoSQL' essentially just means 'not a SQL database'. NoSQL databases typically fall into one of the following data models:

1. Key-value stores
2. Wide-column stores
3. Graph databases
4. Document databases

We're not going to delve into the details of the first three data models, as we're focusing on MongoDB. MongoDB is a **document database**. It is probably the most popular document database.

| SQL Databases | NoSQL Databases |
| ------------- | --------------- |
| Store related data in *tables* | Store related data in JSON-like *collections* |
| Require schema to define table prior to use | Doesn't require schema to store data |
| Normalizes data to reduce data redundancy | Usually denormalized (all info about particular item stored in single document) |
| JOINs tables to retrieve related data | Denormalized collections need no JOINs |
| Implement data integrity rules (ACID transactions) | Data can be saved anywhere/anytime |
| *Transactions* guarantee updates succeed/fail as atomic unit | Guarantee updates to a single document but not multiple documents\* |
| ACID properties to guarantee data integrity | BASE (basic availability, soft-state, eventual consistency) properties\* |
| Not easily scaled | Easily scaled and excellent performance |
| Use SQL for querying | Use JSON for querying |

\***Note: Mongo 4+ now offers support for multi-document transactions**

Popular relational databases include: Oracle, PostgresQL, and MySQL.
Popular NoSQL databases include: MongoDB, Redis, Cassandra, CouchBase, and Dynamo.

### How MongoDB stores data
| SQL Databases | MongoDB |
| ------------- | ------- |
| Store related data in *tables* | Store related data in *collections* |
| Each item in a table is called a *row* or *entry* | Each item in a collection is called a *record* and is basically JSON. Each record's attributes are stored as *key-value* pairs |
| Tables have *schemas* | *Schemaless*. Each record can have its own distinct set of properties |


### Flexibility
The most noticeable difference between relational SQL databases and MongoDB is MongoDB's *schemalessness*. In the Users Collection example below, we will highlight just that.

**Users collection example**

| Users Collection |
| ---------------- |
| `{id: 1, name: 'schwarma jim', job: 'schwarma artist'}` |
| `{id: 2, name: 'herb herbert bert', age: 92}` |
| `{id: 3 name: 'pepperoni', sensitivities: ['ham', 'nuts', 'cheese']}` |
| `{id: 4 name: 'johnson XVII', age: 108}` |
| `{id: 5 name: 'rango'}` |

You'll notice above that some users have entirely different fields. Not every user has a `job` field, for instance, or an `age`. Each entry is representing a user, a person, but they have flexibility in the kinds of fields they have. 

This loose structuring is what gives MongoDB its excellent **flexibility**. In a relational database, you must strictly define exactly what data each table is going to hold with a *schema*, and each update to the table must enforce that schema on every piece of data. This makes changing the structure of your data difficult, especially when working with existing data in a database. As your application evolves, you may realize you need to restructure your data models. MongoDB allows you to do so easily, whereas it is much more difficult to make modifications with a relational database.

### Scalability 
MongoDB is high-performance and highly **scalable**. It distributes your database across many nodes and data centers, sustains incredibly fast read/writes, and can store over a billion documents.

### Ease of Use 
MongoDB is *really, really easy to use*. Because your data is essentially stored as a JSON object, you can transfer your data from the server to client *directly*. You're working with JSON, so you can easily parse your data in your frontend JavaScript. 

It is also easier to learn compared to SQL, because SQL is a whole other language to learn, whereas with Mongo you can leverage your existing knowledge of JavaScript/JSON.


## Object Data Models/Object Relational Mapping
An Object Data Model or *ODM*, also known as Object Relational Mapping or *ORM*, is a tool for abstracting the database layer into OOP style objects. Basically, ODMs/ORMs create a *database abstraction* or *virtual database* that a programming language can easily interact with, rather than dealing with the querying language syntax of the database itself.

The most popular MongoDB ODM is [**Mongoose**](http://mongoosejs.com/), which we will be using in this course. 

Mongoose will allow us to implement some of the features of relational databases, such as defining schemas, with our Mongo database. All other details on how to use and manipulate our MongoDB database will be continued in our [Mongoose docs](./mongoose-overview.md).