import express, { Request, Response } from 'express';
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  }
);

app.listen(3000, () => {
  console.log('listning on 3000');
});

app.get('/', (req: Request, res: Response) => {
  res.json({a: 1});
});