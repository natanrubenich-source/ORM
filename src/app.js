import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import sequelize from './database/db.js';
import { helmetConfig } from './config/hemlt.js'
import routerUser from './router/user.router.js';
import { limitadorGlobal } from './config/rateLimit.js';
import { corsConfig } from './config/cors.js';

// Importar model para garantir regristro no squelize;
import './model/user.model.js';

const app = express();

// Configurando api
app.use(express.json());
app.use(cors(corsConfig));
app.use(helmetConfig);
app.use(limitadorGlobal);

app.use('/users', routerUser);


sequelize.sync({ alter: true }).then( 
    ()=>{
        app.listen(process.env.API_PORT, ()=>{
            console.log(`Server rodando em localhost:${process.env.API_PORT}`);
        });
}).catch(err => console.log("Erro ao sicronizar ou iniciar o server: ", err));