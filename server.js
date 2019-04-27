let express = require('express');
var cors = require('cors')
let app = express();
let port = process.env.PORT || 3000;
let knex = require('./knex');
let bodyParser = require('body-parser');

let recipe = require('./routes/recipe');

var whitelist = ['http://localhost:3000', 'https://the-recipes-frontend.herokuapp.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.get('/', cors(corsOptions), function(req, res, next) {
    res.send('hello and welcome to alyssa and peters super ultimate recipes backend')
})

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/recipe', cors(corsOptions), recipe)

app.listen(port, function(){
    console.log(`listening on port ${port}`)
})
