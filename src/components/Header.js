import React from 'react';
import { 
    HeaderDiv, 
    AppContainer, 
    LogoWrapper, 
    Categories, 
    Login, 
    CategoriesList, 
    CategoriesItem,
    CategoryLink, 
    LogoImage,
    LoginLink
} from '../styles/style'
export const Header = () => {
    return (
        <HeaderDiv>
            <AppContainer>
                <LogoWrapper>
                    <LogoImage src="http://placekitten.com/50/50"></LogoImage>
                </LogoWrapper>
                <Categories>
                    <CategoriesList>
                        <CategoriesItem>
                            <CategoryLink>World</CategoryLink>
                        </CategoriesItem>
                        <CategoriesItem>
                            <CategoryLink>Sports</CategoryLink>
                        </CategoriesItem>
                        <CategoriesItem>
                            <CategoryLink>Opinions</CategoryLink>
                        </CategoriesItem>
                        <CategoriesItem>
                            <CategoryLink>Lifestyle</CategoryLink>
                        </CategoriesItem>
                        <CategoriesItem>
                            <CategoryLink>Business</CategoryLink>
                        </CategoriesItem>
                        <CategoriesItem>
                            <CategoryLink>Culture</CategoryLink>
                        </CategoriesItem>
                        <CategoriesItem>
                            <CategoryLink>Fashion</CategoryLink>
                        </CategoriesItem>
                        <CategoriesItem>
                            <CategoryLink>Tech</CategoryLink>
                        </CategoriesItem>
                    </CategoriesList>
                </Categories>
                <Login>
                    <LoginLink href="/">Log in / Sign up</LoginLink>
                </Login>
            </AppContainer>
        </HeaderDiv>
    )
}