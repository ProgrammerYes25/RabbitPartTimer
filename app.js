// Express 기본 모듈 불러오기
var express = require('express')
  , ejs = require('ejs')
  , path = require('path')
  , mysql = require('mysql');

// Express의 미들웨어 불러오기
var static = require('serve-static');
var player = require('play-sound')(opts = {})

// const conn = mysql.createConnection({
//     host: '127.0.0.1',
//     port: '3306',
//     user: 'RabbitPartTimer',
//     password: 'rabbit2023@',
//     database : 'partTimerDB'
// });

let app =express();
// const audio = new Audio('./music/button_click.mp3');

app.use(express.urlencoded({extended:false}));
app.use(express.static('views'));
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 

app.get('/', (req, res)=>{
    console.log('/ 시작됨');
    res.render('index');
});

app.get('/gameNameEnterPage', (req, res)=>{
    console.log('/ gameNameEnterPage');
    res.render('gameNameEnterPage')
});

app.get('/gameManualPage', (req, res)=>{
    console.log('/ gameManualPage');
    res.render('gameManualPage')
});

app.post('/gamePlayPage', (req, res)=>{
    console.log('/ 시작됨');
    // audio.autoplay = true;
    // audio.autoplay = true;
    // clickMusic.play();
    player.play('button_click.mp3', function(err){
        if (err) throw err
      })
    
    // userName = req.body.nameInput;
    // console.log('userName :'+userName);
    // conn.query(`INSERT INTO scoreTable(userName, userScore) VALUES (?, null)`,[userName], function(err, result){
    //     if(err) console.log(err);
    //     console.log("userName inserted");
    //     // table scoreTable 생성
    // });
    //conn.end();
    res.render('gamePlayPage');

    // conn.query('select * from scoreTable', (err, results)=>{
    //     if(err){
    //         console.log('db select error '+err);
    //     }else{
    //         console.dir(results);
    //         res.render('list', {datalist: results});
    //     }
    // })
    //res.sendFile('./html/gamePlayPage.html');
});

app.get('/gameTimeoutPage', (req, res)=>{
    console.log('/ gameTimeoutPage');
    res.render('gameTimeoutPage')
});
app.get('/gameManualPage', (req, res)=>{
    console.log('gameManualPage');
    res.render('gameManualPage');
})

app.listen(3000, ()=>{
    console.log("3000 로컬 서버 시작 ");
});