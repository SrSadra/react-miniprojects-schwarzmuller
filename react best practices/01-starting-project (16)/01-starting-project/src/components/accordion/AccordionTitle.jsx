import React from 'react'
import { useAccordionContext } from './Accordion'

const AccordionTitle = ({ id,children }) => {
    const { toggleOpen } = useAccordionContext();

  return (
      <h3 onClick={() => toggleOpen(id)}>{children}</h3>
  )
}

export default AccordionTitle
