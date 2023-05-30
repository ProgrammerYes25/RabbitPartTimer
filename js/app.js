// Express 기본 모듈 불러오기
var express = require('express')
  , http = require('http')
  , path = require('path')
  , mysql = require('mysql');

// Express의 미들웨어 불러오기
var static = require('serve-static');


const conn = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'RabbitPartTimer',
    password: 'rabbit2023@',
    database : 'partTimerDB'
});

let app =express();

app.use(express.urlencoded({extended:false}));
app.use('/', static(path.join(__dirname, 'html')));

app.get('/', (req, res)=>{
    console.log('/ 시작됨');
    res.sendFile(__dirname+'../html/index.html');
});
app.listen(3000, ()=>{
    console.log("3000 로컬 서버 시작 ");
});