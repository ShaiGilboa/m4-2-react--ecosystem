import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const StyledItem = styled.div`
    width:80vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
    img{
        width: 100px;
        height: 100px;
        border-radius: 10px;
        margin: 5px auto 0;
    }
    a {
        margin: 10px;
        width: 120px;
        border-radius: 10px;
        box-shadow: 5px 10px 10px #888888;
        display: flex;
        flex-direction: column;
        justify-content: start;
        text-align: center;
        text-decoration: none;
        color:black;
        &:hover{
        cursor: pointer;
    }
    }   
`;

const ListingGrid = ({ itemList }) => {
    console.log(itemList)
    return (<StyledItem>
                {itemList.map(item=>{
                return (
                    <Link to={`/items/${item.id}`} key={`item-${item.name}`}>
                        <img src={item.imageSrc} alt={item.name} />
                        <p>{item.name}</p>
                        <p>{item.latinName}</p>
                    </Link>
                    )
                })
        }
        </StyledItem>)    
}

ListingGrid.propTypes = {
    itemList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            latinName: PropTypes.string.isRequired,
            imageSrc: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ListingGrid;