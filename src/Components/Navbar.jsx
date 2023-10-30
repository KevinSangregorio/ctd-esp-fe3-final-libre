import React from 'react'
import { Link } from "react-router-dom";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
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
      <nav className='navbar__container'>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <ul className='navbar__list__container'>
          {navbarItems.map((item) => (
            <li key={item.id}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button>Change theme</button>
      </nav>
    </header>
  )
}

export default Navbar