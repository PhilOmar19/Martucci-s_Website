//Importamos express
const express = require("express");
//Creamos la app
const app = express();
//Implementando el motor de plantillas web ejs
app.set("view engine","ejs")

//Creando las rutas
app.get("/Home",(req,res)=>{
    res.render("index");
});

app.get("/Biografia",(req,res)=>{
    res.render("biografia");
});

app.get("/Obras",(req,res)=>{
    res.render("obras");
});

//Especifica el tipo MIME para archivos CSS
app.get('/css/index.css', (req, res) => {
    res.type('text/css');
    res.sendFile(__dirname + '/css/index.css');
});

app.get('/css/biografia.css', (req, res) => {
    res.type('text/css');
    res.sendFile(__dirname + '/css/biografia.css');
});

app.get('/css/obras.css', (req, res) => {
    res.type('text/css');
    res.sendFile(__dirname + '/css/obras.css');
});

//Hacemos pública la App
app.listen(3001,(req,res)=>{
    console.log("Mi app esta corriendo bien");
});