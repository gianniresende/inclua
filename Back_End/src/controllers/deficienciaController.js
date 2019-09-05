const Def = require('../models/deficiencia');

module.exports = {
    async store(req, res) {
        try {
            const dados = req.body;
            const def = await Def.create(dados);
            return res.status(201).json(def);
        }
        catch (error) {
            console.log(error);
        }
        
    },
    // Retorna lista com todas as deficiências ordenadas pelo grupo pertencente.
    async getByGroup(req,res) {
        try {
            const data = await Def.find({});
            data.sort(function (def1, def2) {
                if (def1.grupoPertencente > def2.grupoPertencente) {
                    return 1;
                }
                if (def1.grupoPertencente < def2.grupoPertencente) {
                    return -1;
                }
                return 0;
            })
            return res.status(200).json(data);
        }
        catch (error) {
            console.error(error);
        }
    },
    // Lista todas as deficiencias por nome e/ou caracteristicas
    async search(req, res) {
        try {
            const nomeInformado = req.query.nome.toLowerCase();
            const caractInformada = req.query.caract;
            const defs = await Def.find({
                $or: [
                    { nome: { $eq: nomeInformado}},
                    { caracteristicas: {$in: caractInformada}}
                ],
            })
            return res.status(200).json(defs);
        }
        catch (error) {
            console.log(error);
        }
    },
    async addEspecialista(req,res) {
        try {
            const {nomeDeficiencia, informacao: info} = req.body;
            nomeDeficiencia.toLowerCase();
            await Def.update({ nome: nomeDeficiencia}, { $push: {especialistas: info}});
            res.status(200).send("sucesso");
        }
        catch(error) {
            console.log(error);
        }
    },
    async addAssociacao(req,res) {
        try {
            const {nomeDeficiencia, informacao: info} = req.body;
            nomeDeficiencia.toLowerCase();
            await Def.update({ nome: nomeDeficiencia}, { $push: {associacoes: info}});
            res.status(200).send("sucesso");
        }
        catch(error) {
            console.log(error);
        }
    }
};