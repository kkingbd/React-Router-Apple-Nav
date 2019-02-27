import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Nav = styled.div`
 display : flex;
 flex-wrap: wrap;
 justify-content: space-around;
 background: black;
 max-height: 100px;
 align-items: center;
 padding: 1%;
 .appleLogo{
     height: 70px;
     width: 70px;
 }
 .main-nav{
   color: white;
   cursor: pointer;
 }
 .main-nav:hover{
       color: red;
   }
`;

const Home = props =>{
    return(
        <Nav>
            <NavLink to='/'>
                <img className= 'appleLogo' src = 'http://logok.org/wp-content/uploads/2014/04/Apple-logo-grey-880x625.png' alt= 'apple Icon' />
            </NavLink>
            {props.data.map( item =>(
                <div 
                    key ={item.name}
                    className = 'main-nav'
                    onClick= { () => props.history.push(`/${item.name}`)}
                >
                  {item.name}
                </div>
            ))}
        </Nav>
    );
};
export default Home;
