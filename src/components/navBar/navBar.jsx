

import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom"
import CartWidget from '../cartWidget/cartWidget';
import styles from './styles.module.css'

const NavBar = () => {

    const arrayCategorias =  [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
        ]
    return (
        <>
           <Navbar className={styles.nav} variant="dark">
         
                    <NavLink to={'/'}>Home</NavLink>
                        {arrayCategorias.map((cat, index) => <NavLink
                            key={index}
                            to={`/category/${cat}`}
                           
                        >
                            {cat}
                        </NavLink>)}
                        <NavLink to={'/cart'}> <CartWidget/> </NavLink>
                       
                 
            </Navbar>
            
        </>
    )
}

export default NavBar;