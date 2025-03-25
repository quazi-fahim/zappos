const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.MONGO_URL;

const mongoDB = async () => {
  await mongoose.connect(url)
    .then(async () => {
        console.log('Connected to the database ')
        
    }).catch ( (err) => {
  console.error(`Error connecting to the database. n${err}`);
  
})
}
module.exports = mongoDB;