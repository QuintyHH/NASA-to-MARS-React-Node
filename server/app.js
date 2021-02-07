const path = require('path')
const express = require('express')

const app = express()
const routes = require('./routes')
const cfg = require('./config')
const { PORT } = cfg

app.use(express.static(path.join(__dirname, cfg.RELATIVE_PATH)))

app.listen(PORT, () => {
  console.log('NASA is spying on you on external port: ' + PORT)
})

app.all('/home', routes.home)
app.post('/api/upload', routes.test)
app.all('/*', routes.home)


/*
0, 0, N, | , LMRLMRMRLRLLMR
2, 2, S, | , LMRLMRMRLRLLMR
2, 2, S, | , LMRLMRMRLRLLMR
2, 2, S, | , LMRLMRMRLRLLMR
2, 2, S, | , LMRLMRMRLRLLMR

let mission = [
  {
    position: '0, 0, N',
    movements: 'LMRLMRMRLRLLMR'
  },
    {
    position: '0, 0, N',
    movements: 'LMRLMRMRLRLLMR'
  },
    {
    position: '0, 0, N',
    movements: 'LMRLMRMRLRLLMR'
  },
]


*/

