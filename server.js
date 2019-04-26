let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let knex = require('./knex');
let bodyParser = require('body-parser');

let recipe = require('./routes/recipe');

app.get('/', function(req, res, next) {
    res.send('hello worlds')
})

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/recipe', recipe)

app.listen(port, function(){
    console.log(`listening on port ${port}`)
})