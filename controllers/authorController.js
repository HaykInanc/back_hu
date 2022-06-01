const {Author} = require('../models/models');

class AuthorController {

    async create(req, res){
        const {name, lastname} = req.body;
        const author = await Author.create({name, lastname});
        return res.send(author)
    }

    async getOne(req, res){
        const {id} = req.query;
        const author = await Author.findByPk(id) || {message: 'user is not defined'};
        return res.send(author)
    }

    async del(req, res) { 
        const { id } = req.query; 
        const cnt = await Author.destroy({ where: { id } }); 
        return res.send({message: `${cnt} rows was deleted. `}) ;
    }

    async getAll(req, res){
        const authors = await Author.findAll();
        return res.send(authors)
    }
}

module.exports = new AuthorController();