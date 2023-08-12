const express = require("express");
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
res.send("Home page");
})

app.post("/",(req,res)=>{
    try {
        res.status(200).send(req.body);
    } catch (error) {
        res.status(500).send({Error:error});
    }
    
})


app.listen(3000,()=>{
    console.log(`Server is Running on a port 3000`);
})

//deployment link:- https://exactspace-assignment.onrender.com/
//https://64d7b1697408bc17db89ccb6--cerulean-stroopwafel-0c90cd.netlify.app/