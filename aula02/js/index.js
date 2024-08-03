let express = require('express')
let app = express()


let produtos = [
    {
        nome: 'bolode morango',
        valor: 1000,
        descricao: 'brabo',
        imagem:"https://asmeninasdobolo.com.br/wp-content/uploads/2022/09/1-min.jpg"
    },
    {
        nome: 'bolode chocolate',
        valor: 10000,
        descricao: 'brabissimo',
        imagem:"https://static.itdg.com.br/images/auto-auto/361fb474bc4d567a4efa53326430b4ad/bolos-para-fazer-no-final-de-semana.jpg"
    },
    {
        nome: 'bolo de pote',
        valor: 10,
        descricao: 'bom',
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-zARJhIp9g1om2cWXwQf9jphyBRTGg8sPg&s"
    }
]

app.get('/', function(requisicao, resposta){
    try {
        return resposta.json(produtos).status(200)
} catch (error) {
return resposta.json({message: "operação invalida"}).status(400)
}
})
 app.listen(5000, () => {
    console.log(`http://localhost:5000`)
 })