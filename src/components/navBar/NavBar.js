import React from 'react';
import './NavBar.css'
import Button from '../common/button/Button';

const NavBar = () => {
    return (
        <div className='navBar'>
            <div className='navBar__logo'>
                <div className='navBar__logo--right' >
                <img src='https://www.nicepng.com/png/full/69-695859_raster-codepen-icon.png' alt='logo'/>
                    <div className='navBar__logo--right-content'>
                        <h3 className='navBar__logo--right-text'>Kiki Drag and Drop</h3>
                        <div className='navBar__logo--right-button'>
                            <p>Clément</p>
                            <button>PRO</button>
                            <button>+ Follow</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='navBar__menu'>
                <Button txt="❤️"></Button>
                <Button txt="View in Editor"></Button>
                <Button txt="Sign Up"></Button>
                <Button txt="Log In"></Button>
            </div>
        </div>
    );
};

export default NavBar;