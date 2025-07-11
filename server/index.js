    import express, { json } from 'express';
    import cors from 'cors';
    const app = express()

    import BreakOration from './functions/Analysy.js';

    app.use(cors()) //conexão com front end
    app.use(express.json()) //uso do json

    //function and methods

    app.post('/api/doAnalysis', (req, res) => {
        
    })

app.listen(3000, () => {
  console.log(' Servidor rodando em http://localhost:3000');
});