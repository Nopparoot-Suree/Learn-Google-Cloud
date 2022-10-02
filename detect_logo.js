//วิธีใช้ให้เปิด terminal directory path ของ folder นี้ จากนั้นพิมพ์คำสั่ง node <ชื่อไฟล์ที่ต้องการรัน>
//เช่น node detect_image_to_text.js
const {client_vision} = require('./index.js')

async function DetectLogos(file_path) {
  const [result] = await client_vision.logoDetection(file_path)
  
    const logos = result.logoAnnotations
    console.log('Logos:');
    logos.forEach(logo => console.log(logo));
    logos.forEach(logo => console.log(`Logo ในรูปนี้คือ : ${logo.description}`));
}

var image = './image/starbucks-logo.png'

DetectLogos(image)