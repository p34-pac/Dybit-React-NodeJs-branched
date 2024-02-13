const bcrypt = require("bcrypt");


const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, salt) => {
            if (err) {
                console.error('Error generating salt:', err);
                reject(err)
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    console.error('Error hashing password:', err);
                    reject(err)
                }
                resolve(hash)
            })
        })
    })
}

const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed)
}  

module.exports = {
    hashPassword,
    comparePassword
}