import mongoose from 'mongoose';
const Schema=mongoose.Schema({
   shortID:{
    type:String,
    required:true,
    unique:true
   } ,
  
   redirectURL:{
    type:String,
    required:true,
    unique:true
   },
   visitHistory:[{timestamp:{type:Number}}],

},
{
    timestamps:true
}
)
const URL=mongoose.model('URL',Schema);
export default URL;