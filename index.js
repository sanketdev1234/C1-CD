const express = require("express");
const app = express();
const path = require("path");


const port=3000;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 




async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/BcryptAndJWT");
}

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));
  

app.listen(port , ()=>{
    console.log(`server is running on port ${port}`);
});



app.get("/" ,(req , res)=>{
    res.send("hello i am root");
 } );
 