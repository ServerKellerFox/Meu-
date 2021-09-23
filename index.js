// Nesse projeto vasmos usar  NODE.js, EJS e o Express

// EJS Motor de Tamplete para desenha o html

//comandos --> npm install express --save
//comandos --> npm install ejs --save 
// as informações de bibliotecas instalar ficam no package.json

const express = require("express");
const app = express();

app.listen(8080,function(error){
    if(error){console.log("Erro ao Iniciar Servidor")} else{console.log("--- Servidor Iniciado !! ---")}
});
app.set('view engine', 'ejs'); //PEDE PARA O EXPRESS USAR NO EJS COME ENGINE 	


app.get("/", function(req, res){
    res.render("HTML/home")});

app.get("/blog", function(req, res){ res.send("Bem vindo ao Blog !!")});

