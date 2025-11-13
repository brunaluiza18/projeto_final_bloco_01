import { Planta } from "../model/Planta";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class PlantaController implements ProdutoRepository {
    criar(produto: any): void {
        throw new Error("Method not implemented.");
    }
    listarTodos(): void {
        throw new Error("Method not implemented.");
    }
    private listaPlantas: Planta[] = [];

    cadastrar(planta: Planta): void {
        this.listaPlantas.push(planta);
        console.log(`✅ Planta ${planta.nome} cadastrada com sucesso!`);
    }

    listarTodas(): void {
        if (this.listaPlantas.length === 0) {
            console.log("Nenhuma planta cadastrada.");
            return;
        }
        this.listaPlantas.forEach(planta => planta.visualizar());
    }

    procurarPorId(id: number): void {
        const planta = this.listaPlantas.find(p => p.id === id);
        if (planta) planta.visualizar();
        else console.log("Planta não encontrada!");
    }

    atualizar(plantaAtualizada: Planta): void {
        const index = this.listaPlantas.findIndex(p => p.id === plantaAtualizada.id);
        if (index !== -1) {
            this.listaPlantas[index] = plantaAtualizada;
            console.log("🌿 Planta atualizada com sucesso!");
        } else {
            console.log("Planta não encontrada!");
        }
    }

    deletar(id: number): void {
        const index = this.listaPlantas.findIndex(p => p.id === id);
        if (index !== -1) {
            this.listaPlantas.splice(index, 1);
            console.log("🗑️ Planta excluída com sucesso!");
        } else {
            console.log("Planta não encontrada!");
        }
    }
}
