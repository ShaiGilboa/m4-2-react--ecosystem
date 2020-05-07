import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    font-family: 'Open Sans', sans-serif;
    h2, p{
        color: #D7D6D6;
        margin-left: 20px;
        margin-right: 20px;
    }
    h2 {
        width:fit-content;
        border-bottom: 2px solid ;
        &:hover{
            border-bottom: 2px solid #73493C;
        }
    }
`;


const About = () => {
    return (
        <StyledHeader>
            <h2>About</h2>
            <p>Fruit emporium is founded on a very simple principle: Fruit is good. </p>
            <p>We carry the finest selection of produce from around the world, from tart citrus to sweet cherries.</p>
            <p>Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.</p>
        </StyledHeader>
    )
}

export default About;