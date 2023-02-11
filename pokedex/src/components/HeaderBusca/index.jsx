import { BsSearch, BsServer } from 'react-icons/bs'

import { Cabecalho, CampoBusca } from './styles'

import Logo from '../../assets/pokemon_logo.svg'

function header ( {pesquisar} ) {

    /* function buscar(valor) {
        var textoBusca = valor;

        pesquisar(valor);
    } */

    return (
        <Cabecalho>
            <img src={Logo} alt="Logo do pokemon"/>
            <CampoBusca>
                <input onChange={(e) => pesquisar(e.target.value)} type="text" placeholder='Digite o nome do pokemon' />
                <button><BsSearch/></button>
            </CampoBusca>
        </Cabecalho>
    )
}

export default header