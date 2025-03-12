const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Servidor online!");
});

// Endpoint para receber contatos
app.post("/contatos", (req, res) => {
    const contatos = req.body;
    console.log("Contatos recebidos:", contatos);
    res.status(200).json({ message: "Contatos recebidos com sucesso!" });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
