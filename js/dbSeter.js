// mySQL 모듈 가져오기
let mysql = require('mysql');
let conn = mysql.createConnection({
        host: '127.0.0.1',
        port: '3306',
        user: 'RabbitPartTimer',
        password: 'rabbit2023@'
    })
    
// database scoredb 생성
conn.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    conn.query("CREATE DATABASE IF NOT EXISTS  `scoredb` DEFAULT CHARACTER SET utf8", function(err, result){
        if(err) console.log(err);
        console.log("Database created");
    });
    conn.end();
    console.log("Database end");
});


