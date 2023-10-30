/* Dependencies */
import { useContext } from "react";
import { Link } from "react-router-dom";

/* Others */
import { ContextGlobal } from "../Components/utils/global.context";

const Navbar = () => {
  const { dispatch, state } = useContext(ContextGlobal)
  const navbarItems = [
    {
      id: "1",
      path: "/",
      name: "Home"
    },
    {
      id: "2",
      path: "/contact",
      name: "Contact"
    },
    {
      id: "3",
      path: "/favs",
      name: "Favs"
    },
  ]

  return (
    <header>
      <nav className={`navbar__container ${state.theme}`}>
        <ul className='navbar__list__container'>
          {navbarItems.map((item) => (
            <li key={item.id}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <button onClick={() => dispatch({ type: "changeTheme" })}>Change theme</button>
      </nav>
    </header>
  )
}

export default Navbar