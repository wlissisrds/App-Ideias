const express = require("express");
const app = express();

//AÇOES GLOBAIS DEVEM VIR NO COMEÇO
app.use(logger)

//É POSSIVEL PASSAR MAIS DE UMA MIDDLEWARE
// app.get("/", auth, (req, res, next) => {
//     console.log("home page");
//     res.send("home page");
// })

app.get("/user", (req, res) => {
    console.log("user page")
    res.send("user page");
})

//se colocar aqui é preciso chamar com next na middlware
// app.use(logger);

function logger(req, res, next) {
    //chama o proximo middleware antes de terminar a função
    //depois volta pra ela e executa se voce nao colocar um RETRUN;
    next();
    console.log("logger");
}



// function auth(req, res, next) {
//     if (req.query.admin === "true") {
//         req.admin = true;
//         next();
//     }
//     else {
//         res.send("No auth")
//     }
// }


app.listen("3000");