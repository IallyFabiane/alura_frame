class Negociacao {
    #data;
    #quantidade;
    #valor;
    #volume;

    constructor(data, quantidade, valor) {
        this.#data = new Date(data.getTime()); //data inalterável (deep freeze)
        this.#quantidade = quantidade;
        this.#valor = valor;
        Object.freeze(this); //objeto imutável (shallow freeze)
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
        return new Date(this.#data.getTime()); //data inalterável (deep freeze)
    }
}