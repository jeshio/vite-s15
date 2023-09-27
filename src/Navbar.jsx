import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <nav>
    <Link to="/">Home</Link>
      <Link to="/first">First</Link>
      <Link to="/second">Second</Link>
        </nav>
    )
}

export {Navbar}