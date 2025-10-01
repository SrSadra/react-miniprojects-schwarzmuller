import React from 'react'
import { useAccordionContext } from './Accordion';

const AccordionContent = ({ id , children}) => {
    const { openItemId } = useAccordionContext();
    const isOpen = openItemId === id;

  return (
      <div className={isOpen ? "accordion-item-content open" : "accordion-item-content"}>{children}</div>
  )
}

export default AccordionContent
