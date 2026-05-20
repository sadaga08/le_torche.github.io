require('dotenv').config();
const express = require('express');
const db = require('./Config_Db/db');
const authRoutes = require('./Route/authRoute');
const articleRoutes = require('./Route/articleRoute');
const adminRoute = require('./Route/adminRoute');
const dashboardRoute = require('./Route/dashboardsRoute');
const vosArticlesRouter = require('./Route/vosArticlesRoute');
const videoTorchRoute = require('./Route/videoTorchRoute');
const commentaireRoute = require('./Route/commentaireRoute');

const path = require('path'); 
const app = express();
const cors = require('cors');

const methodOverride = require('method-override');
// ✅ ORDRE CORRECT
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ← AJOUTE cette ligne
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        return req.body._method;
    }
    if (req.query && req.query._method) {
        return req.query._method; // ← lit aussi depuis l'URL (?_method=DELETE)
    }
}));app.set("view engine", "ejs");
app.set("views", "./Views"); // ← V majuscule comme ton vrai dossier
// App.js
app.use(express.static('public'));
// ← UNE SEULE route '/', qui redirige vers dashboard
app.get('/', (req, res) => {
    res.redirect('/dashboard');
});
app.use('/dashboard-torch', express.static(path.join(__dirname, 'dashboard-torch')));

app.use('/uploads/images', express.static('uploads/images'));
app.use('/uploads/videos', express.static('uploads/videos'));
app.use('/api/admin', adminRoute);
app.use('/api/articles', articleRoutes);
app.use('/dashboard', dashboardRoute); // ← tu avais supprimé cette ligne !
app.use('/api/auth', authRoutes);
app.use('/api/vosArticles', vosArticlesRouter);
app.use('/api/videoTorch', videoTorchRoute);
app.use('/api/commentaires', commentaireRoute);

// Dans App.js, après vos autres middlewares
app.get('/.well-known/appspecific/com.chrome.devtools.json', (req, res) => {
    res.json({});
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});