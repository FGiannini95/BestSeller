import Accordion from "react-bootstrap/Accordion";
import { OneCharacter } from "../OneCharacter/OneCharacter";
import './accordionApp.scss';

interface AccordionProps {
  colSpan: number;
  elem: any; 
  index: number;
}

export const AccordionApp: React.FC<AccordionProps> = ({ colSpan, elem, index }) => {
  
  return (
     <td colSpan={colSpan}> 
      <Accordion>
      <Accordion.Item eventKey={index.toString()}>
          <Accordion.Header>See more</Accordion.Header>
          <Accordion.Body>
            <OneCharacter 
              elem={elem}
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </td>
  );
};
