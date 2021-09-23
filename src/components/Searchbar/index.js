import './Searchbar.css';

export const Searchbar = ({ search, setSearch, setCurrentPage }) => {
  const onSearchChange = ({ target }) => {
    setCurrentPage(0);
    setSearch(target.value);
  };

  return (
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
            alt="search-logo"
            className="searchbar-logo"
          />
        </div>
      </div>
    </div>
  );
};
