import { useState } from 'react';
import { AccordionType } from './types';

export default function Accordion({ id, isOpened, content, handleClick }: AccordionType) {
    return <div>
        <button id={`accordion-butotn${id}`} aria-expanded={isOpened} aria-controls={`accordion-content${id}`} onClick={() => handleClick(id)}>open accordion</button>
        {isOpened ? <div id={`accordion-content${id}`} aria-labelledby={`accordion-button${id}`} role='region'>{content}</div> : null}
    </div>
}
