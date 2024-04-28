require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Ajit Kumar Chaudhary 👻" <chaudharyajit7172@gmail.com>', // sender address
    to: "uniqueboeajit@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);


// Write a nodejs module to encrypt and verify the password using bcryptjs
// encryptPassword(string): string
// verifyPassword(hashPw, password):boolean

// Write a nodejs module to create and verify jwtToken using jsonwebtoken.
//createToken(): string
// verifyToken(): boolean
