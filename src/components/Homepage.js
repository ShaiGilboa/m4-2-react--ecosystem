import React from 'react';
import ListingGrid from './ListingGrid';
import styled from 'styled-components'

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

const Homepage = ({itemList}) => {
    return (
        <StyledHeader>
            <h2>Home</h2>
            <p>Fruit emporium sells the finest fruits from this world and beyond. Browse items:</p>
            <ListingGrid list={itemList}></ListingGrid>
        </StyledHeader>
    )
}

export default Homepage;
export {StyledHeader};