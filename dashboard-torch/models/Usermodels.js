const db = require("../Config_Db/db");

exports.trouverUserparEmail = async (email) =>{

   const [row] = await db.execute("SELECT *FROM users WHERE email = ?",[email]);
   return row[0];
}
exports.crerUser = async(user)=>{
   const {pseudo , email , password} = user;
   await db.query("INSERT INTO users (pseudo , email , password) VALUES (? , ? , ?)",[pseudo , email , password]);
}