import { FabricaMoveisModerno } from './factories/FabricaMoveisModerno';
import { FabricaMoveisVitoriano } from './factories/FabricaMoveisVitoriano';
import { ComposicaoCliente } from './cliente/ComposicaoCliente';

const cliente1 = new ComposicaoCliente(new FabricaMoveisModerno());
cliente1.criarConjuntoMoveis();

const cliente2 = new ComposicaoCliente(new FabricaMoveisVitoriano());
cliente2.criarConjuntoMoveis();
