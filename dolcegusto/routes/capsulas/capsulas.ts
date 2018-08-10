import apiRoute from '../../repositories/base/RepositoryCapsulas';
import express = require('express');
import validator from './validatorCapsula';
const router = express.Router();
var repository: apiRoute = new apiRoute();

router.get('/:id', validator.getCapsula, async (req, res) => {
  repository.find(req.params.id).then((data:any) => {
    res.send(data);
  });
});

		

export default router;