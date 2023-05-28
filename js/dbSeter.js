// mySQL 모듈 가져오기
const mysql = require('mysql');
const conn = mysql.createConnection({
        host: '127.0.0.1',
        port: '3306',
        user: 'RabbitPartTimer',
        password: 'rabbit2023@'
    })


conn.connect(function(err){
    if(err) throw err;
    console.log("Connected!");

    // database partTimerDB 생성
    conn.query("CREATE DATABASE IF NOT EXISTS  partTimerDB DEFAULT CHARACTER SET utf8", function(err, result){
        if(err) console.log(err);
        console.log("Database created");
        // table scoreTable 생성
        
    });
    conn.query("USE partTimerDB", function(err,ersult){
        if(err) console.log(err); 
        console.log("partTimerDB useing");

        // table scoreTable 생성
        conn.query("CREATE TABLE IF NOT EXISTS scoreTable("+
            "userName TEXT NOT NULL, "+
            "userScore int)", function(err,ersult){
            if(err) console.log(err); 
            console.log("TABlLE created");
            conn.end();
            console.log("Database end");
        });
    });
});
