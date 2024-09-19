 
export abstract class Movel {
    estilo: string;
    cor: string;
    material: string;
    preco: number;

    constructor(estilo: string, cor: string, material: string, preco: number) {
        this.estilo = estilo;
        this.cor = cor;
        this.material = material;
        this.preco = preco;
    }

    abstract descricao(): string;
    abstract calcularDesconto(taxa: number): number;
}
