


const express=require('express')
const connectDB=require('./config/database')// it means the database.js runs totaly !
const UserModel=require('./schema/user.schema')
const app=express()
app.use('/user',(req,res,next)=>{
    console.log('user route middleware')
    next()

})

app.post('/user',async(req,res)=>{
      console.log('user route')
     try {
         const user= new UserModel({
        name:'Apurba Bhadra',
        email:'apurbabhadra@gmail.com',
        password:'123456',
        age:25
      })

      await user.save()
      res.status(201).send('user created')
     } catch (error) {
        //   res.status(400).send(error.message)
        throw new Error(error.message)// inside catch if again throw error on that time use new Error not error
     }

})

app.use('/',(err,req,res,next)=>{
    console.log("🚀 ~ err:", err)
    console.log('home route')
    res.send(err.message)
})




connectDB().then(()=>{
    console.log('connected to database')
app.listen(3000,()=>{
    console.log('server is listening on port 3000')
})})


