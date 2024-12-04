import { Link } from "react-router";
import Aboutus from "./Aboutus";
function Nav() {
    return (
        <nav className="main-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="article">Article</Link></li>
                <li><Link to="aboutus">Aboutus</Link></li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Nav;