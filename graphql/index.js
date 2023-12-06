import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import task from "./resolvers/task.js";
import user from './resolvers/User.js'




let typeDefs = loadSchemaSync(`graphql/schemas/*.graphql`, {
    loaders: [new GraphQLFileLoader()],
})



const resolvers = {
    ...task,
    ...user
}


export {
    typeDefs,
    resolvers
}