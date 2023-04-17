//nạp thư viện
const express = require('express')
//khởi tạo function
const app = express()
const port = 3000
const mongoose = require('mongoose')
const Course = require('./Course.js')
//arrow function và route 
app.get('/', (req, res) => {

     Course.find({},function(err,courses){
            if(!err)
            {
                res.json(courses);
            }else
            {
                res.status(400).json({erros:'loi!!!'});
            }
           
     });
  //res.send('Hello World!')
})
//HATEOAS
app.get('/trang_chu', (req, res) => {
    res.send({
        status:'Home!',
        links:{
            homeUrl: 'http://localhost:3000/trang_chu',
            dbUrl: 'http://localhost:3000',
            middlewareUlr : 'http://localhost:3000/middleware'
        }
})
  })

app.get('/middleware',
function(req, res, next)
{
    if(['ok','OK'].includes(req.query.check))
    {
        return next();
    }
    res.status(403).json({mess:'Không chấp nhận'});
},
function(req, res, next)
{
 res.json({
    mess: 'Thành Công'
 });
});  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongoose.connect('mongodb://127.0.0.1:27017/test_db')
.then(()=> {
    console.log('ket noi mongoDB')
}).catch((error)=>{
    console.log(error)
})