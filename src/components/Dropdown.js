import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { menuData } from '../data/MenuData'
import { Button } from './Button'

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <DropdownContainer  isOpen={isOpen} onClick={toggle}> 
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {
                        menuData.map((item, index) => <DropdownLink key={index} to={item.link}>
                            { item.title }
                        </DropdownLink> )
                    }
                </DropdownMenu>
                <ButtonWrapper>
                    <Button primary="true" round="true" big="true" to="/contact">
                        Contact Us
                    </Button>
                </ButtonWrapper>
            </DropdownWrapper>
        </DropdownContainer>
    )
}



const DropdownContainer = styled.div`
    position : fixed;
    z-index : 100;
    width : 100%;
    height : 100%;
    background : #CD853F;
    display : grid;
    align-items : center;
    left : 0;
    transition : .3s ease-in-out;
    opacity : ${ props => props.isOpen ? '1' : '0'};    
    top :${ props => props.isOpen ? '0' : '-100%'};
`
const Icon = styled.div`
    position : absolute;
    top : 1.2rem;
    right : 1.5rem;
    background : transparent;
    font-size : 2rem;
    cursor : pointer;
    outline : none;
`;
const CloseIcon = styled(FaTimes)`
    color : #000D1A;
`;
const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
    display : grid;
    grid-template-columns : 1fr;
    grid-template-rows : repeat(4, 80px);
    text-align : center;
    margin-bottom : 4rem;
`;

const DropdownLink = styled(Link)`
    display : flex;
    align-items : center;
    justify-content : center;
    color : #FFF;
    font-size : 1.5rem;
    text-decoration : none;
    list-style : none;
    cursor : pointer;
    transition : .2s ease-in-out;

    &:hover {
        color : #000D1A
    }

`;
const ButtonWrapper = styled.div`
    display : flex;
    justify-content : center;
`;

export default Dropdown
