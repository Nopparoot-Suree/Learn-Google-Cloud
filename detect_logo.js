//วิธีใช้ให้เปิด terminal directory path ของ folder นี้ จากนั้นพิมพ์คำสั่ง node <ชื่อไฟล์ที่ต้องการรัน>
//เช่น node detect_image_to_text.js
const {client_vision} = require('./index.js') //import module จากไฟล์ index.js

async function DetectLogos(file_path) { //สร้าง funtions แบบ Promise
  
  const [result] = await client_vision.logoDetection(file_path) //เรียกใช้ Google Vision หมวด การตรวจหา Logo 
  
    const logos = result.logoAnnotations //นำผลลัพท์ที่ได้เก็บไว้ในค่าคงที่ logos
    console.log('Logos:');
    logos.forEach(logo => console.log(logo)); //loop เอาข้อมูลใน object ทั้งหมดออกมา
    logos.forEach(logo => console.log(`Logo ในรูปนี้คือ : ${logo.description}`)); //loop เอาข้อมูลชื่อที่ต้องการออกมา
}

var image = './image/starbucks-logo.png' //path รูปภาพ

DetectLogos(image) //เรียกใช้ function
