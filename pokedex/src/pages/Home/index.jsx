import Header from "../../components/Header"
import { Area } from './styled'

function home() {
    return (
        <div>
            <Header/>
            <Area>
                <div>
                    <input type="text" placeholder="Digite o nome do pokemon"/>
                </div>
            </Area>
        </div>
    )
}

export default home