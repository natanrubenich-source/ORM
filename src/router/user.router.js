import { Router } from 'express';
import * as controller from '../controller/user.controller.js'

const routerUser = Router();

// Criar as rotas
routerUser.get('/', controller.getAllUsers);

export default routerUser;