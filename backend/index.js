
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const gemini_api = process.env.GEMINI_API;
// Access your API key as an environment variable.
const genAI = new GoogleGenerativeAI(gemini_api);



app.use(bodyParser.json());
app.use(cors({
    origin: ["https://gemini-clone-two-vert.vercel.app", "http://localhost:5173"] // Replace with the domains you want to allow
}));


app.get("/",(req,res)=>{
    res.send("gemini api is working fine...!!!");
});

//generate promt answer using googel api
let answer = '';

// app.get("/promt",async (req,resp)=>{
//    const {userpromt} = req.body;
//    answer = await run(userpromt);
//    resp.status(200).send({answer});
// //    console.log(answer);
// });


app.get("/promt", async (req, res) => {
    const { userpromt } = req.query;
  
    if (!userpromt) {
      return res.status(400).send({ error: "Prompt is required" });
    }
  
    try {
      const answer = await run(userpromt);
      res.status(200).send({ answer });
    } catch (error) {
      console.error("Gemini API error:", error.message);
      res.status(500).send("Something went wrong with the Gemini API.");
    }
  });
  

//configuring promt answer
const generationConfig = {
  stopSequences: ["red"],
  maxOutputTokens: 1000,
  temperature: 0.9,
  topP: 0.1,
  topK: 16,
};

async function run(userPromt) {
    //choosing a model
    const model = genAI.getGenerativeModel({model : "gemini-1.5-flash" , generationConfig});
    
    //define promt or modifying promt
    const  prompt = userPromt + " \n\n" + "Answer in detail and in a simple way.";

    const result = await model.generateContent(prompt);

    const response = result.response;
    const text  = response.text();

    return text;
}


// app.listen(3000,()=>{
//     console.log("everthing is fine...!!!");
//     console.log("server is running on port number :3000 \n [http://localhost:3000]");
// })
module.exports = app;
