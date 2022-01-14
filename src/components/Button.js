import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
    background : ${ props => props.primary ? '#000D1A' : '#CD853F'};
    color : ${ props => props.primary ? '#FFF' : '#000D1A'};
    padding : ${ props => props.big ? '1rem 2.5rem' : '.875rem 1.5rem '};
    font-size : ${ props => props.big ? '1.25rem' : '.875rem'};
    min-width : 100px;
    max-width : 200px;
    border : none;
    outline : none;
    cursor : pointer;
    text-decoration : none;
    display : flex;
    justify-content : center;
    align-items : center;

    &:hover {
        transform : translateY(-2px);
    }
`