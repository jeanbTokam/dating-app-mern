import express from 'express'
import mongoose from 'mongoose'
import  Cards from './dbCards.js'
import Cors from 'cors'

//APP cONFIG
const app = express()
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://reactmaster:Reactmaster111@cluster0.xqguj.mongodb.net/react_master?retryWrites=true&w=majority'
//MiddleWare 
app.use(express.json())
app.use(Cors())
// DB Config
mongoose.connect(connection_url,{
    useNewUrlParser: true,  
    useUnifiedTopology :true
})
//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello the Webdev"))

app.post('/dating/cards' , (req, res) => {
    const dbCard = req.body
    Cards.create(dbCard, (err, data) => {
         if (err){
             res.status(500).send(err)
         }else {
             res.status(201).send(data)
         }
    })
})

app.get('/dating/cards', (req,res) => {
    Cards.find((err,data) => {
        if (err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

//Listener
app.listen(port, () => console.log(`Listening on Localhost: ${port}`))