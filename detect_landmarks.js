//วิธีใช้ให้เปิด terminal directory path ของ folder นี้ จากนั้นพิมพ์คำสั่ง node <ชื่อไฟล์ที่ต้องการรัน>
//เช่น node detect_image_to_text.js
const {client_vision} = require('./index.js')

async function DetectLandmarks(file_path) {
  const [result] = await client_vision.landmarkDetection(file_path)
  
    const landmarks = result.landmarkAnnotations
    landmarks.forEach((landmark) =>  console.log(landmark));
    landmarks.forEach(landmark => console.log(`LandMarkในรูปคือ : ${landmark.description}`));
}

var image1 = './image/eiffel.jpg'
// var image2 = './image/tajmahal.jpg'

DetectLandmarks(image1)

// DetectLandmarks(image2)