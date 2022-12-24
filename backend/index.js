const dotenv = require("dotenv")
dotenv.config()
const express = require('express')
const app = express()
const DataBase = require("./database/database")
const { testSchema } = require("./database/schemas/TestSchemas")

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/test', async(req,res)=>{
    console.log("tese")
    let create = await testSchema.create({name:'hello'})
    if(create){
        res.send({
            ok:1
        })
    }

})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})