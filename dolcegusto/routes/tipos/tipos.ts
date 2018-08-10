import apiRoute from '../../repositories/base/RepositoryTiposCafe';
import express = require('express');
const router = express.Router();
var teste: apiRoute = new apiRoute();

router.get('/', async (req, res) => {
  teste.find().then((data:any) => {
    res.send(data);
  });
});

router.get('/:id', async (req, res) => {
	teste.findOne(req.params.id).then((data: any) => {
		res.send(data);
	});
});

router.post('/', async (req, res) => {
  teste.writeInsert(req.body.name).then(() => {
    res.send("Adicionado com sucesso");
  });
});

router.put('/:id', async (req, res) => {
  teste.writeUpdate(req.params.id, req.body.name).then(() => {
    res.send("Atualizado com sucesso");
  });
});

router.delete('/:id', async (req, res) => {
  teste.writeDelete(req.params.id).then(() => {
    res.send("Deletado com sucesso");
  });
});

		

export default router;