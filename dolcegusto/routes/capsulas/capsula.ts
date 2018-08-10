import apiRoute from '../../repositories/base/RepositoryCapsula';
import express = require('express');
import validator from './validatorCapsula';
const router = express.Router();
var repository: apiRoute = new apiRoute();

router.get('/:id', validator.getCapsula, async (req, res) => {
  repository.find(req.params.id).then((data:any) => {
    res.send(data);
  });
});

router.post('/', validator.postCapsula, async (req, res) => {
  repository.writeInsert(req.body.name, req.body.instrucoes_preparo, req.body.tempo_preparo, req.body.id_tipo).then(() => {
    res.send("Inserido com sucesso");
  });
});

router.put('/:id', validator.putCapsula, async (req, res) => {
  repository.writeUpdate(req.params.id, req.body.name, req.body.instrucoes_preparo, req.body.tempo_preparo).then(() => {
    res.send("Atualizado com sucesso");
  });
});

router.delete('/:id', validator.deleteCapsula, async (req, res) => {
  repository.writeDelete(req.params.id).then(() => {
    res.send("Deletado com sucesso");
  })
})

		

export default router;