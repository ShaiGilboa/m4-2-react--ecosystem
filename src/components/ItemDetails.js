import { useParams, Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import {sellers} from '../data';

const StyledItemDetails = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: start;
    margin-left: 5vw;
    div{
        display:flex
        width:auto;
    }
`;

const StyledDetails = styled.span`
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    margin-left:20px;
    div{
        flex-direction:column;
    }
    h2 {
        font-size: 4rem;
        margin:0;
        color: #262322;

    }
    .subHeading{
        font-style: italic;
        color: lightgrey;
        font-size: 1.5rem;
        margin:0;
    }
    .description{
        margin-bottom:0;
        color:tomato;
    }
    .origin {
        font-style: italic;
        color: grey;
        span{
            font-weight:bold;
        }
    }
    button {
        width:200px;
        border-radius:10px;
        padding: 80px auto;
        text-align: center;
        color: white;
        background-color:blue;
        border:none;
        font-size:1.3rem
        &:hover{
        cursor: pointer;
    }
    }
    .sold-by {
        span {
            font-weight:bold;
        }
    }
    .seller-info{
        flex-direction: row;
        align-items:center;
        .seller-photo {
            width:10vh;
            height:10vh;
            border-radius:10vh;
            margin-right:10px;
        }
        .seller-description {
            margin:0;
            font-size:.5rem;
            margin-left:10px;
            display: inline-block;
            vertical-align: text-bottom;
        }
        a{
            text-decoration: none;
            color: #262322;
        }
    }
`;

const StyledImg = styled.img`
    border-radius: 10px;
    height:70vh;
`;


const ItemDetails = ({itemList}) => {
    const { itemId } = useParams();
    const itemDetails = itemList.array.filter(item=>item.id===itemId)[0]
    const sellersArr = Object.values(sellers)
    const seller = sellersArr.find(seller=> seller.id === itemDetails.sellerId)
    return (
        <StyledItemDetails>
            <div>
                <StyledImg src={itemDetails.imageSrc} alt={itemDetails.name}/>
                <StyledDetails>
                    <div>
                        <h2>{itemDetails.name}</h2>
                        <p className='subHeading'>{itemDetails.latinName}</p>
                    </div>
                    <div>
                        <p className='description'>{itemDetails.description}</p>
                        <p className='origin'>Product of <span>{itemDetails.countryOfOrigin}</span></p>
                    </div>
                    <button><p>${itemDetails.price} - Buy Now</p></button>
                    <div className='seller-info'>
                        <img src={seller.avatarSrc} alt='seller-avatar' className='seller-photo'/>
                        <Link to={`/sellers/${seller.id}`}>
                            <p className='sold-by'>sold by: <span>{seller.storeName}</span></p>
                        </Link>
                    </div>
                </StyledDetails>
            </div>
        </StyledItemDetails>
    )
};

export default ItemDetails;