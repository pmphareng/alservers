import express from 'express';
import validateInput from "../shared/validations/signup";
import mongoose from 'mongoose';
import userSchema from '../database/models/user';

let router = express.Router();

//connect to database
var promise = mongoose.connect('mongodb://client:client@ds061076.mlab.com:61076/users', {
  useMongoClient: true,
});

mongoose.connection.once('open', ()=>{
  console.log('Database connection made to client...');
}).on('err', (err)=>{
  console.log("Client database connection error", err)
})

// Use native promises
mongoose.Promise = global.Promise;



router.post('/', (req, res)=>{
  const {errors, isValid } = validateInput(req.body);

  if (isValid){

    var User = mongoose.model('User', userSchema);

    var userOne = User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }).save((err)=>{
      if (err) throw err;
      console.log('New user saved to database');
    })

    res.json({ success: true });
  }else {
    res.status(400).json(errors);
  }
})

export default router;
