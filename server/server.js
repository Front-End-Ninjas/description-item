const app = require('./app');
const mongoose = require('mongoose');

const dbPwd = process.env.dbpwd; // AWS elasticbeanstalk environment properties
// mongoose.connect(`mongodb://nicola24:${dbPwd}@ds259778.mlab.com:59778/nile-product-description`);
mongoose.connect('mongodb://localhost:27017/nile-product-description');

const port = process.env.PORT || 3001;

app.listen(port, () => console.log('Listening on port 3001!'));
