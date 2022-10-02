const vision = require('@google-cloud/vision') //เรียกใช้ google vision Libary
const textToSpeech = require('@google-cloud/text-to-speech'); //เรียกใช้ google text-to-speech Libary

//เอาข้อมูล Json ใน service account.json มาใส่ในค่าข้างใน (เป็นการ set ค่า เป็น JSON)
const CREDENTIALS = JSON.parse(JSON.stringify({
  "type": "",
  "project_id": "",
  "private_key_id": "",
  "private_key": "",
  "client_email": "",
  "client_id": "",
  "auth_uri": "",
  "token_uri": "",
  "auth_provider_x509_cert_url": "",
  "client_x509_cert_url": ""
}
));

//ดึงค่าคงที่ private_key และ client_email จาก CREDENTIALS มาเก็บไว้ในค่าคงที่ CONFIG
const CONFIG = {
    credentials: {
        private_key: CREDENTIALS.private_key,
        client_email: CREDENTIALS.client_email
    }
};

//เรียกใช้ Google Vision และ สร้าง Module ออกไปใช้งานไฟล์อื่นๆ
exports.client_vision = new vision.ImageAnnotatorClient(CONFIG)

//เรียกใช้ text to speech และ สร้าง Module ออกไปใช้งานไฟล์อื่นๆ
exports.client_texet_to_speech = new textToSpeech.TextToSpeechClient(CONFIG);





