const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToMongo = require("./db");

const postRoutes = require("./routes/postRoutes");
const dalleRoutes = require("./routes/dalleRoutes");

dotenv.config();

connectToMongo();

const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.REACT_APP_CLIENT_URL,
  })
);
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello from DALL.E!",
  });
});

app.listen(5000, () => {
  console.log("App listen on the port 5000");
});
