const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan')
const path = require('path')

const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/Public/")))

//จัดการรีเควสที่เข้ามาที่เข้ามาใน ถ้าเข้ามาในพาร์ทของ / แล้วจะตอบสนองรีเควสเรสป้อนอย่างไร แล้วให้ใส่คำสั่งลงไปใน{}
app.get("/", (req, res) => {

    res.send('Hello BorntoDev');
})


//ให้รอฟังที่port และสิ่งที่เขาจะทำใส่ลงไปในปีกกาเหมือนเดิม
app.listen(port, () => {

    debug('Listening on port : ' + chalk.green(port));

})