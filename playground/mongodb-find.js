// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unale to connect tomongo db server');
  }
  console.log('Connected to mongo db server')

  const db=client.db('TodoApp');

  //Find returns a mongodb curson not a document, so we use toArray
  // db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
  db.collection('Todos').find({
    _id:new ObjectID('5bb888f23064c62ef0b747b9')}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    conole.log('Unable to fetch')
  });

  client.close();

});
