import React from 'react'
import styled from 'styled-components'
import { Button } from './Button';

const InfoSection = ({heading, paragraphOne, paragraphTwo, reverse, buttonLabel, image}) => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button to="/homes" primary="true">{buttonLabel}</Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt='home' />
                </ColumnRight>
            </Container>
        </Section>
    )
}

const Section = styled.section`
    width : 100%;
    height : 100%;
    padding : 4rem 0rem;
`;
const Container = styled.div`
    padding : 3rem calc((100vw - 1300px) / 2);
    display : grid;
    grid-template-columns : 1fr;
    grid-template-rows : 800px;

    @media screen and (min-width : 625px){
        grid-template-columns : 1fr 1fr;
    }


`
const ColumnLeft = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : flex-start;
    line-height : 1.4;
    padding : 1rem 2rem;
    order : ${ props => props.reverse ? '2' : '1'};

    h1 {
        margin-bottom : 1rem;
        font-size : clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-bottom : 2rem;
    }
`
const ColumnRight = styled.div`
    display : flex;
    justify-content : center;
    align-items : flex-start;
    padding : 1rem 2rem;
    order : ${ props => props.reverse ? '1' : '2'};

    @media screen and (min-width : 625px){
        order : ${ props => props.reverse ? '2' : '1'};
    }

    img {
        width : 90%;
        height : 90%;
        object-fit : cover;

        @media screen  and (min-width : 625px){
            width : 100%;
            height : 100%;
        }
    }
`

export default InfoSection
