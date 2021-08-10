import app from './app'
import http from 'http'
import config from './utils/config'

const server = http.createServer(app)

server.listen(config.PORT, () => {
  console.log(`Project running on PORT 3001}`)
})
