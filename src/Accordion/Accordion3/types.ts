// export type AccordionType = {
//     content: string
//     id: string
//     handleOpenAccordion: any
//     isOpenAccordion: boolean
//     onToggle?: () => void
// }

export type AccordionType = {
    id: string;
    isOpened: boolean;
    content: string;
    handleClick: (id:string) => void;
}
