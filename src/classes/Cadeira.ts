 
import { Movel } from './Movel';

export class Cadeira extends Movel {
    alturaEncosto: number;

    constructor(estilo: string, cor: string, material: string, preco: number, alturaEncosto: number) {
        super(estilo, cor, material, preco);
        this.alturaEncosto = alturaEncosto;
    }

    descricao(): string {
        return `Cadeira estilo ${this.estilo} com encosto de ${this.alturaEncosto} cm.`;
    }

    calcularDesconto(taxa: number): number {
        return this.preco - this.preco * taxa;
    }
}
