import React from 'react'
import styled from 'styled-components'
import HomeCard from './HomeCard';

const LatestSection = ({latestHome}) => {

    return (
        <LatestSectionWrapper>
            <h1>View Our newest Homes</h1>
            <HomeCardContainer>
            {
                latestHome.map((home, index) => <HomeCard home={home} key={index}/>)
            }
            </HomeCardContainer>
        </LatestSectionWrapper>
    )
}


const LatestSectionWrapper = styled.section`
    display : flex;
    flex-direction : column;
`;

const HomeCardContainer = styled.section`
    display : grid;
    grid-template-columns : 1fr 1fr;
    gap : 2rem;
`;



export default LatestSection
