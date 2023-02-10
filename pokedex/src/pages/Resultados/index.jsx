import HeaderBusca from '../../components/HeaderBusca'
import Card from '../../components/Card/indes'
import axios from 'axios'

import { Conteiner, AreaFlex } from './styled'
import { useEffect, useState } from 'react'

function resultados() {

    const [pokemons, setPokemons] = useState([]);

    var urls = [];

    for(var i = 1; i <= 20; i++){
        urls.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    useEffect( () => {
        axios.all(urls.map( (link) => axios.get(link) ))
        .then((res) => setPokemons(res))
        .catch((err) => console.log(err));

        
    }, []);
    
    const pokemonFiltro = (pesquisa) => {
        var pokemonsFiltrados = [];

        for( var i in pokemons) {
            if(pokemons[i].name.include(pesquisa)) {
                pokemonFiltro.push(pokemons[i]);
            }
        }

        setPokemons[pokemonsFiltrados];
    }

    return (
        <>
            <HeaderBusca pesquisa={pokemonFiltro}/>
            <Conteiner>
                <h1>Resultados</h1>
                <AreaFlex>
                    {pokemons.map( (pokemon, key) => (
                        <Card key={key} nome={pokemon.data.name} img={pokemon.data.sprites.front_default}/>
                    ) )}
                </AreaFlex>
            </Conteiner>
        </>
    )
} 

export default resultados