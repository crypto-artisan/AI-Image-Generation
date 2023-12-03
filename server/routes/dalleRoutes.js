const express = require("express");
const dotenv = require("dotenv");
const OpenAI = require("openai");

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from DALL-E!" });
});

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;;

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    const image = response.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Something went wrong");
  }
});

module.exports = router;
