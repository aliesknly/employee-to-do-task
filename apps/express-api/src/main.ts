import { ApiRestService,MongoDBService } from './services';

const api = new ApiRestService();

const port = process.env.PORT || 3333;

MongoDBService();


api.start(typeof port === 'string' ? parseInt(port) : port);
