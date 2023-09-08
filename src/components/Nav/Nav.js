import React, { useState, useEffect } from 'react';
import './style.scss';
import { emsiLogo, gdscLogo, menuIco } from "../../utils/media";

function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      function handleScroll() {
        if (window.top.scrollY > 19) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
  
      document.addEventListener('scroll', handleScroll);
      return () => {
        document.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const [menuHeight, setMenuHeight] = useState('0px');

    function toggleMenu() {
      setMenuHeight(menuHeight === '0px' ? '300px' : '0px');
    }
  
    return (
        <div className='nav-component'>
          
            <nav className={`navbar ${isScrolled ? 'scroll' : ''}`}>
                <div className='logo-container'>
                  <a href="#home-section">
                      <img src={gdscLogo} className='logo' alt='gdsc' height="auto" width="70px"/>
                  </a>
                  <a href="#home-section">
                    <img src={emsiLogo} className='logoemsi' alt='emsi' height="50px" width="50px"/>
                  </a>
                </div>
                
                  <ul id='menuList' style={{ maxHeight: menuHeight }}>
                      <li><a href="#home-section">Home</a></li>
                      <li><a href="#about">About</a></li>
                      <li><a href="#events">Events</a></li>
                      <li><a href="#workshops">WorkShops</a></li>
                      <li><a href="#contact"><button> contact Us</button></a></li>
                  </ul>
                <img src={menuIco} className="menu-icon" onClick={toggleMenu} alt="Menu Icon" height="25px" width="25px"/>
            </nav>
          
        </div>
      
    );
  }
  
  export default Nav;