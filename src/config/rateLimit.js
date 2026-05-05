import rateLimit from 'express-rate-limit';

// ========= Configurando limites globais ========= 

export const limitadorGlobal = rateLimit({
    windowMs: 15*60*1000, // Janela de tempo para fazer algo
    max: 200, // Numero maximo de req por IP
    message: {
        erro: 'Muitas requisições por minuto'
    },
    standardHeaders: true, // Envia RateLimit-* nos headers
    legacyHeaders: false // desativa o X-RateLimit-* antigo
});