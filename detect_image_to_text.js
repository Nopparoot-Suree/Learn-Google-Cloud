//วิธีใช้ให้เปิด terminal directory path ของ folder นี้ จากนั้นพิมพ์คำสั่ง node <ชื่อไฟล์ที่ต้องการรัน>
//เช่น node detect_image_to_text.js
const {client_vision} = require('./index.js') //import module จากไฟล์ index.js

//อ่านไฟล์ภาพเป็นข้อความ
async function DetectImage(file_path) { //สร้าง funtions แบบ Promise
  const [result] = await client_vision.textDetection(file_path) //เรียกใช้ Google Vision หมวด การตรวจหา ข้อความจากรูปภาพ 
  
    const detections = result.fullTextAnnotation.text //นำผลลัพท์ที่ได้เก็บไว้ในค่าคงที่ detections

    return console.log(detections); //แสดงผลลัพท์ที่ได้ออกมา
}

var image = './image/form.jpg'  //path รูปภาพ

DetectImage(image) //เรียกใช้ function
