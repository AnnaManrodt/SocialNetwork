const { User } = require('../models/index.js');

module.exports = {

    async getUser(req, res) {
        try {
            const user = await User.find().populate('friends').populate('thoughts');
            res.json(user);
        }
        catch (err) {
            res.status(500).send(err.stack);
        }
    },


    async getOneUser(req, res) {
        try {
            const user = await User.findOne({ _id: [req.params.id] }).populate('friends').populate('thoughts');
            res.json(user);
        }
        catch (err) {
            res.status(500).send(err.stack);
        }
    },

    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        }
        catch (err) {
            console.log(err)
            return res.status(500).send(err.stack);
        }
    },

    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.id },
                { $set: req.body }
            )
        }
        catch (err) {
            res.status(500).send(err.stack);
        }
    },

    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.id });
        }
        catch (err) {
            res.status(500).send(err.stack);
        }
    }
};