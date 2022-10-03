import "../assets/css/galeria.css";
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Heart from "./Heart";

export default function Home() {
  const { fotos, setFotos } = useContext(UserContext);

  function changeHeart(i) {
    const newPic = [...fotos];
    newPic[i].liked = !newPic[i].liked;
    setFotos(newPic);
  }

  return (
    <div>
      <div className="p-3 galeria grid-columns-4">
        {fotos.map((e,i) => (
          <div key={i} className="foto" style={{backgroundImage: `url(${e.src.original})`}} onClick={() => changeHeart(i)}>
            <Heart filled={e.liked}></Heart>
            <p>{e.alt}</p>
          </div> 
        ))}
      </div>
    </div>
  );
}