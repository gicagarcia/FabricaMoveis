import { Cadeira } from '../classes/Cadeira';
import { MesaCentro } from '../classes/MesaCentro';
import { Sofa } from '../classes/Sofa';

export abstract class FabricaMoveis {
    estilo: string;

    constructor(estilo: string) {
        this.estilo = estilo;
    }

    abstract criarCadeira(cor: string, material: string, preco: number, alturaEncosto: number): Cadeira;
    abstract criarSofa(cor: string, material: string, preco: number, lugares: number): Sofa;
    abstract criarMesaCentro(cor: string, material: string, preco: number, corMadeira: string): MesaCentro;
}
