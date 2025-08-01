import { NavLink } from 'react-router';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to={"/"} className={({isActive}) => isActive? classes.active : undefined } end>Home</NavLink> {/*end checks if its exactly "to" for being active */}
          </li>
          <li>
            <NavLink to={"/events"} className={({isActive}) => isActive? classes.active: undefined }>Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
