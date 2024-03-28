const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./db');

const app = express();
app.use(bodyParser.json());
app.use(cors());

require('./app/routes/routes')(app);

const port = process.env.port || 3000;
app.listen(3000, () => console.log(`The Server Run On Port ${port}...`));