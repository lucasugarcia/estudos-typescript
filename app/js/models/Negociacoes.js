class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        // Programação defensiva para não permitir que nenhuma atribuição desnecessária modifique 
        // a lista original de negociações.
        return [].concat(this._negociacoes);
    }
}
