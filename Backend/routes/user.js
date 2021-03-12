const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
    const users =  await User.findAll();
    res.status(200).json(users);
});


router.get('/:id', async (req, res) => {
    const users = await User.findAll({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(users)
});


router.post('/', async (req, res) => {
    const users = await User.create({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password

    });
    res.status(200).json(users)
});

router.put('/:id', async (req, res) => {
    const users = await User.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    res.status(200).json('Atualizado com sucesso!')
});

router.delete('/:id', async (req, res) => {
    const users = await User.destroy({
        where: {
        id: req.params.id
        }
    });
    res.status(200).json('Usuário deletado com sucesso!')
});

module.exports = router;