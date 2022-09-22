//1. srerver 디랙토리 생성
//2. npm install express 
//3. server/ server.js 파일생성.

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3306;

// http://localhost:3306 으로 접속 응답메세지 출력
app.get('/', (req,res) => {
    res.send({ test : "this is test!!"});
})
 
app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
})
