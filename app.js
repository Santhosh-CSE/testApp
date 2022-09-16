const express = require('express');

const app = express();

const mongoose = require('mongoose');



app.get('/',(req,res)=>{

    res.send('We are on home');

});



/*mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true}, () =>

    console.log('Connected to DB')

);*/



app.listen(4000);