var mongoose=require('mongoose');

//Creating a model so moongoose know how to store data
var User =mongoose.model('User',{
  email:{
    type: String,
    required:true,
    minlength: 1,
    trim:true //removes any leading or trailig whitespacex
  }
});

module.exports={
  User
}
