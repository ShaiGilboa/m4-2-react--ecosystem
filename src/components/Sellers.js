import React from 'react';
import ListingGrid from './ListingGrid';
import {StyledHeader} from './Homepage';


const Sellers = ({sellersList}) => {
    sellersList.array.forEach(seller => {
        seller.name = seller.id;
        seller.imageSrc = seller.avatarSrc;
        seller.latinName = seller.description;
    });
    return(<StyledHeader>
            <h2>Sellers</h2>
            <ListingGrid list={sellersList}></ListingGrid>
        </StyledHeader>
    );  
}

export default Sellers;