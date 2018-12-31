// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('connected to MongoDb server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c2a4892bee56396423ed235')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c2a3f6458bd0447f05574a6')
    }, {
        $inc: {
            age: 1
        },
        $set: {
            name: 'Jim'
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

//  db.close();

});