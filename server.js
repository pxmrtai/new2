var express = require('express');
var app = express();




app.get('/todo',function(request, response){
    response.send(`
<ul>
  <li> asd</li>
`)
})
