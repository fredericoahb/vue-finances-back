const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./src/generated/prisma-client')

const resolvers = {
  Query: {
    user(parent, args, context, info) {
      return prisma.user({ id: args.id })
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers
})

server.start().then(() => console.log('Server running on http://192.168.99.100:4000...'))
