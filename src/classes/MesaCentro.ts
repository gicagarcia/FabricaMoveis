 
import { Movel } from './Movel';

export class MesaCentro extends Movel {
    corMadeira: string;

    constructor(estilo: string, cor: string, material: string, preco: number, corMadeira: string) {
        super(estilo, cor, material, preco);
        this.corMadeira = corMadeira;
    }

    descricao(): string {
        return `Mesa de centro estilo ${this.estilo} com madeira da cor ${this.corMadeira}.`;
    }

    calcularDesconto(taxa: number): number {
        return this.preco - this.preco * taxa;
    }
}
