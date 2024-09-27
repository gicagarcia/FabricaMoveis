import { FabricaMoveis } from './FabricaMoveis';
import { Cadeira } from '../classes/Cadeira';
import { Sofa } from '../classes/Sofa';
import { MesaCentro } from '../classes/MesaCentro';

export class FabricaMoveisVitoriano extends FabricaMoveis {
    constructor() {
        super("Vitoriano");
    }

    criarCadeira(cor: string, material: string, preco: number, alturaEncosto: number): Cadeira {
        return new Cadeira(this.estilo, cor, material, preco, alturaEncosto);
    }

    criarSofa(cor: string, material: string, preco: number, lugares: number): Sofa {
        return new Sofa(this.estilo, cor, material, preco, lugares);
    }

    criarMesaCentro(cor: string, material: string, preco: number, corMadeira: string): MesaCentro{
        return new MesaCentro(this.estilo, cor, material, preco, corMadeira)
    }
}
