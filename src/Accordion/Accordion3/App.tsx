// update state to handle multiple opened closed accordion options

// how to keep state of other options 
// we need object to save state of accordion

import { useState } from 'react';
import Accordion from "./Accordion";

export default function App() {
  const [activeIds, setActiveIds] = useState<string[]>([]);
  const handleClick = (id:string) => {
    setActiveIds(prev => {
     return prev.includes(id) ? prev.filter(elem => elem !==id) : [...prev, id];
     });
  };
  return (
    <>
      <p>Our beautifull Accordion component</p>
      <Accordion 
        id='acord-1'
        isOpened={activeIds.includes('acord-1')}
        content='accordion 1st element'
        handleClick={handleClick}
      />
      
      <Accordion
        id='acord-2'
        isOpened={activeIds.includes('acord-2')}
        content='accordion 2nd element'
        handleClick={handleClick}
      />
      <Accordion
        id='acord-3'
        isOpened={activeIds.includes('acord-3')}
        content='accordion 3rd element'
        handleClick={handleClick}
      />
      <Accordion
        id='acord-4'
        isOpened={activeIds.includes('acord-4')}
        content='accordion 3rd element'
        handleClick={handleClick}
      />
    </>
  );
}
