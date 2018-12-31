const {ObjectID} = require('mongodb');
const{mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5c2a4f9bd776526028099621';

User.findById(id).then((user) => {
    if(!user) {
        console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
// var id = '5c2a5c18235281d439467aa011';

// if(!ObjectID.isValid(id)) {
//     console.log(`ID ${id} not valid`);
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos: ', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('ID not found');
//     }
//     console.log('Todo by id: ', todo);
// }).catch((e) => console.log(e));