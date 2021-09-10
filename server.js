const express = require('express');
const ejs = require('ejs');
const path = require('path');
const expressLayout = require('express-ejs-layouts');
const app = express();
const PORT = process.env.PORT || 3000;


//template engine
app.use(expressLayout);
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs');

app.listen(PORT,()=>{
    console.log(`connection successful to PORT = ${PORT}`);
});