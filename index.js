const express = require('express');
const app = express();

const port = process.env.port || 3000
app.get('/', (req, res) =>{
    const apiKey = req.query.apiKey;
    res.send({data:'TEST'});
});

app.listen(port, () =>{
    console.log('App is listening to port')
});