export interface ProdutoRepository {
    criar(produto: any): void
    listarTodos(): void
    atualizar(produto: any): void
    deletar(id: number): void
}
