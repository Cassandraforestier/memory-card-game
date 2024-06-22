import { useEffect, useState } from 'react';
import './card.css'
import 'animate.css';
import axios from 'axios';

const Card = ({points, setPoints}) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [memoryList, setMemoryList] = useState([]);


    const numberOfPokemon = Array.from({length: 20}, (v, k) => k+1);

    useEffect(() => {
        seedCards();
    }, [])

    const seedCards = async () => {
        const res = await Promise.all(numberOfPokemon.map((id) => {
            return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        }
        ))
        const pokemon = res.map((record) => {
            return {name : record.data.name,
                url: record.data.sprites.front_default
            }
        });
        setPokemonList(pokemon);
    }

    function getRandomNumber(max) {
      return Math.floor(Math.random() * max );
    }

    const shuffleCards = (arrLength) => {
       let newPokemon = pokemonList;
       const sortedDictionnary = {};
       for(let [index, pokemon] of newPokemon.entries()) {
        if(sortedDictionnary[pokemon.name]) {continue;}
        const rng = getRandomNumber(arrLength);
        newPokemon.splice(index, 1);
        newPokemon.splice(rng, 0, pokemon);
        sortedDictionnary[pokemon.name] = true;
       }
    }

    const handleClick = (pokemonName) => {
        if(memoryList.includes(pokemonName)){
           setMemoryList([]);
           return setPoints(0);
        }
        else {
            shuffleCards(pokemonList.length);
            setMemoryList([...memoryList, pokemonName]);
            return setPoints(points+1);
        }
    }

    return (
        <>
        {pokemonList.map((pokemon, index) => (
            <button key={index} className="card" onClick={() => handleClick(pokemon.name)}>
                <img width={150} height={150} src={pokemon.url} />
                <div>{pokemon.name}</div>
            </button>
        ))}
        </>
    )
}
export default Card;