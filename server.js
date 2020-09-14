
const express = require('express')

const server = express()

const registros = [{
    'registroponto': {
        'colaborador': {
            'matricula':'1122',
            'nome': 'Robson',
            'email': 'robson.osorioo@gmail.com'
        },
        'registrohora': {
            'data':'13/09/2020',
            'hora':'18:30',
            'indicador':'Entrada'
        }
    }},
    {
    'registroponto': {
        'colaborador': {
            'matricula':'1123',
            'nome': 'Diego',
            'email': 'diego.osorioo@gmail.com'
        },
        'registrohora': {
            'data':'14/09/2020',
            'hora':'09:30',
            'indicador':'Entrada'
        }
    }},
    {
        'registroponto': {
            'colaborador': {
                'matricula':'1124',
                'nome': 'Davi',
                'email': 'davi.osorioo@gmail.com'
            },
            'registrohora': {
                'data':'15/09/2020',
                'hora':'14:30',
                'indicador':'Entrada'
            }
    }}]

// Request body = {"nome":"Robson", "email":"robson.osorioo@gmail.com"}
server.get('/registros/:index', (req, res) =>{
    const { index } = req.params;

    return res.json(registros[index])
})

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
    const {id} = req.params;

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