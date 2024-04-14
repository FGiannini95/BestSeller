import React from "react";
import "./tableApp.scss";
import axios from "axios";
import { CharacterData, InfoCharacter } from "../../../types";
import { OneCharacter } from "../OneCharacter/OneCharacter";
import { Accordion } from "react-bootstrap";

interface TableAppProps {
  findData: CharacterData[];
  info: InfoCharacter;
  search: string;
  setData: React.Dispatch<React.SetStateAction<CharacterData[]>>;
  setInfo: React.Dispatch<React.SetStateAction<InfoCharacter>>;
}

export const TableApp = ({
  setData,
  findData,
  info,
  setInfo,
  search,
}: TableAppProps) => {

  const chargeMore = (url: string) => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data.results);
        setInfo(res.data.info);
        window.scrollTo(0, 0);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="custom-table-container pb-5">
      <table className="custom-table">
        <thead>
          <tr>
            <th className="thName">Name</th>
            <th>Gender</th>
            <th>Current Status</th>
            <th>Species</th>
            <th>Location</th>
            <th>Episodes</th>
          </tr>
        </thead>
          <Accordion as={'tbody'}>
          {findData?.map((elem, index) => (
            <React.Fragment key={`${index}_${elem.id}`}>
              <tr>
                <td className="nameTable">{elem.name}</td>
                <td>{elem.gender}</td>
                <td>{elem.status}</td>
                <td>{elem.species}</td>
                <td>{elem.location?.name}</td>
                <td>{elem.episode?.length}</td>
              </tr>
              <tr>
                <td colSpan={6}>
                  <Accordion.Item eventKey={index.toString()}>
                    <Accordion.Header></Accordion.Header>
                    <Accordion.Body >
                      <OneCharacter 
                        elem={elem}
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                </td>
              </tr>
            </React.Fragment>
          ))}
          </Accordion>
      </table>
      {search === "" && (
        <div className="ddivPrincipal d-flex justify-content-between py-3 pagination-container">
          <div>
            {info?.prev && (
              <span onClick={() => chargeMore(info.prev)} className="material-symbols-outlined">
              arrow_back
              </span>
            )}
          </div>
          <div>
            {info?.next && (
              <span onClick={() => chargeMore(info.next)} className="material-symbols-outlined">
              arrow_forward
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
