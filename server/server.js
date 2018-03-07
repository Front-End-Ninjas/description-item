const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect('mongodb://nicola24:nicola24@ds259778.mlab.com:59778/nile-product-description');

const port = process.env.PORT || 3001;

app.listen(port, () => console.log('Listening on port 3001!'));
