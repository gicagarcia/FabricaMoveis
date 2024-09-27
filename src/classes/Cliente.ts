import { Cadeira } from '../classes/Cadeira';
import { Sofa } from '../classes/Sofa';
import { FabricaMoveis } from '../factories/FabricaMoveis';
import { MesaCentro } from './MesaCentro';

export class Cliente {
    fabrica: FabricaMoveis;
    cadeiras: Cadeira[] = [];
    sofas: Sofa[] = [];
    mesas: MesaCentro[] = [];


    constructor(fabrica: FabricaMoveis) {
        this.fabrica = fabrica;
    }

    adicionarCadeira(cor: string, material: string, preco: number, alturaEncosto: number): void {
        const cadeira = this.fabrica.criarCadeira(cor, material, preco, alturaEncosto);
        this.cadeiras.push(cadeira);
        console.log(`Adicionada: ${cadeira.descricao()}`);
    }

    adicionarSofa(cor: string, material: string, preco: number, lugares: number): void {
        const sofa = this.fabrica.criarSofa(cor, material, preco, lugares);
        this.sofas.push(sofa);
        console.log(`Adicionado: ${sofa.descricao()}`);
    }

    adicionarMesa(cor: string, material: string, preco: number, corMadeira: string): void {
        const mesa = this.fabrica.criarMesaCentro(cor, material, preco, corMadeira);
        this.mesas.push(mesa);
        console.log(`Adicionado: ${mesa.descricao()}`);
    }

    mostrarComposicao(): void {
        console.log("Cadeiras:");
        this.cadeiras.forEach((cadeira, index) => {
            console.log(`${index + 1}: ${cadeira.descricao()}`);
        })

        console.log("Sofás:");
        this.sofas.forEach((sofa, index) => {
            console.log(`${index + 1}: ${sofa.descricao()}`);
        })

        console.log("Mesas de centro:");
        this.mesas.forEach((mesa, index) => {
            console.log(`${index + 1}: ${mesa.descricao()}`);
        })
    }
}
