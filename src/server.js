
const { json } = require('express')
const express = require('express')

const server = express()

server.use(express.json())

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

// Request body 
server.get('/registros/:index', (req, res) =>{
    const { index } = req.params;

    return res.json(registros[index])
})

// Middleware globa
server.use((req, res, next) => {
    console.time('Request')
    console.log(`Método: ${req.method}; URL: ${req.url}`)

    next()

    console.timeEnd('Request')
})

// Middlewares
function checkUserExists(req, res, next) {
    if(!req.body.name) {
        return res.status(400).json({ erro: 'User name is required'})
    }

    return next()
}

function checkUserInArray(req, res, next) {
const user = users[req.params.index]

    if(!user) {
        return res.status(400).json({ erro: 'User does not exists'})
    }

    req.user = user;

    return next()
}

// CRUD
const users = ['Robson', 'Diego', 'Matheus', 'Pedro']

server.get('/users', (req, res) =>{
    return res.json(users)
})

server.get('/users/:index', checkUserInArray, (req, res) =>{
    const { index } = req.params;

    return res.json(req.user)
})

server.post('/users', checkUserExists, (req, res) =>{
    const { name } = req.body

    users.push(name)

    return res.json(users)
})

server.put('/users/:index', checkUserExists, checkUserInArray,(req, res) => {
    const { index } = req.params
    const { name } = req.body

    users[index] = name

    return res.json(users)
})

server.delete('/users/:index', checkUserInArray, (req, res) => {
    const { index } = req.params

    users.splice(index, 1)

    return res.send()
})
  
server.listen(3000) 


// => Query params = ?registros=1 <=
/*server.get('/registros', (req, res) =>{
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
})*/