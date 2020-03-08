import React from 'react';
import ListingGrid from './ListingGrid';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import {StyledHeader} from './Homepage';

const StyledImg = styled.img`
    display: inline;
    position: absolute;
    border-radius: 10px;
    height: 80px;
    top: 0px;
    left: calc(50% - 40px);
`;

const Seller = ({sellersList, itemList}) => {
    const { sellerId } = useParams();
    const sellerItemDetails = {array: itemList.array.filter(item=>item.sellerId===sellerId), type: 'items'}
    const storeName = sellersList.array.find(seller => seller.id === sellerId).storeName
    const src = sellersList.array.find(seller => seller.id === sellerId).avatarSrc
    return(<StyledHeader>
            <h2>{`${storeName}`} </h2>
            <StyledImg src={src} alt='seller' />
            <ListingGrid list={sellerItemDetails}></ListingGrid>
        </StyledHeader>
    );
}

export default Seller;