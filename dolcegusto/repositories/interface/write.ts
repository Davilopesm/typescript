export default interface Write<T>{
    writeInsert(name: String, instrucoesPreparo: String, tempoPreparo: String, id_tipo: number): Promise<T>; 
    writeDelete(id: number): Promise<T>;
    writeUpdate(id: number, name: String, instrucoesPreparo: String, tempoPreparo: String): Promise<T>;
}