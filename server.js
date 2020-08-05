const express = require('express'); 
const app = express(); 
app.set('views', './views'); // Thư mục views nằm cùng cấp với file app.js
app.set('view engine', 'pug'); // Sử dụng pug làm view engine

var todo =[
            {name: 'đi chợ'},
            {name: 'nấu cơm'},
            {name: 'rửa bát'},
            {name: 'học coderX'}
          

        ]
var nam =[
            
            {name: 'nấu cơm'},
            {name: 'rửa bát'},
            {name: 'học coderX'}
          

        ]
app.get('/todos',function(request, response){
    response.render('todos/index',{
        todos: todo
    })
})
app.get('/todos',function(req,res){
   res.render('todos/index',{
     nam:nam
   })
})

app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});