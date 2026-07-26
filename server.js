import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// Your URLs (change these)
const urls = [
  "https://www.base64-image.de/",
  "https://chat.deepseek.com/",
  "https://www.google.com/search?q=how+to+convert+image+into+data+base+base64+Read+12+web+pages+Converting+an+image+into+a+Base64+string+is+a+common+task+for+web+developers%2C+often+used+to+embed+images+directly+into+HTML%2C+CSS%2C+or+JSON.+There+are+several+ways+to+do+this%2C+depending+on+your+preferred+workflow.+%F0%9F%92%BB+How+to+Do+It+in+Code&sourceid=chrome&ie=UTF-8"
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
