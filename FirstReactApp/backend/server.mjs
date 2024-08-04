import express from "express";

console.log("First APDS APP");


//Set the port.
const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/",(reg,res) => {
   res.end("HTTP Server is up and running!")
});

app.get("/test",(reg,res) => {
    res.end("Test app with endpoint!")
 });

app.listen(PORT);