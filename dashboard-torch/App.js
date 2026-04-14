require('dotenv').config();
const express = require('express');
const db = require('./Config_Db/db');
const authRoutes = require('./Route/authRoute');
const articleRoutes = require('./Route/articleRoute');
const adminRoute = require('./Route/adminRoute');
const dashboardRoute = require('./Route/dashboardsRoute');
const vosArticlesRoute = require('./Route/vosArticlesRoute')
const app = express();
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true
}));
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.set("view engine", "ejs");
app.set("views", "./Views"); // ← V majuscule comme ton vrai dossier
// App.js
app.use(express.static('public'));
// ← UNE SEULE route '/', qui redirige vers dashboard
app.get('/', (req, res) => {
    res.redirect('/dashboard');
});
app.use('/uploads/images', express.static('uploads/images'));
app.use('/uploads/videos', express.static('uploads/videos'));
app.use('/api/admin', adminRoute);
app.use('/api/articles', articleRoutes);
app.use('/dashboard', dashboardRoute); // ← tu avais supprimé cette ligne !
app.use('/api/auth', authRoutes);
app.use('/api/vosArticles', vosArticlesRoute); 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});