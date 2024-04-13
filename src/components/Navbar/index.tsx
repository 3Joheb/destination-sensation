import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/input">Input</Link>
                    </li>
                    <li>
                        <Link to="/components/Card/index">Holiday Generator</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
};
export default Navbar;