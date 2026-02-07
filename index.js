const express = require("express");
const app = express();

app.get("/api/DatosGenerales", (req, res) => {
  res.json({
    nombre: "Marco Fernando Cruz Mendoza",
    album_favorito: "Blurryface"
  });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
