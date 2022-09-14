 import logo from '../../logo.svg';
 import './Styles.css';
 import CarWidget from '../CartWidget.jsx/CartWidget.jsx';
 import {NavLink} from 'react-router-dom';

export const NavBar = () => {
       
    return (
        <div className="container">
        <nav className="nav">
           <div className="nav_brand">
                <NavLink className="nav_link" to='/' >Home</NavLink>
            <div/>    
            <ul className="nav_list">
                <li>
                    <NavLink className="nav_link" to='/categoria/films' >Peliculas</NavLink>
                </li>
                <li>
                    <NavLink className="nav_link" to='/categoria/series'>Series</NavLink>
                </li>       
                <li>
                    <NavLink className="nav_link" to='/cart' >
                       <CarWidget />
                    </NavLink>
                </li> 
                      
            </ul>
        </nav>
    </div>
         
       

 
    );
}
export default NavBar;