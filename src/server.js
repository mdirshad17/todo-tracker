import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import authRoutes from './routes/authRoutes.js';
import todoRoutes from './routes/todoRoutes.js';
import authMiddleware from './middleware/authMiddleware.js';
const app = express();
const PORT = process.env.PORT || 5003;


// Middleware to serve static files
app.use(express.json()); // for parsing application/json
// get the filename and directory name in ES module scope
const __filename = fileURLToPath(import.meta.url);

// get the directory name
const __dirname = dirname(__filename);

// const publicPath = path.join(__dirname,'src' ,'public');
app.use(express.static(path.join(__dirname, "../public")));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});



app.use('/auth',authRoutes);
app.use('/todos',authMiddleware ,todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
