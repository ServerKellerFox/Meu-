// Nesse projeto vasmos usar  NODE.js, EJS e o Express

// EJS Motor de Tamplete para desenha o html

//comandos --> npm install express --save
//comandos --> npm install ejs --save 
// as informações de bibliotecas instalar ficam no package.json

const express = require("express");
const app = express();

app.listen(f8080,function(error){
    if(error){console.log("Erro ao Iniciar Servidor")} else{console.log("--- Servidor Iniciado !! ---")}
});


app.get("/", function(req, res){res.send("Bem vindo")});

app.get("/blog", function(req, res){ res.send("Bem vindo ao Blog !!")});

