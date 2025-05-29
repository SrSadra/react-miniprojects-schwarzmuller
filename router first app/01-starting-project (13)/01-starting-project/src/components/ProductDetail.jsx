import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetail = () => {
    const param = useParams(); // every dynamic part (param) can be accessed using useParams()



  return (
    <>
    <h1>
      for each product we show the dynamic part <p>{param.id}</p>
    </h1>
    <Link to="/p1">product one</Link> 
    <Link to=".." relative='path'>back</Link> {/* to .. means going back one step and it can be relative to "route" so it goes back to parent route or path that goes back one step in url */}
    </>
  )
}

export default ProductDetail
