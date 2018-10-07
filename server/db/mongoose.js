var mongoose=require('mongoose');

mongoose.Promise=global.Promise;
//useNewUrlParser required in newer version of mongoose
mongoose.connect('mongodb://localhost:27017/TodoApp',{
  useNewUrlParser:true
});


module.exports={
  mongoose
}
