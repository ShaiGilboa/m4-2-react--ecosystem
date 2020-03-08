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
    p{
        font-size:1rem;
        text-decoration:none;
    }
`;

const Seller = ({sellersList, itemList}) => {
    const { sellerId } = useParams();
    const sellerItemDetails = {array: itemList.array.filter(item=>item.sellerId===sellerId), type: 'items'}
    const seller = sellersList.array.find(seller => seller.id === sellerId)
    return(<StyledHeader>
            <h2>{`${seller.storeName}`} - </h2><p>{`${seller.description}`}</p>
            <StyledImg src={seller.avatarSrc} alt='seller' />
            <ListingGrid list={sellerItemDetails}></ListingGrid>
        </StyledHeader>
    );
}

export default Seller;