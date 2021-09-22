const express = require("express");
const app = express();

app.listen(f8080,function(error){
    if(error){console.log("Erro ao Iniciar Servidor")} else{console.log("--- Servidor Iniciado !! ---")}
});


app.get("/", function(req, res){res.send("Bem vindo")});

app.get("/blog", function(req, res){ res.send("Bem vindo ao Blog !!")})