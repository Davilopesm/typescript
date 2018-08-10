const Joi = require('joi');

export default class Validator {


    public static async getTipo( req: any, res: any, next: any ): Promise<Error> {
        return Joi.validate(
            // Current request
            {
              params: req.params
            },
            // Request schema
            {
              params: Joi.object().keys({
                id: Joi.number().min(1).required()
              }).required()
            })
            .then(() => next())
            .catch((err: any) => next(err));
    }

    public static async postCapsula(req: any, res: any, next: any): Promise<Error> {
        return Joi.validate(
            // Current request
            {
              body: req.body
            },
            // Request schema
            {
              body: Joi.object().keys({
                name: Joi.string().min(4).max(50).required(),
              }).required()
            })
            .then(() => next())
            .catch((err: any) => next(err));    
    }

    public static async putCapsula(req: any, res: any, next: any): Promise<Error> {
        return Joi.validate(
            // Current request
            {
              body: req.body,
              params: req.params
            },
            // Request schema
            {
              body: Joi.object().keys({
                name: Joi.string().min(4).max(50).required()
			    		}).required(),
							params: Joi.object().keys({
                id: Joi.number().min(1).required()
              }).required()
            })
            .then(() => next())
            .catch((err: any) => next(err));    
		}
		

		public static async deleteCapsula( req: any, res: any, next: any ): Promise<Error> {
			return Joi.validate(
					// Current request
					{
						params: req.params
					},
					// Request schema
					{
						params: Joi.object().keys({
							id: Joi.number().min(1).required()
						}).required()
					})
					.then(() => next())
					.catch((err: any) => next(err));
		}


}