const express =require('express');

const app = express();

app.use("/user", (req,res, next)=>{
    res.send("route handler 1");
    next();
},
(req,res)=>{
    res.send("route handler 2");
}
);

app.listen(3001, ()=> {
console.log("server is successfully listening on port 3001");

});