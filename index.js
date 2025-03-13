const express = require('express');
const { resolve } = require('path');
const connectDB=require('./config/db')
const router=require("./routes/auth")
require("dotenv").config()

const app = express();
const port = 3010;
app.use("/user",router)

const url=process.env.MONGO_URI


app.use(express.static('static'));
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, async() => {
  console.log(`Example app listening at http://localhost:${port}`);
  connectDB(url)

});
