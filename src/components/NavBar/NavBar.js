 import logo from '../../logo.svg';
 import './Styles.css';
 import CarWidget from '../CartWidget.jsx/CartWidget.jsx';
const NavBar = () => {
       
    return (
        <div className='navbar-container'>

         <div>
            <img width={'100px'} src={logo} alt="logo"/>
         </div>
         <div>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>       
                <li>
                    <a href="#">carrito</a>
                      <CarWidget />
                </li> 
            </ul>
         </div>
         <div>
            <button>Login</button>
         </div>

        </div>

 
    )
}

// function NavBar() {
//     return <>
//             // Customiza tu NavBar como prefieras 
//             <h3>TU_MARCA</h3>
//             <CartWidget />
//     </>;
// }

// </NavBar>

// (2) 
// function ItemListContainer() {
//  // Incluye aquí el rendering de algún texto o título provisional que luego reemplazaremos por nuestro catálogo
// }


export default NavBar;