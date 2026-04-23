import { User } from '../model/user.model.js'

export async function getAllUsers(req, res) {
    //Puxando todos os dados da tabela
    try {
        const allUser = await User.findAll();
        console.log(allUser);
        res.status(201).json(allUser);
    } catch (error) {
        res.status(500).json(error);
    }
}