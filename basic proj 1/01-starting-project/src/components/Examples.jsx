import React, { useState } from 'react'
import { EXAMPLES } from '../data-with-examples'
import ListButtons from './ListButtons'
import Section from './Section';

const Examples = () => {
  const [content, setContent] = useState(null);

  const onSelectHandler = (title) => {
    console.log(title); // which button has been pressed?
    setContent(title);
  }


  return (
    <>
      <Section title={"examples"} id="examples">
          <menu>
          <ListButtons onSelect={() => onSelectHandler("components")}>components</ListButtons>
          <ListButtons onSelect={() => onSelectHandler("jsx")}>jsx</ListButtons>
          <ListButtons onSelect={() => onSelectHandler("props")}>props</ListButtons>
          <ListButtons onSelect={() => onSelectHandler("state")}>states</ListButtons>
          </menu>
          {!content && (<p>please select something</p>)}
          {content && (<div id="tab-content">
            <h3>{EXAMPLES[content].title}</h3>
            <p>{EXAMPLES[content].description}</p>
            <pre>
              <code>
                {EXAMPLES[content].code}
              </code>
            </pre>
          </div>)}
        </Section>
    </>
  )
}

export default Examples
