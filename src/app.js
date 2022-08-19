import express from "express";
const app = express();
app.use(express.json())

const clientes = [
    {id: 1, nome: "bruno",cpf:"123.123.123-12"},
    {id: 2, nome: "brusdfsdno",cpf:"122343.122433.123-12"}
]
app.get("/",(req,res)=>(
    res.status(200).send("Pagina Inicial")
))
//Consulta Clientes
app.get("/clientes",(req,res) =>(
    res.status(200).json(clientes)
))

//Cadastro Clientes
app.post('/clientes',(req,res) =>{
    clientes.push(req.body)
    res.status(200).send("cliente cadastrado com sucesso")
})

function BuscarCliente(id){
    return clientes.findIndex(clientes =>clientes.id == id)
}

app.get('/clientes/:id',(req,res) =>{
    let index = BuscarCliente(req.params.id)
    res.json(clientes[index])

})
//Atualizar Clientes por id
app.put('/clientes/:id',(req,res) => {
    let index = BuscarCliente(req.params.id)
    clientes[index] = req.body
    res.json(clientes)
})
//excluir cliente por id
app.delete('/clientes/:id',(req,res) => {
    let index = BuscarCliente(req.params.id)
    clientes[index] = req.body
    clientes.splice(index,1)
    res.status(200).send("cliente excluido com sucesso")
})


export default app