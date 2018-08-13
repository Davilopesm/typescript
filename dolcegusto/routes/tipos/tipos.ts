import apiRoute from '../../repositories/base/RepositoryTiposCafe';
import express = require('express');
import validator from './validatorTipo';
const router = express.Router();
var teste: apiRoute = new apiRoute();

router.get('/', async (req, res) => {
  teste.find().then((data:any) => {
    res.send(data);
  });
});

router.get('/:id', validator.getTipo, async (req, res) => {
	teste.findOne(req.params.id).then((data: any) => {
		res.send(data);
	}).catch((err) => {
   throw new Error(err.message);
  });
});

router.post('/', validator.postCapsula, async (req, res) => {
  teste.writeInsert(req.body.name).then(() => {
    res.send("Adicionado com sucesso");
  });
});

router.patch('/:id', validator.putCapsula, async (req, res) => {
  teste.writeUpdate(req.params.id, req.body.name).then(() => {
    res.send("Atualizado com sucesso");
  })
})

router.put('/:id', validator.putCapsula, async (req, res) => {
  teste.writeUpdate(req.params.id, req.body.name).then(() => {
    res.send("Atualizado com sucesso");
  });
});

router.delete('/:id', validator.deleteCapsula, async (req, res) => {
  teste.writeDelete(req.params.id).then(() => {
    res.send("Deletado com sucesso");
  });
});

		

export default router;