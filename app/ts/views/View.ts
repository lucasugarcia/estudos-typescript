export abstract class View<T> {
    private _elemento: JQuery;

    constructor(seletor: string) {
        this._elemento = $(seletor);
    }

    abstract template(model: T): string;

    update(model: T): void {
        this._elemento.html(this.template(model));
    }
}