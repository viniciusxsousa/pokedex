import { Cabecalho } from './styles'

import Logo from '../../assets/pokemon_logo.svg'

function header () {
    return (
        <Cabecalho>
            <img src={Logo} alt="Logo do pokemon"/>
        </Cabecalho>
    )
}

export default header