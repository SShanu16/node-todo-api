var mongoose=require('mongoose');

//Creating a model so moongoose know how to store data
var Todo =mongoose.model('Todo',{
  text:{
    type: String,
    required:true,
    minlength: 1,
    trim:true //removes any leading or trailig whitespacex
  },
  completed:{
    type: Boolean,
    default:false,
  },
  completedAt:{
    type: Number,
    default:null
  }
});

module.exports={
  Todo
}
