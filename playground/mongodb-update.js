// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect tomongo db server');
  }
  console.log('Connected to mongo db server')

  const db=client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate({
    _id:new ObjectID('5bb8925aec2db2fda38caa2e')
  },{
    $set:{
      completed:true
    }
  }, {
      returnOriginal: false
  }).then((result)=>{
    console.log(true);
  });

   client.close();

});
