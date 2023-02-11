import HeaderBusca from '../../components/HeaderBusca'
import Card from '../../components/Card/indes'
import axios from 'axios'

import { Conteiner, AreaFlex } from './styled'
import { useEffect, useState } from 'react'

function resultados() {

    const [pokemons, setPokemons] = useState([]);

    var urls = [];

    for(var i = 1; i <= 100; i++){
        urls.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    useEffect( () => {
        axios.all(urls.map( (link) => axios.get(link) ))
        .then((res) => setPokemons(res))
        .catch((err) => console.log(err));

        
    }, []);
    
    const pokemonFiltro = (pesquisa) => {
        var pokemonsFiltrados = [];
        
       /* pokemons.filter( (e) => {

            if(e.data.name === pesquisa){
                console.log('entrou');
                pokemonsFiltrados.push(e);
                setPokemons[pokemonsFiltrados];
                console.log(pokemonsFiltrados);

            } else {
                console.log(e.data.name);
                console.log(pesquisa);
            }

        }); */
        

      for( var i in pokemons) {
            console.log(pokemons[i]);
            if(pokemons[i].data.name.includes(pesquisa)) {
                console.log('entrou');
                pokemonsFiltrados.push(pokemons[i]);
            }
        }

        setPokemons(pokemonsFiltrados);
    }

    return (
        <>
            <HeaderBusca pesquisar={pokemonFiltro}/>
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