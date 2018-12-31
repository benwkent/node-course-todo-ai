const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '12345asdf';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

var hashedPassword = '$2a$10$Ck3kC7XbmwN3vInv/mujL.GZWn.PSx0f2WYUzj7YKRyLdk1n3lL.S';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});