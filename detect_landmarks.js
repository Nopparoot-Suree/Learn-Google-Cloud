//วิธีใช้ให้เปิด terminal directory path ของ folder นี้ จากนั้นพิมพ์คำสั่ง node <ชื่อไฟล์ที่ต้องการรัน>
//เช่น node detect_image_to_text.js
const {client_vision} = require('./index.js') //import module จากไฟล์ index.js

async function DetectLandmarks(file_path) { //สร้าง funtions แบบ Promise
  const [result] = await client_vision.landmarkDetection(file_path) //เรียกใช้ Google Vision หมวด การตรวจหา สถานที่สำคัญ
  
    const landmarks = result.landmarkAnnotations //นำผลลัพท์ที่ได้เก็บไว้ในค่าคงที่ landmarks
    landmarks.forEach((landmark) =>  console.log(landmark)); //loop เอาข้อมูลใน object ทั้งหมดออกมา
    landmarks.forEach(landmark => console.log(`LandMarkในรูปคือ : ${landmark.description}`)); //loop เอาข้อมูลชื่อที่ต้องการออกมา
}

var image1 = './image/eiffel.jpg' //path รูปภาพ
// var image2 = './image/tajmahal.jpg'

DetectLandmarks(image1) //เรียกใช้ function

// DetectLandmarks(image2)
