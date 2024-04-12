import { Outlet, Link } from "react-router-dom";

const navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/App">Home</Link>
          </li>
          <li>
            <Link to="/pages/input">Input</Link>
          </li>
          <li>
            <Link to="/components/Card/index">Holiday Generator</Link>
          </li>
          <li>
            <Link to="/components/Card/LoginSignup">Login</Link>
          </li>
        </ul>
      </nav>


      <Outlet />
    </>
  )
};
export default navbar;