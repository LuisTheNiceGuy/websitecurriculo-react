import { Link, useMatch, useResolvedPath } from 'react-router-dom'

import './Navbar.css'
import {FaUserAlt} from 'react-icons/fa'
import {FaRegFile} from 'react-icons/fa'

function Navbar(){
    return(
        <nav className="navbar">
            <Link to="/" className='home'>Luis Gustavo CS</Link>
            <ul>
                <CustomLink to="/SobreMim"><FaUserAlt />Sobre mim</CustomLink>
                <CustomLink to="/Curriculum"><FaRegFile />Curriculum</CustomLink>
            </ul>
        </nav>
    )
}

// eslint-disable-next-line react/prop-types
function CustomLink({to, children, ...props }){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar