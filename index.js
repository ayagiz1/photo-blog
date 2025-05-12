const express =  require("express");

const app = express(); // req res kontrol ettigimiz uygulama olusturduk

const path = require("path");

app.use("/articles", function(req, res) {
    res.sendFile(path.join(__dirname, "Pages/HTML", "articles.html"))
});

app.use("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "Pages/HTML", "contact.html"))
});

app.use("/", function(req, res) {
    console.log("__dirname");
    console.log("__filename");
    res.sendFile(path.join(__dirname, "Pages/HTML", "index.html"))
});

app.listen(3000, function(){  // aktif porttaki requestleri alabilmek icin 3000 portunu dinliyoruz
    console.log("Listening on port 3000");  //Gelen reqlere sonra res gonderecegiz.
})

