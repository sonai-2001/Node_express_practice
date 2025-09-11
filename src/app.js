// console.log('checkk');

// it is making a server by http core node module
// const http= require('http')

// const server = http.createServer((req,res)=>{
//      res.end('hello from server')
// })

// server.listen(3000,()=>{
//     console.log('server is listening on 3000 port')
// })


const express=require('express')

const app=express()

app.use((req,res)=>{
   res.send('hi')
})

app.use((req,res)=>{
   res.send('hello')
})

app.listen(3000,()=>{
    console.log('server is listening on port 3000')
})