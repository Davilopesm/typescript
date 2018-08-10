import apiRoute from '../../repositories/base/RepositoryCapsula';
import express = require('express');
const router = express.Router();
var repository: apiRoute<any> = new apiRoute();

router.get('/:id', async (req, res) => {
  repository.find(req.params.id).then((data:any) => {
    res.send(data);
  });
});


router.post('/', async (req, res) => {
  repository.writeInsert(req.body.name, req.body.instrucoes_preparo, req.body.tempo_preparo, req.body.id_tipo).then(() => {
    res.send("Inserido com sucesso");
  });
});


router.put('/:id', async (req, res) => {
  repository.writeUpdate(req.params.id, req.body.name, req.body.instrucoes_preparo, req.body.tempo_preparo).then(() => {
    res.send("Atualizado com sucesso");
  });
});

router.delete('/:id', async (req, res) => {
  repository.writeDelete(req.params.id).then(() => {
    res.send("Deletado com sucesso");
  })
})

		

export default router;