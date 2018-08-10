import Read from '../interface/read';
import Write from '../interface/write';
import {knex as db} from './databaseConnection';
import Tipo from '../../entities/Tipo'
const table = 'tipos_cafe';
export default class RepositoryTiposCafe implements Read<Tipo>, Write<Tipo> {
    
    writeInsert(name: String): Promise<Tipo> {
        return db.insert({name: name}).into(table);
    }

    writeDelete( id: number): Promise<Tipo> {
        return db(table).where({id: id}).del();
    }

    writeUpdate(id: number, name: String): Promise<Tipo> {
        return db(table).where({ id: id }).update({
            name: name
        });
    }

    find(): Promise<Tipo[]> {
        return db.select().from(table);
    }

    findOne(id: number): Promise<Tipo> {
        return db.select().from(table).where({ id: id });
    
    }

}