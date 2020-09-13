
const express = require('express')

const server = express()

server.get('/registro', (req, res) =>{
    return res.json({
        'registroponto': {
            'colaborador': {
                'matricula':'1122',
                'nome':'Charlie Brown'
            },
            'registrohora': {
                'data':'13/09/2020',
                'hora':'18:30',
                'indicador':'Entrada'
            }
        }})

})

server.listen(3000) 