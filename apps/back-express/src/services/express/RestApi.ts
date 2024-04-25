import express, { Express, RequestHandler } from 'express';
import path from 'path';

export class RestApi {
  public app: Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use('/assets', express.static(path.join(__dirname, 'assets')));
  }

  addRoute(path: string, module: RequestHandler) {
    this.app.use(path, module);
  }

  async start(port: number) {
    this.app.listen(port, () => {
      console.log(`✅ Listening at http://localhost:${port}/api`);
    });
  }
}
