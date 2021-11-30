let http = require('http');
let users = [
    {id:1,name:'node001'},
    {id:2,name:'node002'},
    {id:3,name:'node003'},
    {id:4,name:'node004'},
    {id:5,name:'node005'},
    {id:6,name:'node006'},
    // {id:7,name:'dome7'},
    // {id:8,name:'dome8'},
    // {id:9,name:'dome9'},
]
let server = http.createServer(function(req,res){
  res.setHeader('Access-Control-Allow-Origin','*');
  if(req.url === '/api/users'){
      res.end(JSON.stringify(users));
  }else{
      res.end('Not Found');
  }
});
server.listen(3000,()=>{
    console.log('后端API接口服务器已经启动在3000端口！')
});