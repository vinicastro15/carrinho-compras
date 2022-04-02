/*const {produtos} = require("./model/dados")
const moment = require("moment")


const data = moment().format("DD/MM/YYYY", "hh:mm")
console.log("-----------------------matrix " + data + "-------------------------")


for(let i = 0 ; i < produtos.length ; i++){
   if(produtos[i].preco > 100 ){
        console.log("Seu produto e " , produtos[i].pdt ,"Seu nome e ", produtos[i].nomeCliente , "voce pode comprar o valor e " ,  produtos[i].preco * produtos[i].qtd)
    } else {
        console.log("Seu produto e " , produtos[i].pdt ,"Seu nome e ", produtos[i].nomeCliente , "voce nao pode comprar" , )
    }
}  */
const express = require('express')
const path = require('path')
const app = express()
const port = 2500

app.use('/Home', express.static(path.join(__dirname, 'public/')))

app.get('/Sobre', (req, res) => {
  res.send('Aqui fica informações adicionais')
})

app.get('/Home', (req, res) => {
  res.send('Aqui fica a página inicial')
})

app.listen(port, function(){
  console.log(`está funcionando nessa porta ${port}`)
});





