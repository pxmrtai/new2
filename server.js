var express = require('express');
var app = express();

app.set('view engine','pug')
app.set('views','./views')


app.get('/',function(request, response){
    response.render('index',{
        users: [
            {id: 1, name: 'Tai'},
            {id: 2, name: 'tuan anh'}

        ]
    })
})
