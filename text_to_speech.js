
//วิธีใช้ให้เปิด terminal directory path ของ folder นี้ จากนั้นพิมพ์คำสั่ง node <ชื่อไฟล์ที่ต้องการรัน>
//เช่น node detect_image_to_text.js
const fs = require('fs'); //เรียกใช้จัดการกับไฟล์
const util = require('util'); //เรียกใช้ util
const {client_texet_to_speech} = require('./index.js') //import module จากไฟล์ index.js

async function text_to_speech(){ //สร้าง funtions แบบ Promise

    const text = 'สวัสดีชาวโลก'; //ข้อความที่ต้องการให้อ่านออกมาเป็นเสียง

    const outputFile = './mp3/voice.mp3' // path หรือ ที่เก็บไฟล์ mp3
    
    const request = { //สร้าง request เพื่อนำไปใช้กับ text to speech API
        input: {text: text}, //รับข้อความ
        voice: {languageCode: 'th-TH', ssmlGender: 'FEMALE'}, //ตั้งค่าน้ำเสียง ประเทศ , เพศ
        audioConfig: {audioEncoding: 'MP3'}, //ตั้งค่า Audio เป็น MP3
    };
    const [response] = await client_texet_to_speech.synthesizeSpeech(request); //เก็บผลลัพท์ object ไว้ในค่าคงที่ response
    const writeFile = util.promisify(fs.writeFile); //เปลี่ยน callback เป็น Promise
    await writeFile(outputFile, response.audioContent, 'binary'); //สร้างไฟล์ที่เป็น mp3 ไว้ใน path ที่กำหนด
    console.log(`Audio content written to file: ${outputFile}`); //แสดงผลออกมาทาง Terminal
}

text_to_speech() //เรียกใช้งาน
