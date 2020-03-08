import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const StyledItem = styled.div`
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
    color: #73493C;
    img{
        width: 100px;
        height: 100px;
        border-radius: 10px;
        margin: 5px auto 0;
    }
    a {
        background-color: #73493C;;
        margin: 10px;
        width: 200px;
        border-radius: 10px;
        box-shadow: 5px 10px 10px #8D8D92;
        display: flex;
        flex-direction: column;
        justify-content: start;
        text-align: center;
        text-decoration: none;
        color: #73493C;
        &:hover{
            cursor: pointer;
            color:#D7D6D6;
        }
    }   
`;

const ListingGrid = ({ list }) => {
    return (
            <StyledItem>
                {list.array.map(item=>{
                    return (
                        <Link to={`/${list.type}/${item.id}`} key={`${list.type}-${item.name}`}>
                            <img src={item.imageSrc} alt={item.name} />
                            <p>{item.name}</p>
                            <p>{item.latinName}</p>
                        </Link>
                        )
                    })
                }
            </StyledItem>
            )    
}

ListingGrid.propTypes = {
    type: PropTypes.string.isRequired,
    array: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            latinName: PropTypes.string.isRequired,
            imageSrc: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ListingGrid;