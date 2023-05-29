// mySQL 모듈 가져오기
const mysql = require('mysql');
const conn = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'RabbitPartTimer',
    password: 'rabbit2023@',
    database : 'partTimerDB'
});



// conn.connect(function(){
//     conn.query('INSERT INTO scoreTable(userName) VALUES ("확인")', function(err, result){
//         if(err) console.log(err);
//         console.log("userName inserted");
//         // table scoreTable 생성
        
//     });
// });