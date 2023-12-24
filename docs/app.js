const express = require('express');
const app = express();
app.use(express.json());

app.get("/",(req, res) =>{
    res.send("helloo");
    });

 app.listen(3000,function() {
        console.log("server on running on port 3000");
    });
    