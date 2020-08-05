const express = require('express'); 
const app = express(); 
app.set('views', './views'); // Thư mục views nằm cùng cấp với file app.js
app.set('view engine', 'pug'); // Sử dụng pug làm view engine

var todos =[
            {name: 'đi chợ'},
            {name: 'nấu cơm'},
            {name: 'rửa bát'},
            {name: 'học coderX'}
        
        ]

        
app.get('/todos',function(req, res){
    res.render('todos/index',{
        todos: todos
    })
})
app.get('/todos',function(req,res){
  var q = req.query.q;
  var matched = todos.filter(function(todo){
    return todo.name.indexOf(q) !== -1; 
  })
  a
})


app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});