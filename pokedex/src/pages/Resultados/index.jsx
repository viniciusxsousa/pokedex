import HeaderBusca from '../../components/HeaderBusca'
import Card from '../../components/Card/indes'

import { Conteiner, AreaFlex } from './styled'

function resultados() {
    return (
        <>
            <HeaderBusca/>
            <Conteiner>
                <h1>Resultados</h1>
                <AreaFlex>
                    <Card nome='Pikachu' img='https://picsum.photos/400/190' />
                    <Card nome='pikachu' img='https://picsum.photos/190/190' />
                    <Card nome='pikachu' img='https://picsum.photos/190/190' />
                </AreaFlex>
            </Conteiner>
        </>
    )
} 

export default resultados