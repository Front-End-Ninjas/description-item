const data = require('../data/seedData');
const mongoose = require('mongoose');
const db = require('./database');

const dbPwd = process.env.dbpwd;

mongoose.connect(`mongodb://nicola24:${dbPwd}@ds259778.mlab.com:59778/nile-product-description`);

const seedDb = (arr) => {
  arr.map((x) => {
    const singleProduct = {
      id: x.id,
      department: x.department,
      brand: x.brand,
      model: x.model,
      price: x.price,
      shipping: x.shipping,
      stock: x.stock,
      description: x.description,
    };
    db.insert(singleProduct, (err) => {
      if (err) {
        console.log('Data insert error');
      }
      console.log('Data insert into DB');
      mongoose.disconnect();
    });
    return x;
  });
};

seedDb(data.mydata);
