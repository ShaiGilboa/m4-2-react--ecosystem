import React from 'react';
import ListingGrid from './ListingGrid';
import styled from 'styled-components'


const Homepage = ({itemList}) => {
    return (
        <>
            <h2>Home</h2>
            <p>Fruit emporium sells the finest fruits from this world and beyond.

Browse items:</p>
            <ListingGrid itemList={itemList}></ListingGrid>
        </>
    )
}

export default Homepage;