class Negociacao {
    #data;
    #quantidade;
    #valor;
    #volume;

    constructor(data, quantidade, valor) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    get volume(){
        return this.#volume =  this.#quantidade * this.#valor;;
    }

    get quantidade(){
        return this.#quantidade;
    }

    get valor(){
        return this.#valor;
    }

    get data(){
        return this.#data;
    }
}