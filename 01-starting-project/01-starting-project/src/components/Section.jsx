import React from 'react'

const Section = ({title, children, ...props }) => { // props can be any name and it merge all left over properties to props attr
  return (
    <section {...props}> {/* here we spread the left overs */}
      <h3>{title}</h3>
      {children}
    </section>
  )
}

export default Section;
