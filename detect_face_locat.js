//วิธีใช้ให้เปิด terminal directory path ของ folder นี้ จากนั้นพิมพ์คำสั่ง node <ชื่อไฟล์ที่ต้องการรัน>
//เช่น node detect_image_to_text.js

const {client_vision} = require('./index.js') //import module จากไฟล์ index.js

//จับหน้าตาตำแหน่งของบุคคล
async function DetectFace(file_path) { //สร้าง funtions แบบ Promise
  const [result] = await client_vision.cropHints(file_path) //เรียกใช้ Google Vision หมวด การตรวจหา หน้าบุคคล
  
    const cropHints = result.cropHintsAnnotation; //นำผลลัพท์ที่ได้เก็บไว้ในค่าคงที่ cropHints
    console.log(cropHints);

    cropHints.cropHints.forEach((hintBounds, hintIndex) => { //loop เอาผลลัพท์จาก object ทั้งหมดออกมา
      console.log(`Crop Hint ${hintIndex}:`);
      hintBounds.boundingPoly.vertices.forEach((bounds, boundIndex) => { //เข้าถึง x  ,y และ loop เอาผลลัพท์จาก x, y ทั้งหมดออกมา
        console.log(` Bound ${boundIndex} : (x: ${bounds.x}, y: ${bounds.y})`); //แสเงตำแหน่งออกมา
      })
    })
}

var image = './image/Elon_Musk.jpg' //path รูปภาพ

DetectFace(image) //เรียกใช้ function
