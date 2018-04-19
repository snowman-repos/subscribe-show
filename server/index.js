const express = require('express');
const expressGraphQL = require('express-graphql');
const models = require('./models');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const axios = require('axios');
const schema = require('./schema/schema');

/**
 * Create the web server.
 */
const app = express();
const PORT = process.env.PORT || 3000;

/**
 * Connect to the Database.
 */
const MONGO_URI = 'mongodb://default:default@ds113648.mlab.com:13648/subscribe-show';
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

/**
 * Set up the route for GraphQL queries.
 */
app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

/**
 * Open the web server.
 */
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
