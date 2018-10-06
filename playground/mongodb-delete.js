const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect tomongo db server');
  }
  console.log('Connected to mongo db server')

  const db=client.db('TodoApp');

  //delet many
  // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });

  //delete one
  // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });

  //findAndDelete
  db.collection('Todos').findOneAndDelete({text:'Eat lunch'}).then((result)=>{
    console.log(result);
  });

   client.close();

});
