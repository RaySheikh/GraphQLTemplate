import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {typeDefs} from './schema';
import {resolvers} from './resolvers';
import {Pet} from './models/Pet';
import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });



const PORT = 4000;

const app = express();

const { ObjectId } = mongoose.Types;
ObjectId.prototype.valueOf = function () {
  return this.toString();
};

const server = new ApolloServer({
    typeDefs, 
    resolvers, 
    context: ({ req }) => {
      Pet
    },
});
server.applyMiddleware({app})

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)