const express =require('express');

const app = express();

app.use((req,res) => {
    res.send("hello from the server!");
});

app.listen(3001, ()=> {
console.log("server is successfully listening on port 3001");

});