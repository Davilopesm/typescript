import Read from '../interface/read';
import Write from '../interface/write';
import {knex as db} from './databaseConnection';
const table = 'capsulas';
  

export default class RepositoryCapsulas<T> implements Read<T>, Write<T> {
    
    writeInsert(name: String, instrucoesPreparo: String, tempoPreparo: String): Promise<T> {
        return db.insert({name: name, instrucoes_preparo: instrucoesPreparo, tempo_preparo: tempoPreparo}).into(table);
    }

    writeDelete(id:number): Promise<T> {
        return db(table).where({id: id}).del();
    }

    writeUpdate(id: number,  name: String, instrucoesPreparo: String, tempoPreparo: String): Promise<T> {
        return db(table).where({ id: id }).update({
            name: name || null,
            instrucoes_preparo: instrucoesPreparo || null,
            tempo_preparo: tempoPreparo || null
        });
    }

    find(idTipo: number): Promise<T[]> {
        return db.select('id', 'name').from(table).where({ id_tipo: idTipo });
    }
    
    findOne(id: number): Promise<T> {
        return db.select().from(table).where({ name: name });	
    }

}