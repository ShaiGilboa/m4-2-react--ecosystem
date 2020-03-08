import React from 'react';
import {NavLink, Link} from 'react-router-dom';
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
    background: rgb(102,2,60);
    background: linear-gradient(180deg, rgba(102,2,60,1) 0%, rgba(152,77,101,1) 79%, rgba(113,61,127,1) 100%);
    width:100%;
    a {
        text-decoration: none;
        color: #262322;
        margin-right:30px;
    }
    .header {
        flex:1;
        font-size:3rem;
        font-weight:bold;
        color: #262322;
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <h1 className='header'><Link to='/'>Fruit Emporium</Link></h1>
            <NavLink to='/' exact activeStyle={{fontWeight: "bold",color: "#E1AD01", borderBottom: "2px solid #E1AD01", width: 'fit-content'}}>
                <StyledLink >Home</StyledLink>
            </NavLink>
            <NavLink to='/about' exact activeStyle={{fontWeight: "bold",color: "#E1AD01", borderBottom: "2px solid #E1AD01", width: 'fit-content'}}>
                <StyledLink>About</StyledLink>
            </NavLink>
            <NavLink to='/Sellers' exact activeStyle={{fontWeight: "bold",color: "#E1AD01", borderBottom: "2px solid #E1AD01", width: 'fit-content'}}>
                <StyledLink>Sellers</StyledLink>
            </NavLink>
        </StyledHeader>
    )
}
export default Header