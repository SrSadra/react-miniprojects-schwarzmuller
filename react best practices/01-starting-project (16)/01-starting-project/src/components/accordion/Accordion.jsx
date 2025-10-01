import React, { createContext, useContext, useState } from 'react'
import {AccordionItem} from "./AccordionItem.jsx"


const AccordionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error("accordion-related component must be wrapped with <Accordion>");
  }

  return ctx;
}


const Accordion = ({ className, children }) => {
  const [openItemId , setOpenItemId] = useState(null);
  const contextValue = {
    openItemId: openItemId,
    // openItem: openItem,
    // closeItem: closeItem
    toggleInput
  }

  // function openItem(id) {
  //   setOpenItemId(id);
  // }

  // function closeItem() {
  //   setOpenItemId(null);
  // }

  function toggleInput(id) {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }

  return (
    <AccordionContext.Provider value={contextValue}>
    <ul className={className}>
      {children}
      </ul>
    </AccordionContext.Provider>
  )
}

Accordion.Item = AccordionItem;

export default Accordion


