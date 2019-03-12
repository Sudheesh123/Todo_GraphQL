const { GraphQLObjectType, GraphQLString } = require('graphql');
const todoGraphQLType =  require('./todoType');
const Todo = require('./../models/todo');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTodo: {
      type: todoGraphQLType,
      args: {
        username: {type : GraphQLString},
        name: { type: GraphQLString }, 
        desc: { type: GraphQLString },
        priority: { type: GraphQLString },
        status: { type: GraphQLString },
        time: { type: GraphQLString }
      },
      resolve(parent, args) {
        const newTodo = new Todo({
          name: args.name,
          username: args.username,
          desc: args.desc,
          priority: args.priority,
          status: args.status
        })

        return newTodo.save();
      }
    },
    updateTodo: {
      type: todoGraphQLType,
      args: {
        id: { type: GraphQLString },
        username: { type : GraphQLString },
        name: { type: GraphQLString }, 
        desc: { type: GraphQLString },
        priority: { type: GraphQLString },
        status: { type: GraphQLString }
      },
      resolve(parent, args) {
        return Todo.findById(args.id)
          .then(todo => {
            todo.username = args.username,  
            todo.name = args.name,
            todo.desc = args.desc,
            todo.priority = args.priority,
            todo.status=args.status

            return gadget.save()

          })
          .then(updatedTodo => updatedTodo)
          .catch(err => console.log(err))
      }
    },
    removeTodo: {
      type: todoGraphQLType,
      args: { 
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return Todo.findOneAndDelete(args.id).exec()
          .then(todo => todo.remove())
          .then(deletedTodo => deletedTodo)
          .catch(err => console.log(err))
      }
    }
  }
})

module.exports = Mutation;