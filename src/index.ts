import express from "express";
const app = express();
const port = 3000;


// default handler
app.get("/", (req,res)=>{
    res.send("Js To Ts demo")
});





// logs

app.listen(port ,()=>{
    // tslint:disable-next-line:no-console
    console.log(`Application started on port : ${port}`);
})