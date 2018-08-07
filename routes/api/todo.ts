import express = require('express');
import { Request, Response} from 'express';
const router = express.Router();
import {knex as db} from '../../database/databaseConnection';

router.get('/', (req: Request, res: Response) => {
	db.select().from('todo').then((data: any) => {
		res.send(data);
	});
	//orderById('id') = ordenar ordem crescente
});

router.get('/:id', (req: Request, res: Response) => {
	db.select().from('todo').where({ id: req.params.id })
	.then((data:any) => {
		res.send(data);
	});
});

router.post('/', (req:Request, res: Response) => {
	db.insert(req.body).returning('*').into('todo')
	.then((data: any) => {
		res.send(data);
	});
});

router.patch('/:id', (req: Request, res: Response) => {
	db('todo').where({ id: req.params.id}).update(req.body).returning('*')
	.then((data:any) => {
		res.send(data);
	});
});

router.put('/:id', (req: Request, res: Response) => {
	db('todo').where({ id: req.params.id}).update({
		title:	req.body.title || null,
		is_done: req.body.is_done || null
	}).returning('*')
	.then((data:any) => {
		res.send(data);
	});
});

router.delete('/:id', (req: Request, res: Response) => {
	db('todo').where({ id: req.params.id }).del()
	.then((data: any) => {
		res.send("Sucesso!!");
	});
});




export { router };