import { CardSecao } from './styled' 

function Card({ nome, img }) {
    return(
        <CardSecao>
            <div>
                <img src={img} alt="Imagem do pokemon" />
            </div>
            <p>{nome}</p>
        </CardSecao>
    )
}

export default Card