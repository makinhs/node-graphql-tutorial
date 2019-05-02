# Node GraphQL Tutorial

A basic skeleton for an API using Graphql and Express.js

This project was made to be used within the following article: 

https://www.toptal.com/graphql/graphql-nodejs-api

## First things first

Please run `npm install` before trying to run the program

You can run the app using `npm start` and the app will load on port 3000.

## Structure

The source code is at `app` folder. As matter of examples, both users and products models have a sample file just to load some data when the server is on.

This code was made without any external database to easy it up the source code reading.

In order to create a new module, please make sure to add the new module into the app.ts. 

The products and users are defined in the app.ts as

```
let productsService = new ProductsService();
let usersService = new UsersService();
typeDefs += productsService.configTypeDefs();
typeDefs += usersService.configTypeDefs();

productsService.configResolvers(resolvers);
usersService.configResolvers(resolvers);
```

The purpose of this approach is to reduce huge configuration files for typeDefs and resolvers.
