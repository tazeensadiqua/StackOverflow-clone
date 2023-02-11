import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTags, faUser } from '@fortawesome/free-solid-svg-icons'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from  '../../assets/Globe.svg'

const LeftSidebar = () => {
    

    return (
        
   

        <div className='left-sidebar'>
            
            <nav className='side-nav'>
                <NavLink to='/' className='side-nav-links' activeclassname='active'>
                    <p>Home</p>
                </NavLink>
                <div className='side-nav-div'>
                    <div className="Public"><p>PUBLIC</p></div>
                    <NavLink to='/Questions' className='side-nav-links' activeclassname='active'>
                        <img src={Globe}  alt="Globe" />
                        <p style={{paddingLeft: "10px"}}> Questions </p>
                    </NavLink>
                    <NavLink to='/Tags' className='side-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}>
                        <p>Tags</p>
                    </NavLink>
                    <NavLink to='/Users' className='side-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}>
                        <p>Users</p>
                    </NavLink>
                </div>
            </nav>
                
                
                
                <nav className='logo-sidebar'>
            
                
                <NavLink to='/' className='side-nav-links' activeclassname='active' style={{paddingLeft: "8px"  , paddingBottom: "15px"}}>
                <p><FontAwesomeIcon icon={faHome} /> </p>
                </NavLink>
                
                
                
                <NavLink to='/Questions' className='side-nav-links' activeclassname='active' style={{paddingLeft: "8px" , paddingBottom: "15px"}}  >
               
                <img src={Globe}  alt="Globe" />
                </NavLink>
                <NavLink to='/Tags' className='side-nav-links' activeclassname='active' style={{paddingLeft: "8px"  , paddingBottom: "15px"}}>
                <p><FontAwesomeIcon icon={faTags} /> </p>
                </NavLink>
                <NavLink to='/Users' className='side-nav-links' activeclassname='active' style={{paddingLeft: "8px"  , paddingBottom: "15px"}}>
                <p><FontAwesomeIcon icon={faUser} /> </p>
                </NavLink>
                
                
                </nav>
                
            
        </div>
    
    )
}

export default LeftSidebar
