
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable.
const genAI = new GoogleGenerativeAI("AIzaSyB76L5mvSDPmG6W5pAFC5s5B-b49oVpucY");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/test",(req,res)=>{
    res.send("website is working");
});

//generate promt answer using googel api
let answer = '';

app.get("/promt",async (req,resp)=>{
  //  const {userpromt} = req.body;
   answer = await run("what is ai");
   resp.status(200).send({answer});
   console.log(answer);
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
    const  prompt = userPromt + " in less than 300 words only";

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