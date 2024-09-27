 
import { FabricaMoveis } from '../factories/FabricaMoveis';

export class ComposicaoCliente {
    fabrica: FabricaMoveis;

    constructor(fabrica: FabricaMoveis) {
        this.fabrica = fabrica;
    }

    criarConjuntoMoveis() {
        const cadeira = this.fabrica.criarCadeira();
        const sofa = this.fabrica.criarSofa();
        console.log(cadeira.descricao());
        console.log(sofa.descricao());
    }
}
