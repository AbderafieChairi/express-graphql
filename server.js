import express from 'express';
import bodyParser from 'body-parser';
import { graphqlHTTP } from 'express-graphql';
import db from './db/index.js';
import {
    typeDefs,
    resolvers
} from './graphql/index.js';


const app = express();



// Use the models in your application
app.get('/', function(req, res) {
  res.send('Hello World!');
});


app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP({
    schema: typeDefs,
    graphiql: true, // Enable the GraphiQL UI for testing,
    rootValue: resolvers
  }));
  



// Start the server
app.listen(3000, function() {
  console.log('Server started on port 3000');
});