let express = require('express');
var cors = require('cors')
let app = express();
let port = process.env.PORT || 3001;
let knex = require('./knex');
let bodyParser = require('body-parser');

let recipe = require('./routes/recipe');

// var whitelist = ['http://localhost:3000', 'https://the-recipes-frontend.herokuapp.com']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PATCH,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
    res.send('hello and welcome to alyssa and peters super ultimate recipes backend')
})

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/recipe', recipe)

app.listen(port, function(){
    console.log(`listening on port ${port}`)
})
