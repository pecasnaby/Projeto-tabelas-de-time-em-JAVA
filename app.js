import tabela from "./tabela.js";
import express from "express";

const app = express();

app.get("/", (requisicao, resposta) => {
  resposta.status(200).send(tabela);
});

app.get("/:sigla", (requisicao, resposta) => {
  const siglaInformada = requisicao.params.sigla.toUpperCase();
  const time = tabela.find((infoTime) => infoTime.sigla === siglaInformada);
  resposta.status(200).send(time);
});

app.listen(300, () => console.log("servidor rodando com sucesso"));
