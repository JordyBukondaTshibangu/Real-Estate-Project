import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { FaArrowCircleRight } from 'react-icons/fa'
import { IoArrowForwardCircle, IoArrowBackCircle } from 'react-icons/io5'
import { Button } from './Button';

const Hero = ({slides}) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => current === length -1 ? 0 : current + 1)
        }

        timeout.current = setTimeout(nextSlide, 10000);

        return function(){
            if(timeout.current){
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])

    const nextSlide = () => {

        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current === length -1 ? 0 : current + 1)
    }    
    const prevSlide = () => {

        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0 ) return null;


    return (
        <HeroSection>
            <HeroWrapper>
                {
                    slides.map((slide, index) => (
                        <HeroSlide key={index}>
                           {
                               index === current && 
                               <HeroSlider>
                               <HeroImage src={slide.image} alt={slide.alt}/>
                               <HeroContent>
                                   <h1>{slide.title}</h1>
                                   <p>{slide.price}</p>
                                   <Button 
                                       to={slide.path} 
                                       primary='true' 
                                       css={`max-width : 160px;`}>
                                           {slide.label}
                                           <Arrow />
                                   </Button>
                               </HeroContent>
                           </HeroSlider>
                           }
                        </HeroSlide>
                    ))
                }
                <SliderButtons>
                    <NextArrow onClick={prevSlide}/>
                    <PrevArrow onClick={nextSlide}/>
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}


const HeroSection = styled.section`
    height : 100vh;
    max-height : 1100px;
    position : relative;
    overflow : hidden;
`

const HeroWrapper = styled.div`
position : relative;
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    overflow : hidden;
`

const HeroSlide = styled.div`
    z-index : 1;
    width : 100%;
    height : 100%;
`;
const HeroSlider = styled.div`
    position : absolute;
    top : 0;
    left: 0;
    width 100%;
    height : 100%;
    display : flex;
    justify-content: center;
    align-items : center;

    &::before {
        content : '';
        position : absolute;
        z-index : 2;
        width : 100%;
        height: 100vh;
        bottom : 0;
        left : 0;
        overflow : hidden;
        opacity : .4;
        background : liner-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0.6) 100%,
        )
    }
     
`;
const HeroImage = styled.img`
    position : absolute;
    top : 0;
    left: 0;
    width 100%;
    height : 100%;
    object-fit : cover;
`;
const HeroContent = styled.div`
position : relative;
z-index : 10;
display : flex;
flex-direction : column;
max-width : calc(100% - 100px);
color : #FFF;

h1 { 
    font-size : clamp(1rem, 8vw, 2rem);
    text-shadow : 0 0 20px rgba(0, 0, 0, 0.4);
    text-align : left;
    margin-bottom : 0.8rem;
}
`

const Arrow = styled(FaArrowCircleRight)`
    margin-left : 16px;
`;

const SliderButtons = styled.div`
    z-index: 12;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const arrowButtons = css`
    width : 50px;
    height : 50px;
    color : #FFF;
    cursor : pointer;
    background : #000D1A;
    border-radius : 50px;
    padding : 10px;
    margin-right : 1rem;
    user-select : none;
    transition : 0.3s;

    &:hover {
        background : #CD853F;
        transform : scale(1.05);
    }
`
const PrevArrow = styled(IoArrowForwardCircle)`
${arrowButtons}
`;
const NextArrow = styled(IoArrowBackCircle)`
${arrowButtons}
`;


export default Hero
