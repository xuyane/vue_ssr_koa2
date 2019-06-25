import mongoose from 'mongoose'

let personSchema = new mongoose.Schema({
  name:String,
  age:Number
})

export default mongoose.model('Person',personSchema);









