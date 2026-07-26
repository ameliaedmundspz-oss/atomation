import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// Your URLs (change these)
const urls = [
  "https://example1.com",
  "https://example2.com",
  "https://example3.com"
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
