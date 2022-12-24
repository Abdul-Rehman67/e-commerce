const dotenv = require("dotenv")
dotenv.config()
const express = require('express')
const app = express()
const Database = require("./database/database")
const { testSchema } = require("./database/schemas/TestSchemas")
const {response}  = require("./dto/response")

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/test', async(req,res)=>{
    console.log("tese")
    try{
      let create = await testSchema({name:'hello'})
      console.log(create);
      if(create){
          create.save();
          res.send(response(true , "data saved successfully",{}))
        
      }


    }
    catch(e){
      console.log(e);
    }

})


app.listen(process.env.PORT, () => {
  Database().then(
    (dbo) => {
      console.log(dbo)
      console.log(
        "DB is Connected db name as per connection is === ",
        // dbo.connection.name
      );
    }
  )
  console.log(`Example app listening on port ${process.env.PORT}`)
})