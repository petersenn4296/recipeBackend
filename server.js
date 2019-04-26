let express = require('express')
let app = express();
let port = process.env.PORT || 3000

app.get('/', function(req, res, next) {
    res.send('hello world')
})

app.listen(port, function(){
    console.log(`listening on port ${port}`)
})