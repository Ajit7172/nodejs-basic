require("dotenv").config();
const bcryptjs = require("bcryptjs");

const encryptPassword = (password) =>{
    const epw = bcryptjs.hashSync(password,Number(process.env.SALT_ROUND));

    const verifyPassword = (hashPw, password) =>
    bcryptjs.compareSync(password,)
}