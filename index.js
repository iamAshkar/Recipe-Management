const express=require('express')

const cors=require('cors')

const logic=require('./Services/logic')

const phoneServer =express()


phoneServer.use(cors({
    origin:'http://localhost:5173'
}))

phoneServer.use(express.json())

phoneServer.listen(8000,()=>{
    console.log('restaurentServer listening on the port 8000');
})

phoneServer.get('/',(req, res)=> {
    res.send('hello world')
})

phoneServer.get('/api/get-all-iteams',(req,res)=>{
    logic.getiteams().then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

phoneServer.get('/api/view-iteams/:id',(req,res)=>{
    logic.viewiteams(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

phoneServer.post('/api/add-iteams',(req,res)=>{
    logic.additeams(req.body.id,req.body.name,req.body.image,req.body.ingredients,req.body.instructions,req.body.rating).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})




