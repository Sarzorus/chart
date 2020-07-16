const express = require('express')
const path = require('path')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static(path.join(__dirname, '../../Client/html')))
app.use(express.static(path.join(__dirname, '../../Client/css')))
app.use(express.static(path.join(__dirname, '../../Client/script')))
app.use(express.static(path.join(__dirname, '../../Client/img')))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))