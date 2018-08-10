import apiRoute from '../../repositories/base/RepositoryCapsulas';
import express = require('express');
const router = express.Router();
var repository: apiRoute = new apiRoute();

router.get('/:idTipo', async (req, res) => {
  repository.find(req.params.idTipo).then((data:any) => {
    res.send(data);
  });
});

/*
router.get('/:table/:name', async (req, res) => {
	repository.findOne(req.params.table, req.params.name).then((data: any) => {
		res.send(data);
	});
});

router.post('/:table', async (req, res) => {
  repository.writeInsert(req.params.table, req.body.name, req.body.instrucoes_preparo, req.body.tempo_preparo).then(() => {
    res.send("Inserido com sucesso");
  });
});

router.put('/:table/:name', async (req, res) => {
  repository.writeUpdate(req.params.table, req.params.name, req.body.name, req.body.instrucoes_preparo, req.body.tempo_preparo).then(() => {
    res.send("Atualizado com sucesso");
  });
});

router.delete('/:id', async (req, res) => {
  repository.writeDelete(req.params.table, req.params.name).then(() => {
    res.send("Deletado com sucesso");
  });
});*/
		

export default router;