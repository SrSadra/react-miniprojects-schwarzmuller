import React from 'react'
import { CORE_CONCEPTS } from '../data-with-examples'


function Card({title, description, image}) {
    return (
      <li>
        <img src={image} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    )
  }

const CoreConcepts = () => {
  return (
    <>
        <section id="core-concepts">
          <h2>core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((el) => (<Card key={el.title} {...el}/>))} {/* the spread element name should be same as components */ }

          </ul>
        </section>
    </>
  )
}

export default CoreConcepts
