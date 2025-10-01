import React from 'react'
import { useAccordionContext } from './Accordion'

export const AccordionItem = ({id ,title, children, className }) => { // if AccordionItem was export default it gives us error for Accordion.Item
   const { openItemId,
    // openItem, closeItem
    toggleOpen
  } = useAccordionContext();

  const isOpen = openItemId === id

  // function handleClick() {
  //   if (isOpen) {
  //     closeItem();
  //   } else {
  //     openItem(id);
  //   }
  // }



  return (
    <li className={className}>
          <h3 onClick={() => toggleOpen(id)}>{title}</h3>
          <div className={isOpen ? "accordion-item-content open" : "accordion-item-content"}>{children}</div>
    </li>
  )
}


