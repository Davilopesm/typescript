import Read from '../interface/read';
import Write from '../interface/write';
import {knex as db} from './databaseConnection';
const table = 'tipos_cafe';
export default class RepositoryTiposCafe<T> implements Read<T>, Write<T> {
    
    writeInsert(name: String): Promise<T> {
        return db.insert({name: name}).into(table);
    }

    writeDelete( id: number): Promise<T> {
        return db(table).where({id: id}).del();
    }

    writeUpdate(id: number, name: String): Promise<T> {
        return db(table).where({ id: id }).update({
            name: name || null
        });
    }

    find(): Promise<T[]> {
        return db.select().from(table);
    }

    findOne(id: number): Promise<T> {
        return db.select().from(table).where({ id: id });	
    }

}