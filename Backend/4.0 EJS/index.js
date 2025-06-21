import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

let type = "a weekday";
let adv = "it's time to work hard!";

const today = new Date();
const day = today.getDay();

if (day === 0 || day == 6) {
  type = "the weekend";
  adv = "it's time to have fun!";
}

app.get("/", (req, res) => {
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
