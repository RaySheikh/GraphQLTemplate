import {gql} from 'apollo-server-express';

export const typeDefs = gql `
type Pet {
  _id: ID
  name: String!
  type: String
}

type Query {
  Pets: [Pet]
}

type Mutation {
  addPet(name: String!, type: String!): Pet
  deletePet(_id: ID): Pet
  updatePet(_id: ID!, name: String!, type: String!): Pet
  
}

`