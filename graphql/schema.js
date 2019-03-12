const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList} = require('graphql');
const todoGraphQLType =  require('./todoType');
const Todo = require('../models/todo');
const Mutations = require('./mutation');


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    todo: {
      type: todoGraphQLType,
      args: { id: { type: GraphQLString }},
      resolve(parent,args) {
        return Todo.findById(args.id)
      }
    },
    todos: {
      type: new GraphQLList(todoGraphQLType),
      resolve(parent) { 
        console.log(Todo.find())
        return Todo.find({})
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
});