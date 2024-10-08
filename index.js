
require('dotenv').config()
const express =  require("express")
const app = express()
const port =4000;

app.get("/" , (req,res)=>{
    res.send("Hey server 1");
})

app.get("/signup", (req,res) => {
    res.send("Signup Succesful")
})

app.get("/login", (req,res)=>{
    res.send("<h1> Please login at chai and code </h1>")
})

app.get("/youtube", (req,res)=>{
    res.send("<h2> Chai aur code </h2>")
})

app.listen(process.env.PORT, () => {
    console.log(`Server is istening ${port}`)
})