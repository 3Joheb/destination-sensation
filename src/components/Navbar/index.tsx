
const Navbar = () => {
    return (
        <nav>
            <ul className="flex gap-4">
                <li>
                    <a href="/">Sign Up</a>
                </li>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/build">Holiday Builder</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;