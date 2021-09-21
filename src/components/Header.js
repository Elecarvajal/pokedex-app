export const Header = ({ nextPage, prevPage }) => {
  return (
    <div
      className="header"
      style={{ backgroundImage: "url('./assets/backgrounds/header.png')" }}
    >
      <div className="container">
        <div className="pagination">
          <button className="btn prev" onClick={prevPage}>
            ⇐
          </button>
          <button className="btn next" onClick={nextPage}>
            ⇒
          </button>
        </div>
        <h1 className="title">Pokédex</h1>
        <p className="description">
          Search for Pokémon by name or using the National Pokédex number.
        </p>
      </div>
    </div>
  );
};
