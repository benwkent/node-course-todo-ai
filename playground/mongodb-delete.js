// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('connected to MongoDb server');

  //delete many
    // db.collection('Todos').deleteMany({text: 'finish course'}).then((result) => {
    //     console.log(result);
    // })
  //delete one
    // db.collection('Todos').deleteOne({text: 'do it'}).then((result) => {
    //     console.log(result);
    // });
  //find and delete one
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });
//  db.close();
});