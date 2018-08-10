export default interface Read<T>{
    find(idTipo: number): Promise<T[]>; 
    findOne(id: number): Promise<T>;
}