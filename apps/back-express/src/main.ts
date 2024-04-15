/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express,{} from 'express';
import * as path from 'path';
import { MongoDBConnect } from './services/database'

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to back-express!' });
});

//Database Connection
MongoDBConnect();

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`✅ Listening at http://localhost:${port}/api 🚀✨`);
});
server.on('error', console.error);
