
const mongoose = require('mongoose');

const connectToMongo =  async ()=>{

    try{
        const conn = await mongoose.connect(process.env.DATABASE,{
            useUnifiedTopology:true,
            useNewUrlParser: true
        })
        console.log(`mongo database is connected!!! ${conn.connection.host} `)
    }catch(error){
        console.error(`Error: ${error} `)
        process.exit(1) 
    }

}

module.exports = connectToMongo ;