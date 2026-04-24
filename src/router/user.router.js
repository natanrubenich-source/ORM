import { Router } from 'express';
import * as controller from '../controller/user.controller.js'

const routerUser = Router();

// Criar as rotas
routerUser.get('/', controller.getAllUsers);
routerUser.post('/criar', controller.createUser);

export default routerUser;