// mySQL 모듈 가져오기
let express = require('express');
let mysql = require('mysql');
let conn = mysql.createConnection({
        host: '127.0.0.1',
        port: '3306',
        user: 'RabbitPartTimer',
        password: 'rabbit2023@'
    })
console.log("Connected!");
