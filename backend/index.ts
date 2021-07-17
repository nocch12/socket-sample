import express, { Router, Request, Response } from 'express';

import router from './router';
import corsConf from './config/cors';
import io from './src/io'

const app = express();

const PORT: string | number = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded());

app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', corsConf.origin);
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  }
);

app.use(router);

// サーバーを起動する
const server = app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});

io(server);