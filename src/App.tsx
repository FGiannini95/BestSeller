import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { TableApp } from "./components/TableApp/TableApp";
import axios from "axios";
import { InputSearch } from "./components/InputSearch/InputSearch";
import { textSensitive } from "../helpers/utils";
import { TableFavorites } from "./components/TableFavorites/TableFavorites";
import { CharacterData, InfoCharacter } from '../types';

function App() {
  const [data, setData] = useState<CharacterData[]>([]);
  const [info, setInfo] = useState<InfoCharacter>({ next: "", prev: "" });
  const [search, setSearch] = useState<string>("");
  const [favorites, setFavorites] = useState<CharacterData[]>([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        console.log(res.data);
        setData(res.data.results);
        setInfo(res.data.info);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const findData = data.filter((character) => {
    return textSensitive(character.name, search);
  });

  return (
    <>
      <div className="d-flex justify-content-around p-3">
        <h1>The authentic Rick & Morty</h1>
        <InputSearch
          search={search}
          setSearch={setSearch}
        />
      </div>
      <div>
        <div>
        {favorites.length > 0 && ( 
            <TableFavorites />
          )}
        </div>
        <TableApp
          findData={findData}
          setData={setData}
          info={info}
          setInfo={setInfo}
          search={search}
          favorites={favorites}
        />
      </div>
    </>
  );
}

export default App;
