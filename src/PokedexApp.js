import { useState } from 'react';
import { Header } from './components/Header';
import { PokeGrid } from './components/PokeGrid';
import { usePokemons } from './hooks/usePokemons';

export const PokedexApp = () => {
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

  const nextPage = () => {
    if (
      pokemons.filter((pokemon) => pokemon.name.includes(search)).length >
      currentPage + 5
    )
      setCurrentPage(currentPage + 5);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 5);
  };

  const onSearchChange = ({ target }) => {
    setCurrentPage(0);
    setSearch(target.value);
  };

  return (
    <div>
      <Header nextPage={nextPage} prevPage={prevPage} />
      <div className="functionalities">
        <div className="container">
          <div className="searchbar">
            <input
              type="text"
              placeholder="What Pokémon are you looking for?"
              value={search}
              onChange={onSearchChange}
            />
            <img
              src="./assets/backgrounds/search.png"
              alt="searchbar-logo"
              className="searchbar-logo"
            />
          </div>
        </div>
      </div>
      <PokeGrid pokemons={filteredPokemons()} isLoading={isLoading} />
    </div>
  );
};
