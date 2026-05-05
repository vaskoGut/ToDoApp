import { useState } from 'react';
import { AccordionType } from './types';

export default function Accordion({ content, id }: AccordionType) {
    const [isOpenAccordion, setOpenAccordion] = useState(false);
    const handleOpenAccordion = () => {
        setOpenAccordion(prev => !prev);
    };

    return <div>
        <button id={`accordion-button${id}`} aria-expanded={isOpenAccordion} aria-controls={`accordion-content${id}`} onClick={handleOpenAccordion}>open accordion</button>
        {isOpenAccordion ? <div id={`accordion-content-${id}`} role="region" aria-labelledby={`accordion-button${id}`}>{content}</div> : null}
    </div>
}
