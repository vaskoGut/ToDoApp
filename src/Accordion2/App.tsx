// accordion 2 - when state is lifted from parent to child
import { useState } from 'react';
import Accordion from "./Accordion";

export default function App() {
  const [activeId, setActiveId] = useState<string|null>('');

  const handleOpenAccordion = (id:string) => {
    setActiveId(prev => prev === id ? null : id);
  }

  return (
    <>
      <p>Accordion component</p>
      <Accordion
        id="accordion-1"
        content={'this content of first accordion'}
        handleOpenAccordion={handleOpenAccordion}
        isOpenAccordion={activeId === 'accordion-1'}
      />
      <Accordion 
        id="accordion-2"
        content={'this content of second accordion'}
        handleOpenAccordion={handleOpenAccordion}
       isOpenAccordion={activeId === 'accordion-2'}
      />
      <Accordion 
        id="accordion-3"
        content={'this content of third accordion'}
        handleOpenAccordion={handleOpenAccordion}
        isOpenAccordion={activeId === 'accordion-3'}
      />
    </>
  );
}
