import { useEffect, useState } from "react";
import axios from "axios";
import "./oneCharacter.scss";
import { CharacterData } from "../../../types";
import { Card, ListGroup } from "react-bootstrap";

interface OneCharacterProps {
  elem: CharacterData;
}

type Episode = {
  name: string;
  episode: string;
  url: string | undefined;
}

export const OneCharacter = ({ elem }: OneCharacterProps) => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    const fetchEpisodes = (episodes: string[]) => {
      axios
        .get(`https://rickandmortyapi.com/api/episode/${episodes.join(',')}`)
        .then((res) => {
          setEpisodes(res.data?.length ? res.data : [res.data]);
        })
        .catch((err) => {
          (err);
        });
    };
    if(elem?.id){
      const allEpisodes = elem.episode.map((epi)=>{
        const split = epi.split('/')
        return split[split.length -1]
      })
      fetchEpisodes(allEpisodes);
    }

  }, [elem?.id]);

  const divideString = (string: string | undefined) => {
    if (!string) return { season: "Not available", chapter: "Not available" };
    const [season, chapter] = string.split("E");
    return { season, chapter };
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <div className="divOneCharacter d-flex align-items-center justify-content-center pb-3">
          <Card style={{ width: '16rem' }} className="bgCard imgOneCharacter">
            <Card.Img variant="top" src={elem?.image} />
          </Card>
          <Card style={{ width: '23rem' }} className="d-flex align-items-center bgCard cardOneCharacter">
            <div className="flex-grow-1">
              <Card.Body className="d-flex flex-column bgCard">
                <Card.Title className="mb-auto">
                  {elem?.name}
                  {/* <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label> */}
                </Card.Title>
                <ListGroup className="list-group-flush bgCard">
                  <ListGroup.Item>{elem?.gender}</ListGroup.Item>
                  <ListGroup.Item>{elem?.status}</ListGroup.Item>
                  <ListGroup.Item>{elem?.species}</ListGroup.Item>
                  <ListGroup.Item>{elem?.origin?.name}</ListGroup.Item>
                  <ListGroup.Item>{elem?.location?.name}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </div>
          </Card>
        </div>
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
              {episodes?.map((episode, index) => {
                const { season, chapter } = divideString(
                  episode.episode
                );
                return (
                  <tr key={index}>
                    <td>{episode.name}</td>
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
