// ARQUIVO: testes.ts

import { PlantaController } from "./src/controller/PlantaController";
import { Planta } from "./src/model/Planta";

const ctrl = new PlantaController();

const p1 = new Planta(0, "Samambaia", 35.9, 5, "Folhagem");
const p2 = new Planta(0, "Cacto", 20.0, 10, "Suculenta");
const p3 = new Planta(0, "Orquídea", 80.0, 2, "Flor");
const p4 = new Planta(0, "Bonsai", 120.0, 1, "Árvore");
const p5 = new Planta(0, "Lírio-da-paz", 45.0, 4, "Flor");
const p6 = new Planta(0, "Espada-de-São-Jorge", 30.0, 6, "Fitorremédio");
const p7 = new Planta(0, "Jiboia", 50.0, 3, "Trepadeira");

// Usar cadastrar() em vez de criar()
ctrl.cadastrar(p1);
ctrl.cadastrar(p2);
ctrl.cadastrar(p3);
ctrl.cadastrar(p4);
ctrl.cadastrar(p5);
ctrl.cadastrar(p6);
ctrl.cadastrar(p7);

// Listar todas (listarTodas() em vez de listarTodos())
console.log("\n--- LISTA INICIAL ---");
ctrl.listarTodas();

// Buscar e atualizar
const achada = ctrl['listaPlantas'].find(p => p.id === 3); // acessar listaPlantas diretamente

if (achada) {
    console.log("\n--- Achou a planta ID 3 ---");
    achada.visualizar();

    achada.nome = "Orquídea Pink";
    achada.preco = 85.0;
    ctrl.atualizar(achada);
} else {
    console.log("\n❌ Planta ID 3 não encontrada.");
}

// Listar novamente
console.log("\n--- LISTA APÓS ATUALIZAÇÃO ---");
ctrl.listarTodas();

// Deletar
ctrl.deletar(2);

console.log("\n--- LISTA APÓS DELETAR ID 2 ---");
ctrl.listarTodas();
