// mySQL 모듈 가져오기
const mysql = require('mysql');
const conn = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'RabbitPartTimer',
    password: 'rabbit2023@',
    database : 'partTimerDB'
});

// conn.connect();

var name = "들어가라얍";

function saveName(){
    name = document.getElementById("NameInput").value;
    alert(name); //변수에 값 들어온 것 확인
    conn.query(`INSERT INTO scoreTable(userName, userScore) VALUES (?, null)`,[name], function(err, result){
        if(err) console.log(err);
        console.log("userName inserted");
        // table scoreTable 생성
    });
    dbconn.query('select * from todotbl', (err, results)=>{
        if(err){
            console.log('db select error '+err);
        }else{
            console.dir(results);
            res.render('list', {datalist: results});
        }
    })
}

// conn.end();