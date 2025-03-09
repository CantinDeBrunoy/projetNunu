const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();

app.use(express.json());

const SECRET_KEY = "supersecretkey";
const VALID_EMAIL = "user@example.com";
const VALID_PASSWORD = "pswd";

app.get("/", (req, res) => {
  res.send("Projet Cloud - Back-end is running !");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("Email reçu:", email, "Mot de passe reçu:", password);

  if (email === VALID_EMAIL && password === VALID_PASSWORD) {
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
    return res.json({ message: "Connexion réussie", token, user: { email } });
  }

  res.status(401).json({ error: "Identifiants invalides" });
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () =>
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`)
);
