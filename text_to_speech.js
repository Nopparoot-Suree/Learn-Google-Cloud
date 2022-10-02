
//วิธีใช้ให้เปิด terminal directory path ของ folder นี้ จากนั้นพิมพ์คำสั่ง node <ชื่อไฟล์ที่ต้องการรัน>
//เช่น node detect_image_to_text.js
const fs = require('fs');
const util = require('util');
const {client_texet_to_speech} = require('./index.js')

async function text_to_speech(){

    const text = 'สวัสดีชาวโลก';

    const outputFile = './mp3/voice.mp3'
    const request = {
        input: {text: text},
        voice: {languageCode: 'th-TH', ssmlGender: 'FEMALE'},
        audioConfig: {audioEncoding: 'MP3'},
    };
    const [response] = await client_texet_to_speech.synthesizeSpeech(request);
    const writeFile = util.promisify(fs.writeFile);
    await writeFile(outputFile, response.audioContent, 'binary');
    console.log(`Audio content written to file: ${outputFile}`);
}

text_to_speech()
