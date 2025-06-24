import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <nav className="sidebar">
    <ul>
      <li>
        <NavLink to="/" end>Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {/* Add more links as needed */}
    </ul>
  </nav>
);

export default Sidebar;
