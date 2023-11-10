const express = require('express')
const {languages} = require('./Data')
const app = express()

//Middelwares
app.use(express.static('./HTML-page'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// GET Method
app.get('/api/languages',(req,res)=>{

  res.status(200).json(languages)
})

//POST Method
app.post('/api/add-lang',(req,res)=>{
  const {lname} = req.body
  if(!lname){
    return res.status(401).json({success:false,msg:"not found"})
  }
  res.status(200).json({success:true,msg:"done",lname:lname})

  console.log(lname)
})

// PUT Method
app.put('/api/languages/:id',(req,res)=>{
  const {id} = req.params
  const {name} = req.body

  res.send(`id:${id} name:${name}`)
})

//DELETE Method
app.delete('/api/languages/:id',(req,res)=>{
  const {id} = req.params

  res.send(`id:${id} deleted`)
})

// Server Connection
app.listen(5050,()=>{
  console.log('Server Running......')
})

