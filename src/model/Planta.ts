import { Produto } from "./Produto"

export class Planta extends Produto {
    private _tipo: string // ex: suculenta, flor, erva

    constructor(id: number, nome: string, preco: number, quantidade: number, tipo: string) {
        super(id, nome, preco, quantidade)
        this._tipo = tipo
    }

    public get tipo(): string {
        return this._tipo
    }

    public set tipo(value: string) {
        this._tipo = value
    }

    public visualizar(): void {
        console.log("\n------------------------------")
        console.log(`ID: ${this.id}`)
        console.log(`Nome: ${this.nome}`)
        console.log(`Preço: R$${this.preco.toFixed(2)}`)
        console.log(`Quantidade: ${this.quantidade}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log("------------------------------")
    }
}
