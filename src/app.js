const express =require('express');

const app = express();
const { adminAuth,userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.get("/user", userAuth, (req,res)=>{
    res.send("User Data sent");
});

app.get("/admin/getAllUsers", (req,res)=>{
    res.send("All Data sent");
});

app.get("/admin/deleteUser", (req,res)=>{
    res.send("Deleted a User!");
});

app.listen(7777, ()=> {
console.log("server is successfully listening on port 7777");

});