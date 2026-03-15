require ("dotenv").config()

const app = require('./src/app')
const connectToDB = require('./src/config/db')
// const invokeGeminiAi = require("./src/services/ai.services")


connectToDB()

app.listen(3000,()=>{
    console.log("Server is running on the port 3000")
})
