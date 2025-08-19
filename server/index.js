import express, { json } from 'express'
import cors from 'cors';
const app = express()

import BreakOration from './functions/Analysy.js';
const verbs = require('./data/verbs_terminations.json');

app.use(cors())

app.use(express.json()) 

app.post('/api/doAnalysis', (req, res) => {

  const dataString = req.body;

  const arraysOfOrations = BreakOration(dataString)

  if((arraysOfOrations)){

    res.status(200).send(arraysOfOrations)

  }else{

    res.status(500).send("Ocorreu um erro no servidor...")

  }

  //base de dados de verbos:

  //verifica se tem verbos


        
})

app.listen(3000, () => {
  console.log(' Servidor rodando em http://localhost:3000');
});