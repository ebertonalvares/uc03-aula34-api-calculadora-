import { Console } from 'console';
import express, { response } from 'express';
import { request } from 'http';


const porta = 5000


const app = express();
//API use json como forma de comunicação
app.use(express.json())


app.get("/server", (request, response) =>{
    response.send({status: "Ok"})
})

app.get("/", (request, response) => {
    response.send({message:"Welcome"})
})

app.post("/adicionar/:valor1/:valor2", (request, response) => {
    const valor1 = Number(request.params.valor1)
    const valor2 = Number(request.params.valor2)
    const resultado = valor1 + valor2
    response.send({ resultado })

})

//subtrair
app.post("/subtrair/:valor1/:valor2", (request, response) => {
    const valor1 = Number(request.params.valor1)
    const valor2 = Number(request.params.valor2)
    const resultado = valor1 - valor2
    response.send({ resultado })

})
// multiplicar
app.post("/multiplicar/:valor1/:valor2", (request, response) => {
    const valor1 = Number(request.params.valor1)
    const valor2 = Number(request.params.valor2)
    const resultado = valor1 * valor2
    response.send({ resultado })

})
//dividir
app.post("/dividir/:valor1/:valor2", (request, response) => {
    const valor1 = Number(request.params.valor1)
    const valor2 = Number(request.params.valor2)
    const resultado = valor1 / valor2
    response.send({ resultado })

})

app.listen(porta, () =>{
    console.log(`Servidor rodando na porta ${porta}`)
})