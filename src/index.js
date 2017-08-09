import express from 'express';
import path from 'path';

import bodyParser from 'body-parser';
import users from './routes/users';
const DEFAULT_PORT = 8081
let app = express();

app.use(bodyParser.json())

app.use('/api/users', users);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.set("port", process.env.PORT || DEFAULT_PORT);
app.listen(app.get("port"), console.log("running on port", process.env.PORT || DEFAULT_PORT));
