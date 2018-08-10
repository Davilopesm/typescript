import Read from '../interface/read';
import Write from '../interface/write';
import {knex as db} from './databaseConnection';
import Capsula from '../../entities/Capsula'
const table = 'capsulas';
  

export default class RepositoryCapsulas implements Read<Capsula>, Write<Capsula> {
    
    writeInsert(name: String, instrucoesPreparo: String, tempoPreparo: String): Promise<Capsula> {
        return db.insert({name: name, instrucoes_preparo: instrucoesPreparo, tempo_preparo: tempoPreparo}).into(table);
    }

    writeDelete(id:number): Promise<Capsula> {
        return db(table).where({id: id}).del();
    }

    writeUpdate(id: number,  name: String, instrucoesPreparo: String, tempoPreparo: String): Promise<Capsula> {
        return db(table).where({ id: id }).update({
            name: name,
            instrucoes_preparo: instrucoesPreparo,
            tempo_preparo: tempoPreparo
        });
    }

    find(idTipo: number): Promise<Capsula[]> {
        return db.select('id', 'name').from(table).where({ id_tipo: idTipo });
    }
    
    findOne(id: number): Promise<Capsula> {
        return db.select().from(table).where({ name: name });	
    }

}