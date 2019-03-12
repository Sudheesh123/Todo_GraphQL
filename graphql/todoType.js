const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const TodoType = new GraphQLObjectType({
  name: 'Todo',
  fields: () => ({
    id: { type: GraphQLString },
    username: {type : GraphQLString},
    name: { type: GraphQLString }, 
    desc: { type: GraphQLString },
    priority: { type: GraphQLString },
    status: { type: GraphQLString }
  })
});

module.exports = TodoType;