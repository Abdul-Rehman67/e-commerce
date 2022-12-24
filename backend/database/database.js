const mongoose =   require("mongoose");

const Database = () => {
  return mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
            useUnifiedTopology: true,
    }).then(()=>{
      console.log("connected")
    })
};
module.exports =  Database;