const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
     age:{
         type:Number,
         required:true
     }
})
userSchema.index({ email: 1 }, { unique: true }) //it is for create the indexes true as the duplcate  shold not happend

const UserModel = mongoose.model('User',userSchema)


module.exports=UserModel