import Accordion from "react-bootstrap/Accordion";
import { OneCharacter } from "../OneCharacter/OneCharacter";
import './accordionApp.scss';
import { CharacterData } from "../../../types";

interface AccordionProps {
  colSpan: number;
  elem: any; 
  index: number;
  favorites: CharacterData[];
}

export const AccordionApp: React.FC<AccordionProps> = ({ colSpan, elem, index, favorites }) => {
  
  return (
     <td colSpan={colSpan}> 
      <Accordion>
      <Accordion.Item eventKey={index.toString()}>
          <Accordion.Header>See more</Accordion.Header>
          <Accordion.Body>
            <OneCharacter 
              elem={elem}
              favorites={favorites}
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </td>
  );
};
