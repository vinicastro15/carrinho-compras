const {produtos} = require("./model/dados")
const moment = require("moment")


const data = moment().format("DD/MM/YYYY", "hh:mm")
console.log("-----------------------matrix " + data + "-------------------------")


for(let i = 0 ; i < produtos.length ; i++){
   if(produtos[i].preco > 100 ){
        console.log("Seu produto e " , produtos[i].pdt ,"Seu nome e ", produtos[i].nomeCliente , "voce pode comprar o valor e " ,  produtos[i].preco * produtos[i].qtd)
    } else {
        console.log("Seu produto e " , produtos[i].pdt ,"Seu nome e ", produtos[i].nomeCliente , "voce nao pode comprar" , )
    }
}  




