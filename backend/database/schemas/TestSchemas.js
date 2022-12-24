const mongoose  =require( "mongoose");
// var Schema = new mongoose.Schema();
const test = new mongoose.Schema({
name: {type:String},

})
// module.exports = mongoose.model('USerSchem', EventSchema);
module.exports.testSchema = mongoose.model('test',test);