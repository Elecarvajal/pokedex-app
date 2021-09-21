import { fetchPokemon } from './fetchPokemon';

export const fetchAllPokemons = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=898';
  const res = await fetch(url);
  const { results } = await res.json();
  const promises = results.map(async (poke) => fetchPokemon(poke.url));
  const pokeData = await Promise.all(promises);
  return transformPokeDataIntoPokemons(pokeData);
};

const transformPokeDataIntoPokemons = (data) => {
  const pokemons = data.map(({ id, name, sprites, types }) => {
    const img = sprites.other['official-artwork'].front_default;
    const firstType = types[0].type.name;
    const secondType = types[1]?.type.name;
    return { id, name, img, firstType, secondType };
  });
  return pokemons;
};
