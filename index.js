const express =  require("express");

const app = express(); // req res kontrol ettigimiz uygulama olusturduk

app.listen(3000, function(){  // aktif porttaki requestleri alabilmek icin 3000 portunu dinliyoruz
    console.log("Listening on port 3000");  //Gelen reqlere sonra res gonderecegiz.
})

app.use(function(req, res){  // herhangi bir req istegi icin res gonderiyoruz
    res.end(`Hello World`);
});