class Negociacao {

    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    calculaVolume() {
        return  this._quantidade * this._valor;
    }

    static getVolume(){
        return this._volume;
    }

    static getQuantidade(){
        return this._quantidade;
    }

    static getValor(){
        return this._valor;
    }

    static getValor(){
        return this._valor;
    }
}