/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { RestApi } from './services/express';
import { MongoDBConnect } from './services/database';

const api = new RestApi();

//Database Connection
MongoDBConnect();

// Modules
api.addRoute('/test', (req, res) => {
  res.send('Hello World!');
})

const port: number = Number.parseInt(process.env.PORT) || 3333;
api.start(port);

