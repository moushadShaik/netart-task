import React from 'react';
import Logo from '../asserts/logo.png'


const Header = () => {
    return ( 
        <div style={{display:'flex', justifyContent:'center',marginLeft:'135px'}}>
            <img src={Logo} alt='logo' width={500} />
        </div>
     );
}
 
export default Header;