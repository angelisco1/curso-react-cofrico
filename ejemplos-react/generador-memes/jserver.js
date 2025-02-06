const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const user = {
  username: 'cfalco',
  password: '1234'
}
const TOKEN = 'abc'

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/login', (req, res, next) => {
  console.log(req.body)

  const { username, password } = req.body
  console.log(username, password)

  if (username === user.username && password === user.password) {
    // token
    return res.status(200).json({ token: TOKEN })
  }

  return res.status(401).json({ err: 'Invalid credentials' })
})

server.use((req, res, next) => {
  const authHeader = req.headers.authorization
  if (authHeader && authHeader === TOKEN) {
    return next()
  }

  return res.status(401).json({ err: 'Invalid token' })
})

// POST /login
// ----
// username: 'cfalco',
// password: '1234'

server.use(router)

server.listen(8081, () => {
  console.log('JSON Server is running')
})