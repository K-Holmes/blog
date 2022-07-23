//file that visualizes navbar, doesn't make fully functioning

import { Link } from 'react-router-dom'

export default function Navbar() {
    return <nav className = "nav">
        <Link to = "/" className ="homepage">Home</Link>
        <ul>
            <li>
                <Link to = "/about">About</Link>
            </li>
            <li>
                <Link to = "/members">Members</Link>
            </li>
            <li>
                <Link to = "/classes">Classes</Link>
            </li>
            <li>
                <Link to = "/quest">Quest Board</Link>
            </li>
            <li>
                <Link to = "/template">3</Link>
            </li>
        </ul>
    </nav>
}