// update state to handle multiple opened closed accordion options

// how to keep state of other options 
// we need object to save state of accordion

import { useState } from 'react';
import Accordion from "./Accordion";

export default function App() {
  // const [activeIds, setActiveIds] = useState<string[]>([]);
  const [activeIds, setActiveIds] = useState<Record<string, boolean>>({});

  // const handleClick = (id:string) => {
  //   setActiveIds(prev => {
  //     return prev.includes(id) ? prev.filter(elem => elem !== id) : [...prev, id];
  //   })
  // }

  const handleClick = (id:string) => {
    setActiveIds(prev  => {
      return {
        ...prev,
        [id]: !prev[id]
      }
    });
  }

  console.log('activeIds', activeIds);

  return (
    <>
      <p>Our beautifull Accordion component</p>
      <Accordion 
        id='acord-1'
        isOpened={activeIds['acord-1']}
        content='accordion 1st element'
        handleClick={handleClick}
      />
      
      <Accordion
        id='acord-2'
        isOpened={!!activeIds['acord-2']}
        content='accordion 2nd element'
        handleClick={handleClick}
      />
      <Accordion
        id='acord-3'
        isOpened={!!activeIds['acord-3']}
        content='accordion 3rd element'
        handleClick={handleClick}
      />
      <Accordion
        id='acord-4'
        isOpened={!!activeIds['acord-4']}
        content='accordion 3rd element'
        handleClick={handleClick}
      />
    </>
  );
}
