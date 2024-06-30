
# Requirements

## Base requirements

- Fetch external data from api / service.
- Using this data, populate a database in "real time".
- Use MVC architecture, althought a front end (view) is not required.
- Implement a startup routine that does an initial population of the database.
- The internal api for the database should include all CRUD operations.
- The internal api should reflect the same structure as the external api that we are fetching data from, although does not need to include everything (these api's are often substantially large).

## General specifications

- Employ MongoDB as a database technology, collections TBC dependednt on vendor api.
- Use Mongoose as a connector between NodeJS and MongoDB.
- Express will be used to provide server-side / backend application architecture.
- Routes and Controllers will be used to implement CRUD operations.
- Libraries are not needed as we are only intersted in CRUD / basic DB administration, not performing logic on this data.


## Vendor-specific consideration

We will be using FFIV Collect API to populate our local database:

[https://ffxivcollect.com/](https://ffxivcollect.com/)

There are many collections that can be constructed, but we will focus on a subset and implement CRUD operations for these.