import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components'

const StyledLink = styled.p`
    margin: auto 10px;

    &:hover{
        cursor: pointer;
    }
`;

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items:center;
    font-family: 'Open Sans', sans-serif;
    background-color:#984D65;
    h1 {
        flex:1;
        font-size:3rem;
        font-weight:bold;
    }
    a {
        text-decoration: none;
        color:black;
        margin-right:30px;
    }
`;

const Header = ({}) => {
    return (
        <StyledHeader>
            <h1 >Fruit Emporium</h1>
            <NavLink to='/' exact activeStyle={{fontWeight: "bold",color: "red"}}>
                <StyledLink >Home</StyledLink>
            </NavLink>
            <NavLink to='/about' exact activeStyle={{fontWeight: "bold",color: "red"}}>
                <StyledLink>About</StyledLink>
            </NavLink>
        </StyledHeader>
    )
}
export default Header