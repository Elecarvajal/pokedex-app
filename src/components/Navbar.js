export const Navbar = ({ pokemons, search, currentPage, setCurrentPage }) => {
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

  return (
    <div className="navbar">
      <div className="nav">
        <div className="nav-item prev" onClick={prevPage}>
          <img src={'./assets/nav/previous.png'} alt="left-arrow" />
        </div>
        <div className="nav-item" onClick={nextPage}>
          <img src={'./assets/nav/next.png'} alt="right-arrow" />
        </div>
      </div>
    </div>
  );
};
