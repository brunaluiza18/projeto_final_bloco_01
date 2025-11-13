import readlineSync from "readline-sync";


let opcao: number;

do {
  console.log("\n🌿🌼 Bem-vindo(a) ao GreenShop 🌼🌿");
  console.log("==================================");
  console.log("1 - Cadastrar Produto");
  console.log("2 - Listar Todos os Produtos");
  console.log("3 - Atualizar Produto");
  console.log("4 - Excluir Produto");
  console.log("0 - Sair");
  console.log("==================================");

  opcao = readlineSync.questionInt("Escolha uma opcao: ");

  switch (opcao) {
    case 1:
      console.log("\n🌱 Cadastrar Produto\n");
      break;
    case 2:
      console.log("\n🍃 Listar Produtos\n");
      break;
    case 3:
      console.log("\n🌸 Atualizar Produto\n");
      break;
    case 4:
      console.log("\n🌺 Excluir Produto\n");
      break;
    case 0:
      console.log("\nEncerrando o sistema... 🌻");
      break;
    default:
      console.log("\n❌ Opcao invalida! Tente novamente.");
  }
} while (opcao !== 0);
