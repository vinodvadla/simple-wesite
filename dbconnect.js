const mongoose = require('mongoose')

const dbConn = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/vinod')
        console.log('mongodb conected')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = dbConn
