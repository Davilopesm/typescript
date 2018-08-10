export default class Capsula {
    private id: number;
    private name: String;
    private instrucoesPreparo: String;
    private tempoPreparo: String;
    private idTipo: number;

    constructor(id: number, name: String, instrucoesPreparo: String, tempoPreparo: String, idTipo: number){
        this.id = id;
        this.name = name;
        this.instrucoesPreparo= instrucoesPreparo;
        this.tempoPreparo = tempoPreparo;
        this.idTipo = idTipo;
    }


}