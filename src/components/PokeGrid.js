import { Loading } from './Loading';
import { PokeCard } from './PokeCard';

export const PokeGrid = ({ pokemons, isLoading }) => {
  if (isLoading)
    return (
      <div className="container">
        <Loading />
      </div>
    );

  return (
    <div className="poke-grid container">
      {pokemons.length > 0 ? (
        pokemons.map((pokemon) => <PokeCard key={pokemon.id} {...pokemon} />)
      ) : (
        <div>- Oh sorry we didn't find that pokemon 🙁 -</div>
      )}
    </div>
  );
};
