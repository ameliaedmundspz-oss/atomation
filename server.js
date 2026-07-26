import express from "express";
import cors from "cors";

const app = express();
app.use((req, res, next) => {
  res.removeHeader("X-Frame-Options");
  res.setHeader("Content-Security-Policy", "frame-ancestors *");
  next();
});
app.use(cors());

// Your URLs (change these)
const urls = [
  "https://jellyfish-app-zlskm.ondigitalocean.app/",
  "https://jellyfish-app-zlskm.ondigitalocean.app/",
  "https://jellyfish-app-zlskm.ondigitalocean.app/"
];

app.get("/get-url", (req, res) => {
  const random = urls[Math.floor(Math.random() * urls.length)];

  console.log("Serving:", random);

  res.json({ url: random });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
