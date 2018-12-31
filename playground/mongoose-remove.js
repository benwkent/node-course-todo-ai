const {ObjectID} = require('mongodb');

const{mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
    console.log(result);
});

Todo.findByIdAndRemove('5c2a685a523e1c152486d80d').then((todo) => {
    console.log(todo);
});