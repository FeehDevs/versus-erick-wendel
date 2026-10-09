const http = require('http')
const { URL } = require('url')

const host = 'localhost'

let tickets = {
    total: 100,
    sold: 0,
    available: 100
}

http.createServer((req, res) => {
    const {method, url} = req
    const parseUrl = new URL(url, `http://${req.headers.host}`)
    const pathname = parseUrl.pathname
    

    if(method === 'POST' && pathname === '/reservations') {
        

        res.end(JSON.stringify())
    } else if(method === 'GET' && pathname === '/batch') {
        
        
        res.end(tickets)
    }
})