import express from 'express';
import graphqlHTTP from 'express-graphql';

const app: express.Application = express();
const port = 3000;

import {makeExecutableSchema} from 'graphql-tools';
import {ProductsService} from './products/products.service'

let typeDefs: any = [`
  type Query {
    hello: String
  }
  type Mutation {
    hello: String
  }
`];



let resolvers = {
    Query: {},
    Mutation: {}

};

let productsService = new ProductsService();
typeDefs += productsService.configTypeDefs();
productsService.configResolvers(resolvers);


app.use(
    '/graphql',
    graphqlHTTP({
        schema: makeExecutableSchema({typeDefs, resolvers}),
        graphiql: true
    })
);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
