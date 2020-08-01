const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

//Redirect routes for the base address that point to the main application
app.get('/', (req, res) => res.redirect(req.baseUrl + 'app.html'));
app.get('', (req, res) => res.redirect(req.baseUrl +'/app.html'));

//Static path routes (Also known as "client assets")
app.use(express.static(path.join(__dirname, '../../Client/html')));
app.use(express.static(path.join(__dirname, '../../Client/css')));
app.use(express.static(path.join(__dirname, '../../Client/script')));
app.use(express.static(path.join(__dirname, '../../Client/img')));

app.listen(port, () => console.log(`Chart server is listening at http://localhost:${port}`));