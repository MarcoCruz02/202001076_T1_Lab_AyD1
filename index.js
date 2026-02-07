const express = require("express");
const app = express();

app.get("/api/DatosGenerales", (req, res) => {
  res.json({
    nombre: "Marco Fernando Cruz Mendoza",
    cancion_favorita: "We Don't Believe What's on TV - Twenty One Pilots"
  });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
