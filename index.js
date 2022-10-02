const vision = require('@google-cloud/vision') //เรียกใช้ google vision Libary
const textToSpeech = require('@google-cloud/text-to-speech'); //เรียกใช้ google text-to-speech Libary

//เอาข้อมูล Json ใน service account.json มาใส่ในค่าข้างใน
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

const CONFIG = {
    credentials: {
        private_key: CREDENTIALS.private_key,
        client_email: CREDENTIALS.client_email
    }
};

exports.client_vision = new vision.ImageAnnotatorClient(CONFIG)

exports.client_texet_to_speech = new textToSpeech.TextToSpeechClient(CONFIG);





