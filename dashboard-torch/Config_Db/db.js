const mysql = require('mysql2');

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,   
    database: process.env.DB_NAME
});

db.getConnection((err, connection) => {
    if (err) {
        console.log("❌ Connexion MySQL échouée :");
        console.log("Code :", err.code);
        console.log("Message :", err.message);
        console.log("Erreur complète :", err);
    } else {
        console.log("✅ Connexion MySQL réussie !");
        connection.release();
    }
});

module.exports = db.promise();