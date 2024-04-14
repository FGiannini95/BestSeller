import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { TableApp } from "./components/TableApp/TableApp";
import axios from "axios";
import { InputSearch } from "./components/InputSearch/InputSearch";
import { textSensitive } from "../helpers/utils";
//import { TableFavorites } from "./components/TableFavorites/TableFavorites";
import { CharacterData, InfoCharacter } from '../types';

function App() {
  const [data, setData] = useState<CharacterData[]>([]);
  const [info, setInfo] = useState<InfoCharacter>({ next: "", prev: "" });
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        (res.data);
        setData(res.data.results);
        setInfo(res.data.info);
      })
      .catch((err) => {
        (err);
      });
  }, []);


  const findData = data.filter((character) => {
    return textSensitive(character.name, search);
  });

  return (
    <>
      <div className=" divPrincipal">
        <div className="d-flex flex-column align-items-center justify-content-center py-3">
          <img className="imgHome" src="../public/images/logo.png" alt="logo rick and morty" />
          <p className="bestseller">&copy;BESTSELLER Edition</p>
        </div>
        <div className="d-flex align-content-center justify-content-between py-3">
          <h2 className="title">All characters</h2>
          <InputSearch
            search={search}
            setSearch={setSearch}
          />
        </div>
      </div>
      <div>
        <TableApp
          findData={findData}
          setData={setData}
          info={info}
          setInfo={setInfo}
          search={search}
        />
      </div>
    </>
  );
}

export default App;
