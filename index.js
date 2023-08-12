const express = require("express");
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());

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