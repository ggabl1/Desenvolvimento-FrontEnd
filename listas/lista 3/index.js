let express = require('express')
let app = express()

app.use(express.json())

app.listen(5000, () => {
    console.log('rodando')
    console.log(`http://localhost:5000`)
})
let dataBase = [

]
app.get("/buscar-usuarios", (req, res) => {
    try {
        return res.status(200).json(dataBase)
    } catch (error) {
        return res.status(500).json({ error })
    }
})
let cadastrar_usuario = [
    {
        "nome": "",
        "email": "",
        "senha": "",
        "confirmacaoSenha": ""
    }
]
app.post("/adicionar-usuario", (req, res) => {
    try {
        let usuario = {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            confirmacaoSenha: req.body.confirmacaoSenha
        }
        if (usuario.email == dataBase.find(email)) {
            res.status(200).json("email ja existe")
        }
        dataBase.push(usuario)
        return res.status(201).json({message: "email adicionado com sucesso"})
    } catch (error) {
        return res.status(500).json(error)
    }
})

app.post("/login", (req, res) => {
   
let login = {
    nome: req.body.nome,
    senha: req.body.senha
}
try {
    if(dataBase.find(nome) == res.nome.body)
    return res.status(200).json({message:"Login bem sucedido"})
} catch (error) {
    return res.status(500).json(error)
}
})