import { Cabecalho, CampoBusca } from './styles'

import Logo from '../../assets/pokemon_logo.svg'

function header ( {pesquisa} ) {
    return (
        <Cabecalho>
            <img src={Logo} alt="Logo do pokemon"/>
            <CampoBusca>
                <input onChange={(e) => pesquisa(e.target.value)} type="text" placeholder='Digite o nome do pokemon' />
                <input type='submit' value='Buscar'/>
            </CampoBusca>
        </Cabecalho>
    )
}

export default header