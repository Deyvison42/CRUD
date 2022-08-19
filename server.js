// ESTRUTURA PARA CRIAR UM SERVER

import app from "./src/app.js"

const port = 8000
app.listen(port ,() =>(
    console.log(`Servidor On line no endereço http://localhost:${port}`)
))  