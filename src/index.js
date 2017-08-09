import express from 'express';
import path from 'path';

import bodyParser from 'body-parser';
import users from './routes/users';

let app = express();

app.use(bodyParser.json())

app.use('/api/users', users);

/*app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});*/

app.listen(8081, () => console.log('Running on port 8081'));
