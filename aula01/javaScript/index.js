const http = require('http')
const port = 5000
const produtos = [
    { nome: 'bolu de morangu', valor :300, imagem: 'data:image/jpeg;base64,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' },
    { nome: 'bolu de chocolate', valor: 300, imagem: 'data:image/jpeg;base64,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'},
]
 const requestHandler = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.write(JSON.stringify(produtos))
    return res.end()
 }
 const server = http.createServer(requestHandler)
 server.listen(port, () => {
    console.log('Servidor rodando na porta 5000')
 })