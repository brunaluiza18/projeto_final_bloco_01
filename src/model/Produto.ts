export abstract class Produto {
    private _id: number
    private _nome: string
    private _preco: number
    private _quantidade: number

    constructor(id: number, nome: string, preco: number, quantidade: number) {
        this._id = id
        this._nome = nome
        this._preco = preco
        this._quantidade = quantidade
    }

    // Getters e Setters
    public get id(): number {
        return this._id
    }

    public set id(value: number) {
        this._id = value
    }

    public get nome(): string {
        return this._nome
    }

    public set nome(value: string) {
        this._nome = value
    }

    public get preco(): number {
        return this._preco
    }

    public set preco(value: number) {
        this._preco = value
    }

    public get quantidade(): number {
        return this._quantidade
    }

    public set quantidade(value: number) {
        this._quantidade = value
    }

    // Método abstrato que será implementado nas classes filhas
    public abstract visualizar(): void
}
