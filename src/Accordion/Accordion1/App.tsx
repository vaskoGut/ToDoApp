// accordion 1 - when each accordion has its own state
import Accordion from "./Accordion";

export default function App() {
  return (
    <>
      <p>Accordion component</p>
      <Accordion
        id="accordion-1"
        content={'this content of first accordion'}
      />
      <Accordion 
        id="accordion-1"
        content={'this content of second accordion'}
      />
      <Accordion 
        id="accordion-1"
        content={'this content of third accordion'}
      />
    </>
  );
}
