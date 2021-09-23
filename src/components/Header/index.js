import { Navbar } from '../Navbar';

import './Header.css';

export const Header = (props) => {
  return (
    <div
      className="header"
      style={{ backgroundImage: "url('./assets/backgrounds/header.png')" }}
    >
      <div className="container">
        <Navbar {...props} />
        <h1 className="title">Pokédex</h1>
        <p className="description">
          Search for Pokémon by name or using the National Pokédex number.
        </p>
      </div>
    </div>
  );
};
