// mySQL 모듈 가져오기
let express = require('express');
let mysql = require('mysql');
let conn = mysql.createConnection({
        host: '127.0.0.1',
        port: '3306',
        user: 'RabbitPartTimer',
        password: 'rabbit2023@'
    })

// conn.connect(function(err) {

//     if (err) throw err;
  
//     console.log("Connected!");
  
//     con.query("drop database if exists mirimdb;", function (err, result) {
  
//       if (err) throw err;
  
//       console.log("drop Database ");
  
//     });

//     con.query("create table todotbl(id int auto_increment primary key, contents varchar(20),yesno varchar(3));", function (err, result) {
  
//         if (err) throw err;
    
//         console.log("create Database ");
    
//       });
  
//   });

