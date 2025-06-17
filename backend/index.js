require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

// ✅  connect with MongoDB Atlas ()

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error: ", err));

  
// ✅ Routes
const videoRoutes = require('./routes/videos');
const authRoutes = require('./routes/auth');
const mainPageCategoryRoutes = require('./routes/mainPageCategory');
const mainPageVideosRoutes = require('./routes/mainpagevideos.routes');
const shortPageVideoRoutes = require('./routes/shortPageVideoRoutes');
const longpageRoutes = require('./routes/longpageVideos');
const ugcpageRoutes = require('./routes/ugcpage');
const adminRoutes = require('./routes/admin');
app.use('/api/mainpagecategory', mainPageCategoryRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api', authRoutes);  // /api/register and /api/login
const authReg = require('./routes/register'); // maan ke rakha hai ke aapka register/login routes auth.js mein hain
const newsletterRoutes = require('./routes/newsletterRoutes');

app.use('/api/mainpagevideos', mainPageVideosRoutes);
app.use('/api/shortvideos', shortPageVideoRoutes);
app.use('/api/longpage', longpageRoutes);
app.use('/api/ugcpage', ugcpageRoutes);
app.use('/api/admin', adminRoutes); // 👈 This is your admin CRUD
app.use('/api', authReg);
app.use('/api/newsletter', newsletterRoutes);


// ✅ Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`, req.body);
  next();
});


// 


