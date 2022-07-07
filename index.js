const express = require("express");
const fs = require('fs');
const { stringify } = require("querystring");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));


app.get("/text", (req, res) => {
    const args = process.argv.slice(2);
    let txt= args[0];
    let contents = fs.readFileSync("example.txt");
    contents = contents.toString();
    console.log(contents, txt);
    const result = contents.includes(txt);
    res.send(result);

});


app.listen(3000, () => console.log("Server started"));
