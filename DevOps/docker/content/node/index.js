const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('<h1>Full Cycle 3.0</h1>'));

app.listen(port, () => console.log(`Running on port ${port}!`))