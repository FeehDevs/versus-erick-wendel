const http = require('http')
const { URL } = require('url')

const host = 'localhost'

let tickets = {
    total: 100,
    sold: 0,
    available: 100
}

http.createServer((req, res) => {
    const { method, url } = req
    const parseUrl = new URL(url, `http://${req.headers.host}`)
    const pathname = parseUrl.pathname


    if (method === 'POST' && pathname === '/reservations') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        const bodyParse = JSON.parse(body)
        const cpf = bodyParse.cpf 
        const quantity = bodyParse.quantity 
        
        if(bodyParse !== cpf && quantity) {
            res.statusCode(400)
            res.end("CPF e QUANTIDADE são obrigatorios")
        }
        
        tickets

        res.end(JSON.stringify())
    } else if (method === 'GET' && pathname === '/batch') {


        res.end(tickets)
    }
})