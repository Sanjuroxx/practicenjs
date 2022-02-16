const express = require("express")
const mongoose =require("mongoose")
const sessioncontroller = require("./controller/session-controller") 
const rolecontroller=require("./controller/role-controller")
const app = express()
//middle ware
app.use(express.json())//mobile accept json data
app.use(express.urlencoded({extended:true}))//browser 




//database 
mongoose.connect('mongodb://localhost:27017/practicenjs',function(err){
  if(err){
    console.log("db connection fail .. .. . ");
    console.log(err);
  }else{
    console.log("db Connected....");
  }
})

//role 
app.post("/roles",rolecontroller.addRole)



//url
app.get("/",function(req,rest){
    rest.write("welcome...")
    rest.end()
})
app.get ("/login",sessioncontroller.login)
app.get ("/signup",sessioncontroller.signup)
app.post("/saveuser",sessioncontroller.saveuser)


//server
app.listen(3000,function(){
    console.log("server started on 3000");
})
