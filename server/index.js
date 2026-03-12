import express, { json } from 'express'
import cors from 'cors';
import verb_term from './data/verbs_terminations.json' assert {type: "json"}  //base de dados de verbos

const app = express()

import BreakOration from './functions/Analysy.js';

app.use(cors())

app.use(express.json()) 

app.post('/api/doAnalysis', (req, res) => {

  const {oration} = req.body;

  if(!oration){
    res.status(400).send("A oração deve ser inserida para a análise...")
  }

  try{

    const arraysOfOrations = BreakOration(oration)

    const lastLeters = arraysOfOrations.map((leters) => {

      if(Array.isArray(leters) == true){

        

      }

    })

    //verifica se tem verbos

    if((arraysOfOrations)){

      res.status(200).json([arraysOfOrations])

    }else{

      res.status(500).send("Oração não encontrada...")

    }
  }catch(err){
    res.status(500).json(`Aqui está um erro interno no servidor ${err}`)
  }

  //verifica se tem verbos


        
})

app.listen(3000, () => {
  console.log(' Servidor rodando em http://localhost:3000');
});