const vision = require('@google-cloud/vision') //เรียกใช้ google vision Libary
const textToSpeech = require('@google-cloud/text-to-speech'); //เรียกใช้ google text-to-speech Libary

//เอาข้อมูล Json ใน service account.json มาใส่ในค่าข้างใน
const CREDENTIALS = JSON.parse(JSON.stringify({
  "type": "service_account",
  "project_id": "line-moblie-app",
  "private_key_id": "06f32247f7b996d95937a4656f1a9fded7199315",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDRQd9E7vl0YKE5\nEoturvtT1xzwH2VXMqcFhk3wpjqBDv2eq1IdQVOQSsVCrubk/hza0V12wcIUw/Hb\n1X3kqqIeBcjJc3Kvndb5cFKIYDpeO2UJ94lrOU26H4nVb5ytWzU4CnWYCAAALIEU\n+X3fvJkTWoGwGi6PWPgSVP3VS7nYZYD2lEj+pk4uylmFE8kpuN6eind43pWfguQo\nXQ9Y/sS3efJRV1RuyS2f+AN6FC/1HkXj9b17TYIMzIidVG7EJO2o1t1sKdMNA4WH\nNl3wJJb2j2bwOMhlvQtCI3+VTjzi5E4mFwn2VEHmKCQZk6Edhpr5c53mRwpaxI5T\ntHSYIxYHAgMBAAECggEAMBwodGVLBfYnawM3+mkRkGuPFCfruToEi3Ee3zqgjcaA\nCehSlzZLO4vtQVEL9c70nFxxVBnlALgyFXxGlvmiDyv+R06bKgQshinMV91j3gFi\n0AFQ302L8MRKgL9J8tNa73j8I0mHkoKo5MUdqwBl4zy2P2ItnThzxGc0+sKPxk/Z\nLsTUnxLimz+XdOqMWMdE5AqxXp+NlQ/sF7X3z/ukKQpLaxZso7O6k4y2Ho+cCI1+\ncn8sicqIFcH0t4ijb/wcjGN80aU8fLxxCSR34PPS25xANy9GLCtZLI8ME6sJCtS7\nt2JIfQFdlrmYJO7jWadqL7iLccmFnP0DdmM7CA0Q9QKBgQD6W3gaeGBNdem63ede\nQoQ0tAgKGVqbQodAEjzWZYwz0ajZIdfdX8W7iVqyxP/HgO+c1H81uJ5DaDJJu7EM\n1M6PmQZSSqcAy02nQ12bDD/+bk0+vROhHGeH5MYMmp5PnB51o0rBVQ4tRxGhTGFd\nPZjs7LtvlYMIiVEw1S2j+TW2AwKBgQDV+ULYRnvMnGYBo0qJaXnnivJVs0urPxAp\nmguavSxPHfYyfGgiN0P4QVtj74Wr8ddmD0YomVIZFMnGs4mo7SlrVMTO5xBScJZu\nhNwVH8nbQQIU1y1jPMT4ueYBcm6sIThD+NZlInhEngOyTkMOHfJa2tUPvGhfQXKt\njcWlZsOyrQKBgQDpXZPRkL2r1qqdDjWZ7oTPn7USvNlxeg0akyV0b8nFj7xFUb+m\n0Zw+GGWb1/fYXn58ALPnPoT/rkOZ6UO7Ay7cObbjxERxgBCNRkUdvsh0ARstzQ9c\nEV8MFBrsKsBA0vStkR2gowkI+YMciFcFk+JVjsGU3Jf8wAsXas8VVrpTQwKBgGK/\nbxbqqFWMVBMrbcmusMCnwiDE5wX3y5i3a+WUqi81D5rLCS/JO4gFeYzMTG9G4/ZI\n1EMGRvomOtyFnOEl2jibXVxzDHhPV01X6U2iZwDVpoVBrMOglvKGsFw4mFS92/6a\nhy8TUlewaNpP/eg079T4Kt3hQHW9eZQY2n7zxxrdAoGBAOQTfvzBcNuqrlBXEUpS\nDmCSjIxMlkndUys3fcSybYQgSAfXC1sloUWMSZXrDyVp1m+8iuNb+X0tFX9ZK7bz\nx1gCdLVOkGg/jP8lKdFp+/KCI+aLfsmZt5pwhjnRYFRF9QLq0qxMOv23ZbysZOnc\npsz182XDso9mkB7ODjm5y8Va\n-----END PRIVATE KEY-----\n",
  "client_email": "test-google-api@line-moblie-app.iam.gserviceaccount.com",
  "client_id": "110581255520943130079",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/test-google-api%40line-moblie-app.iam.gserviceaccount.com"
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





