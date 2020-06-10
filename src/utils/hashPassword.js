const bcrypt = require('bcryptjs');

function comparePassword(userPassword, databasePassword){
   return bcrypt.compareSync(userPassword, databasePassword);
}


function hashPassword(password){
    var salt = bcrypt.genSaltSync(8);
    var hash = bcrypt.hashSync(password, salt);

    return{
        hash
    }
}

module.exports ={
    hashPassword,
    comparePassword
}