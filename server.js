const express = require('express'); 
const app = express(); 
 

app.get('/', function(req, res){
    res.send("Hello World");
})
app.set('views', './views'); // Thư mục views nằm cùng cấp với file app.js
app.set('view engine', 'pug'); // Sử dụng pug làm view engine
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});