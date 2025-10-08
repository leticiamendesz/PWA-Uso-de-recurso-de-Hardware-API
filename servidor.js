// servidor.js
import express from "express";
import cors from "cors";

const DescubraoPais = express();
app.use(express.json());
app.use(cors());

// Rota de voz/texto
app.post("/identify/text", (req, res) => {
  const { text } = req.body;
  let country = "Desconhecido";

  const lower = text.toLowerCase();
  if(lower.includes("japão") || lower.includes("japao")) country = "Japão";
  if(lower.includes("brasil")) country = "Brasil";

  res.json({ country });
});

// Rota de imagem (usa nome do arquivo)
app.post("/identify/image", (req, res) => {
  const { fileName } = req.body;
  let country = "Desconhecido";

  const name = fileName.toLowerCase();
  if(name.includes("japao") || name.includes("japan")) country = "Japão";
  if(name.includes("brasil") || name.includes("rio")) country = "Brasil";

  res.json({ country });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
// servidor.js
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// Rota de voz/texto
app.post("/identify/text", (req, res) => {
  const { text } = req.body;
  let country = "Desconhecido";

  const lower = text.toLowerCase();
  if(lower.includes("japão") || lower.includes("japao")) country = "Japão";
  if(lower.includes("brasil")) country = "Brasil";

  res.json({ country });
});

// Rota de imagem (usa nome do arquivo)
app.post("/identify/image", (req, res) => {
  const { fileName } = req.body;
  let country = "Desconhecido";

  const name = fileName.toLowerCase();
  if(name.includes("japao") || name.includes("japan")) country = "Japão";
  if(name.includes("brasil") || name.includes("rio")) country = "Brasil";

  res.json({ country });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
