import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import home from './home';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/home', home);

app.on('mount', () => {
  console.log('Api is available at %s', app.mountpath);
});

export default app;
