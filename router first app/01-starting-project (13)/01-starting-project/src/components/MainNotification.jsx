import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const MainNotification = () => {
  return (
    <header>
      <nav>
        <ul>
            <li>
                <NavLink to={"/"} className={({isActive}) => isActive? "a" : "b"} end>Main</NavLink> {/* end specifies "to" link is ending with that string (here /) */}
            </li>
            <li>
                <Link to={"/product"}>Product</Link>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNotification
