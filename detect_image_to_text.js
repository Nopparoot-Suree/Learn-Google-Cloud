//วิธีใช้ให้เปิด terminal directory path ของ folder นี้ จากนั้นพิมพ์คำสั่ง node <ชื่อไฟล์ที่ต้องการรัน>
//เช่น node detect_image_to_text.js
const {client_vision} = require('./index.js')

//อ่านไฟล์ภาพเป็นข้อความ
async function DetectImage(file_path) {
  const [result] = await client_vision.textDetection(file_path)
  
    const detections = result.fullTextAnnotation.text

    return console.log(detections);
}

var image = './image/form.jpg'

DetectImage(image)