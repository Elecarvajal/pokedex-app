import { useState } from 'react';

export const PokeCard = ({ id, name, img, firstType, secondType }) => {
  const [loaded, setLoaded] = useState('');

  return (
    <div className={`poke-card bg-${firstType}`}>
      <div
        className="poke-data"
        style={{ backgroundImage: "url('./assets/backgrounds/dots.png')" }}
      >
        <p className="poke-id">#{id}</p>
        <p className="poke-name">{name}</p>
        <div className="poke-types">
          <div className={`type ${firstType}`}>
            <img
              className="type-icon"
              src={`./assets/badges/${firstType}.svg`}
              alt="badge"
            />
            {firstType}
          </div>
          {secondType && (
            <div className={`type ${secondType}`}>
              <img
                className="type-icon"
                src={`./assets/badges/${secondType}.svg`}
                alt="badge"
              />
              {secondType}
            </div>
          )}
        </div>
      </div>
      <div
        className="poke-container-image"
        style={{ backgroundImage: "url('./assets/backgrounds/pokeball.png')" }}
      >
        <img
          src={img}
          alt={name}
          className={loaded}
          onLoad={() => setLoaded('fade-in')}
        />
      </div>
    </div>
  );
};
