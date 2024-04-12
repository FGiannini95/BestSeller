import { useEffect, useState } from "react";
import axios from "axios";
import "./oneCharacter.scss";
import { CharacterData } from "../../../types";


interface OneCharacterProps {
  elem: CharacterData;
  //favorites:CharacterData[];
}

type Episode = {
  name: string;
  episode: string;
  url: string | undefined;
}

// type CheckboxProps = {
//   isChecked: boolean;
// }

export const OneCharacter = ({ elem }: OneCharacterProps) => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  //const [isChecked, setIsChecked] = useState<CheckboxProps>();

  useEffect(() => {
    const fetchEpisodes = () => {
      axios
        .get("https://rickandmortyapi.com/api/episode")
        .then((res) => {
          console.log("Episode", res.data);
          
          setEpisodes(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchEpisodes();
  }, []);
  
  const getEpisode = (url: string): Episode | null => {
    if (!episodes || episodes.length === 0) return null;
    const episode = episodes.find((ep) => ep.url === url);
    return episode || null;
  };

  const divideString = (string: string | undefined) => {
    if (!string) return { season: "Not available", chapter: "Not available" };
    const [season, chapter] = string.split("E");
    return { season, chapter };
  };

  // const handleCheckBoxChange = () => {
  //   setIsChecked(!isChecked);
  //   if (!isChecked && favorites.length < 3) {
  //     setFavorites(prevFavorites => [...prevFavorites, elem]);
  //   } else {
  //     setFavorites(prevFavorites => prevFavorites.filter(item => item.id !== elem.id));
  //   }
  // };

  return (
    <>
      <div className="d-flex">
        <img src={elem?.image} alt="" />
        <ul>
          <p>{elem?.name}</p>
          <p>{elem?.gender}</p>
          <p>{elem?.status}</p>
          <p>{elem?.species}</p>
          <p>{elem?.origin?.name}</p>
          <p>{elem?.location?.name}</p>
          <input 
            type="checkbox"
            id="checkbox1"
            //checked={isChecked}
            //onChange={handleCheckBoxChange}
            />
          <label htmlFor="">Mark as favorite</label>
        </ul>
        <div className="divtable2">
          <table className="custom-table2">
            <thead>
              <tr>
                <th>Name</th>
                <th>Season</th>
                <th>Episodes</th>
              </tr>
            </thead>
            <tbody>
              {elem?.episode.map((url, index) => {
                const { season, chapter } = divideString(
                  getEpisode(url)?.episode
                );
                return (
                  <tr key={index}>
                    <td>{getEpisode(url)?.name}</td>
                    <td>{season}</td>
                    <td>{chapter}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
