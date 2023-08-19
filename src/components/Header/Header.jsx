import "./Header.css"
import {NavLink} from "react-router-dom";
export function Header(){
    return (
        <header>
            <div className="header-logo">
                <a  className='logo' href="">Logo</a>
            </div>
            <nav>
                <ul className='header-list'>
                    <li className='header-item'>
                        <NavLink to="/">Posts</NavLink>
                    </li>
                    <li className='header-item'>
                        <NavLink to="/create">Create</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}