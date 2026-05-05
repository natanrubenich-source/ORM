
export const corsConfig = {
  origin: '*', // O ideal seria ele estar no .env (quando se tem uma origem)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}