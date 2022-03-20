const express = require("express");
const app = express();

app.use(express.static("src"));
app.set('view engine','ejs');
app.set('views','./src');

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.listen('4040', () => console.log('up and running'))

