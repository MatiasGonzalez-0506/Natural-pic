import "./styles.css";
import UserProvider from "./context/UserContext";
import React, { useEffect,useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import NotFound from "./views/NotFound";

export default function App() {

  const endpoint = '/fotos.json';

  const [fotos, setFotos] = useState([]);

  const getPhotos = async () => {
    const response = await fetch(endpoint);
    const json = await response.json();
    console.log(json.photos);
    setFotos(json.photos);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="App">
      <UserProvider value={{fotos, setFotos}}>
        <BrowserRouter>
            <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}