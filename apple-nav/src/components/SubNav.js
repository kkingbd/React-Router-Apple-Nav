import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
const SubNavBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    background: black;
    color: white;
    padding: 1% 10% 0 10%;
    margin-top: 0;

    a{
        color: white;
        text-decoration: none;
    }
    a:hover{
        color: red;
    }
    img {
        object-fit: contain;
        max-height: 30px;
        max-width: 30px;;
    }
`;
const   SubNav = props => {
    const name = props.data.find(
        item=> `${item.name}` === props.match.params.name
    );
    return(
        <SubNavBar >
            {name.subLinks.map(item=> (
                <NavLink to={`/${name.name}/${item.name}`} key={item.name}>
                    <div>
                        <img src= {item.img} alt={item.name} />
                        <p > {item.name} </p>
                    </div>           
                </NavLink>
            ))}
        </SubNavBar>
    );
};

export default SubNav;