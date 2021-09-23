import { useState } from 'react';

import { Header } from '../components/Header';
import { Searchbar } from '../components/Searchbar';
import { PokeGrid } from '../components/PokeGrid';

import { usePokemons } from '../hooks/usePokemons';

export const HomePage = () => {
  const { isLoading, pokemons } = usePokemons();
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');

  const filteredPokemons = () => {
    if (search.length === 0)
      return pokemons.slice(currentPage, currentPage + 5);

    const filtered = pokemons.filter(
      (pokemon) =>
        pokemon.name.includes(search.toLowerCase()) |
        (pokemon.id.toString() === search)
    );

    return filtered.slice(currentPage, currentPage + 5);
  };

  return (
    <>
      <Header
        pokemons={pokemons}
        search={search}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Searchbar
        search={search}
        setSearch={setSearch}
        setCurrentPage={setCurrentPage}
      />
      <PokeGrid pokemons={filteredPokemons()} isLoading={isLoading} />
    </>
  );
};
