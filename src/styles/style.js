  
import { createGlobalStyle } from "styled-components"
import styled from 'styled-components'
import reset from 'styled-reset'

export const AppContainer = styled.div`
    max-width: 1280px;
    margin: auto;
    box-sizing: border-box;
`

export const GlobalStyle = createGlobalStyle`
    ${reset}
`


export const HeaderDiv = styled.header`
    border-bottom: 2px solid #dddddd;
    height: 70px;
    ${AppContainer} {
        align-items: center;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
`

export const Categories = styled.div`
    width: 70%;
    height: 50px;
`

export const CategoriesList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    height: 100%;
    align-items: center;
`

export const CategoriesItem = styled.li`
    font-weight: bold;
    color:#6d6d6d;
`

export const CategoryLink = styled.a`
    color: #727272;
    text-decoration: none;
    transition: color 0.3s linear;
    cursor: pointer;
    font-family: "Nunito-Bold";
    &:hover {
        color: #000000;
        transition: color 0.3s linear;
    }
`

export const LogoWrapper = styled.div`
    width: 50px;
    height: 50px;
`

export const LogoImage = styled.img`
    max-width: 100%;
    border-radius: 50%;
`


export const Login = styled.button`
    padding: 0;
    border: none;
`

export const LoginLink = styled.a`
    text-decoration: none;
    display:block;
    padding: 10px;
    color: white;
    background-color: #53b3ff;
    transition: background-color 0.3s;
    border-radius: 5px;
    &:hover {
        background-color: #008eff;
        transition: background-color 0.3s;
    }
`

export const CategoryInfo = styled.div`
    padding: 40px 0;
    max-width: 320px;
`

export const CategoryTitle = styled.p`
    font-size: 32px;
    font-weight: bold;
    font-family: "Nunito-Bold";
    margin-bottom: 20px;
`
export const CategoryUnderTitle = styled.p`
    font-family: "Nunito-Regular";
    line-height: 1.5;
`


export const GridLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    grid-auto-rows: 200% 40%;
    grid-auto-flow: dense;
`

export const GridWrapper = styled.div`
    display: grid;
    grid-column-end: span 2;
    grid-row-end: span 2;
`


export const GridItem = styled.div`
    padding: 1rem;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    color: #929796;
    background-color: #333;
    border-radius: 5px;
    grid-column-end: ${props => props.column || 'span 1'};
    grid-row-end: ${props => props.row || 'span 1'};
    &:nth-child(odd) {
        background-color: #424242;
    }
`

export const Span2 = styled.div`
    grid-column-end: span 2;
    grid-row-end: span 2;
`

export const Span3 = styled.div`
    grid-column-end: span 3;
    grid-row-end: span 4;
`







