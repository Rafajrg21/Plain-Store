import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import {CartIcon} from '../icons';

const Header = () => {

    const headerStyle = {
        padding: '10px',
        textAlign: 'center',
    };
    const linkStyle = {
        display: 'inline-block',
        marginRight: '10px',
        padding: '5px 10px',
    } 

    const {itemCount} = useContext(CartContext);

    return ( 
        <header style={headerStyle}>
            <Link to='/' style={linkStyle}>Store</Link>
            <Link to='/about' style={linkStyle}>About</Link>
            <Link to='/cart' style={linkStyle}> <CartIcon width="20px" /> Cart ({itemCount})</Link>
        </header>
     );
}
 
export default Header;