const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('../../Client/html'))
app.use(express.static('../../Client/css'))
app.use(express.static('../../Client/script'))
app.use(express.static('../../Client/img'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))