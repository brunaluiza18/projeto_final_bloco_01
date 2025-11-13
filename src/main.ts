import promptSync from "prompt-sync";
import { PlantaController } from "./controller/PlantaController";
import { Planta } from "./model/Planta";

const teclado = promptSync();
const produtoController = new PlantaController();

function main() {
    let opcao: number;

    do {
        console.log("\n===================================");
        console.log(" 🌿 BEM-VINDO AO VERDE VIVO SHOP 🌿");
        console.log("===================================");
        console.log("1 - Cadastrar Planta");
        console.log("2 - Listar todas as Plantas");
        console.log("3 - Buscar Planta por ID");
        console.log("4 - Atualizar Planta");
        console.log("5 - Excluir Planta");
        console.log("0 - Sair");
        console.log("===================================");

        opcao = Number(teclado("Digite a opção desejada: "));

        switch (opcao) {
            case 1:
                console.log("\nCadastrar nova Planta\n");

                let id = Number(teclado("Digite o ID: "));
                let nome = teclado("Digite o nome da planta: ");
                let preco = Number(teclado("Digite o preço: "));
                let quantidade = Number(teclado("Digite a quantidade: "));
                let tipo = teclado("Digite o tipo (ex: folhagem, flor, suculenta): ");

                const novaPlanta = new Planta(id, nome, preco, quantidade, tipo);
                produtoController.cadastrar(novaPlanta);

                break;

            case 2:
                console.log("\nListando todas as Plantas:\n");
                produtoController.listarTodas();
                break;

            case 3:
                console.log("\nBuscar Planta por ID\n");
                let buscaId = Number(teclado("Digite o ID da planta: "));
                produtoController.procurarPorId(buscaId);
                break;

            case 4:
                console.log("\nAtualizar Planta\n");
                let idAtualizar = Number(teclado("Digite o ID da planta que deseja atualizar: "));
                let nomeNovo = teclado("Novo nome: ");
                let precoNovo = Number(teclado("Novo preço: "));
                let quantidadeNova = Number(teclado("Nova quantidade: "));
                let tipoNovo = teclado("Novo tipo: ");

                const plantaAtualizada = new Planta(idAtualizar, nomeNovo, precoNovo, quantidadeNova, tipoNovo);
                produtoController.atualizar(plantaAtualizada);
                break;

            case 5:
                console.log("\nExcluir Planta\n");
                let idExcluir = Number(teclado("Digite o ID da planta que deseja excluir: "));
                produtoController.deletar(idExcluir);
                break;

            case 0:
                console.log("\n🌸 Obrigado por visitar o Verde Vivo Shop!");
                break;

            default:
                console.log("\n❌ Opção inválida! Tente novamente.");
                break;
        }

    } while (opcao !== 0);
}

main();
