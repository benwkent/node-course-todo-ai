// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('connected to MongoDb server');

    // db.collection('Todos').insertOne({
    //     text: 'Some todo text',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Ben',
    //     age: 35,
    //     location: 'Utah'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert record');
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });


    db.close();
});