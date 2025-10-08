// servidor.js
import express from "express";
import cors from "cors";
import fetch from "node-fetch"; // precisa instalar: npm install node-fetch

const app = express();
app.use(express.json());
app.use(cors());

// Função para buscar dados na REST Countries API
async function getCountryData(name) {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(name)}?fullText=false`);
    const data = await response.json();
    if(data.status === 404) return null; // país não encontrado
    return data[0];
  } catch (err) {
    console.error(err);
    return null;
  }
}

// Rota de texto/voz
app.post("/identify/text", async (req, res) => {
  const { text } = req.body;
  const countryData = await getCountryData(text);

  if(!countryData) {
    return res.json({ error: "País não encontrado" });
  }

  res.json({
    name: countryData.name.common,
    officialName: countryData.name.official,
    capital: countryData.capital ? countryData.capital[0] : "Desconhecida",
    region: countryData.region,
    flag: countryData.flags.png
  });
});

// Rota de foto (apenas nome do arquivo)
app.post("/identify/image", async (req, res) => {
  const { fileName } = req.body;
  // tenta extrair país do nome do arquivo
  const name = fileName.split(".")[0]; 
  const countryData = await getCountryData(name);

  if(!countryData) {
    return res.json({ error: "País não encontrado" });
  }

  res.json({
    name: countryData.name.common,
    officialName: countryData.name.official,
    capital: countryData.capital ? countryData.capital[0] : "Desconhecida",
    region: countryData.region,
    flag: countryData.flags.png
  });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
