 
import { Movel } from './Movel';

export class Sofa extends Movel {
    lugares: number;

    constructor(estilo: string, cor: string, material: string, preco: number, lugares: number) {
        super(estilo, cor, material, preco);
        this.lugares = lugares;
    }

    descricao(): string {
        return `Sofá estilo ${this.estilo} com ${this.lugares} lugares.`;
    }

    calcularDesconto(taxa: number): number {
        return this.preco - this.preco * taxa;
    }
}
