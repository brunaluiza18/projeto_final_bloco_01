import { Planta } from "../model/Planta";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class PlantaController implements ProdutoRepository {
    
    private listaPlantas: Planta[] = [];
    private contador: number = 0;

    // Criar produto
    criar(produto: Planta): void {
        this.contador++;
        produto.id = this.contador;
        this.listaPlantas.push(produto);
        console.log("\n✅ Planta cadastrada com sucesso!");
    }

    // Listar todos
    listarTodos(): void {
        if (this.listaPlantas.length === 0) {
            console.log("\n⚠️ Nenhuma planta cadastrada.");
            return;
        }

        this.listaPlantas.forEach(planta => planta.visualizar());
    }

    // Atualizar produto
    atualizar(produto: Planta): void {
        const index = this.listaPlantas.findIndex(p => p.id === produto.id);
        if (index !== -1) {
            this.listaPlantas[index] = produto;
            console.log("\n✅ Planta atualizada com sucesso!");
        } else {
            console.log("\n❌ Planta não encontrada!");
        }
    }

    // Deletar produto
    deletar(id: number): void {
        const index = this.listaPlantas.findIndex(p => p.id === id);
        if (index !== -1) {
            this.listaPlantas.splice(index, 1);
            console.log("\n🗑️ Planta excluída com sucesso!");
        } else {
            console.log("\n❌ Planta não encontrada!");
        }
    }
}
