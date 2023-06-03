const {default: mongoose} = require("mongoose")
const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URL)
        console.log("Database connection successful")
    }catch (error){
        console.log("Database connection error")
        console.log(error)
    }

}
module.exports = dbConnect