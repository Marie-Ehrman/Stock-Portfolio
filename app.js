const  apiKey  = require ('./config');
const axios = require('axios');
const express = require('express');
const app = express();
const data = require('./data');

app.use('/', data);

app.get('/', (req,res)=> {
    
})

//run the local host server
app.listen(process.env.PORT || 3000, () => {
    console.log('Application running on localhost:3000!')
});