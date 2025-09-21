const mongoose = require('mongoose');
console.log('mongoose is connected')

const demoFn=()=>{
    console.log('demo function')
}

demoFn()
const connectDB= async()=>{
    try{
        await mongoose.connect('mongodb+srv://sonaibhadra11174:MyPassword1234@cluster0.zuzsaqc.mongodb.net/practice')
        console.log('connected to database')
    }catch(err){
        console.log(err)
    }


}

demoFn()

// connectDB()

module.exports=connectDB