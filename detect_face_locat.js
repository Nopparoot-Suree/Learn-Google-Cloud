//วิธีใช้ให้เปิด terminal directory path ของ folder นี้ จากนั้นพิมพ์คำสั่ง node <ชื่อไฟล์ที่ต้องการรัน>
//เช่น node detect_image_to_text.js

const {client_vision} = require('./index.js')

//จับหน้าตาตำแหน่งของบุคคล
async function DetectFace(file_path) {
  const [result] = await client_vision.cropHints(file_path)
  
    const cropHints = result.cropHintsAnnotation;
    console.log(cropHints);

    cropHints.cropHints.forEach((hintBounds, hintIndex) => {
      console.log(`Crop Hint ${hintIndex}:`);
      hintBounds.boundingPoly.vertices.forEach((bounds, boundIndex) => {
        console.log(` Bound ${boundIndex} : (x: ${bounds.x}, y: ${bounds.y})`);
      })
    })
}

var image = './image/Elon_Musk.jpg'

DetectFace(image)