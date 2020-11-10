import styled from "styled-components"

export const AppContainer = styled.div`
    max-width: 1280px;
    margin: auto;
    box-sizing: border-box;
    height: 100%;
    align-items: center;
`


export const HeaderDiv = styled.header`
    border-bottom: 2px solid #dddddd;
    height: 70px;
    ${AppContainer} {
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