let express = require('express')
let app = express()

app.use(express.json())

app.listen(5000, () => {
    console.log('rodando')
    console.log(`http://localhost:5000`)
})
let dataBase = [

]
app.get("/buscar-todos-os-usuarios", (req, res)=> {
    try{
        return res.status(200).json({dataBase})
    } catch (error){
        return res.status(500).json({error})
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
app.post("/adicionar-Usuario", (req, res) => {
    try {
        let usuario = {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            confirmacaoSenha: req.body.confirmacaoSenha
        }
        return res.status(201).json({ "usuario cadastrado com sucesso"})
    } catch (error) {
        return res.status(500).json({error})
    }
})
let usuario = {
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
    confirmacaoSenha: req.body.confirmacaoSenha
}

new function verificarEmail() {
    try {
        array.find(callback(email => cadastrar_usuario.email === 2))
        if (senha != confirmacaoSenha) {
            return "As senhas devem ser iguais"
        }
        else {
            return "cadastro realizado com sucesso"
        }
    } catch {
        return "email ja esta sendo utilizado"
    }
}

let login = {
    email: req.body.email,
    senha: req.body.senha
}