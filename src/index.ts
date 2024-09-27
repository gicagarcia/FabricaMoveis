import { Cliente } from './classes/Cliente';
import { FabricaMoveisModerno } from './factories/FabricaMoveisModerno';
import { FabricaMoveisVitoriano } from './factories/FabricaMoveisVitoriano';
import { FabricaMoveisArtDeco } from './factories/FabricaMoveisArtDeco';

const clienteModerno = new Cliente(new FabricaMoveisModerno());
clienteModerno.adicionarCadeira('Marrom', 'Madeira', 195, 67);
clienteModerno.adicionarSofa('Bege', 'Suéde', 2560, 4);
clienteModerno.adicionarMesa('Bege', 'Madeira', 2560, 'Escura');
clienteModerno.mostrarComposicao();

const clienteVitoriano = new Cliente(new FabricaMoveisVitoriano());
clienteVitoriano.adicionarCadeira('Marrom', 'Madeira', 195, 67);
clienteVitoriano.adicionarSofa('Bege', 'Suéde', 2560, 4);
clienteVitoriano.adicionarMesa('Bege', 'Madeira', 2560, 'Escura');
clienteVitoriano.mostrarComposicao();

const clienteArtDeco = new Cliente(new FabricaMoveisArtDeco());
clienteArtDeco.adicionarCadeira('Marrom', 'Madeira', 195, 67);
clienteArtDeco.adicionarSofa('Bege', 'Suéde', 2560, 4);
clienteArtDeco.adicionarMesa('Bege', 'Madeira', 2560, 'Escura');
clienteArtDeco.mostrarComposicao();
