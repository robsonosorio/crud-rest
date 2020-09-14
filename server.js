
const express = require('express')

const server = express()



// Query params = ?registros=1
server.get('/registros', (req, res) =>{
    const nome = req.query.nome;

    return res.json({
        'registroponto': {
            'colaborador': {
                'matricula':'1122',
                'nome':`${nome}`,
                'email': 'robson.osorio@gmail.com'
            },
            'registrohora': {
                'data':'13/09/2020',
                'hora':'18:30',
                'indicador':'Entrada'
            }
        }})
})

// Route params = /registros/1
server.get('/registros/:id', (req, res) =>{
    const id = req.params.id;

    return res.json({
        'registroponto': {
            'colaborador': {
                'Id':`testando usuario: ${id}`,
                'nome':'Charlie Brown',
                'email': 'robson.osorio@gmail.com'
            },
            'registrohora': {
                'data':'13/09/2020',
                'hora':'18:30',
                'indicador':'Entrada'
            }
        }})
})



server.listen(3000) 