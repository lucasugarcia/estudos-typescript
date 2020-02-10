import { Negociacao } from './Negociacao';

export class Negociacoes {

    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void{
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[]{
        // Programação defensiva para não permitir que nenhuma atribuição desnecessária modifique 
        // a lista original de negociações.
        return [].concat(this._negociacoes);
    }
}