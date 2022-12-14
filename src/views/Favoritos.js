import { useContext } from 'react';
import { ContextApi } from '../context/ApiContext';
import Heart from '../components/Heart';

export default function Favoritos() {

  const { fotos } = useContext(ContextApi);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {fotos
          .filter((e) => e.liked)
          .map((e, i) => (
            <div
              key={i}
              className="foto"
              style={{ backgroundImage: `url(${e.src.portrait})` }}
            >
              <Heart filled={e.liked} />
              <p>{e.alt}</p>
            </div>
          ))}
      </div>
    </div>
  );
}