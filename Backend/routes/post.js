const express = require('express');
const router = express.Router();
const { Postagens } = require('../models');
const sha256 = require('js-sha256');
const verifyJWT = require('../middlewares/auth');

router.post('/', async (req, res) => {
    const users = await User.create({
        post: req.params.post
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
    res.status(200).json(`Post deletado com sucesso!`)
});

module.exports = router;