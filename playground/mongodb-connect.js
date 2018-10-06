const MongoClient = require('mongodb').MongoClient;

//Toconnect to database
//1st argument the string where your database lives inproduction it will beheroku url or aws url
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unale to connect tomongo db server');
  }
  console.log('Connected to mongo db server')

  const db=client.db('TodoApp');
  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed:false
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert todo');
  //   }
  //
  //   //.ops attribute store all the docs that were insrted
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('User').insertOne({
    name:'Shanu',
    age:23,
    location:'Bangalore'
  },(err,result)=>{
    if(err){
      return console.log('Unable to insert user');
    }
    console.log(result.ops[0]._id.getTimestamp());
  });
  client.close();
  console.log('Connection closed');
});
