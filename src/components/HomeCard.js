import React from 'react'
import styled from 'styled-components'
import { FaArrowCircleRight } from 'react-icons/fa'
import { Button } from './Button'

const HomeCard = ({home}) => {
    return (
        <Column>
            <img src={home.image} alt="home" />
            <h3>{home.title}</h3>
            <Button to="/" primary="true" css={`background : #FFF`}>View Details <Arrow /></Button>
        </Column>
    )
}

const Column = styled.div`

    img { 
        width : 100%;
        height : 50%;
        object-fit : cover;
    }

    h3 { 
        font-size : 1.5rem;
        font-weight : 500;
    }
`;


const Arrow = styled(FaArrowCircleRight)`
    margin-left : 16px;
`;

export default HomeCard
