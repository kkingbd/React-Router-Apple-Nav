import React from 'react'
import { NavLink } from "react-router-dom";

const Home = props =>{
    return(
        <nav>
            <NavLink to='/'>
                <img src = 'http://logok.org/wp-content/uploads/2014/04/Apple-logo-grey-880x625.png' alt= 'apple Icon' />
            </NavLink>
            {props.data.map( item =>(
                <div 
                    key ={item.name}
                    className = 'main-nav-item'
                    onClick= { () => props.history.push(`/${item.name}`)}
                >
                  {item.name}
                </div>
            ))}
        </nav>
    );
};
export default Home;
