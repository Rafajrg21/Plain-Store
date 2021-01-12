import React from 'react';

const Footer = () => {    
    const footerStyle = {
        textAlign: 'center',
        width: '100%',
        padding: '10px',
    }

    return ( 
        <footer className={'mt-5 p-3'} style={footerStyle}>
            Rafael Romero - 2021 
        </footer>
     );
}
 
export default Footer;