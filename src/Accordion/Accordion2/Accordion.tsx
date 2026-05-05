import { useState } from 'react';
import { AccordionType } from './types';

export default function Accordion({ content, id, handleOpenAccordion, isOpenAccordion }: AccordionType) {
    return <>
        <button id={`accordion-button${id}`} aria-expanded={isOpenAccordion} aria-controls={`accordion-content${id}`} onClick={() => handleOpenAccordion(id)}>open accordion</button>
        {(isOpenAccordion) ? <div id={`accordion-content-${id}`} role="region" aria-labelledby={`accordion-button${id}`}>{content}</div> : null}
    </>
}
