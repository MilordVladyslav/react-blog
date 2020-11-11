import React from 'react'
import { AppContainer, GridLayout, GridItem, Span3, Span2, Title, ReadMore } from "../styles/style"
import { CategoryDescription } from '../components/CategoryDescription'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export const Content = () => {
    
    return (
        <AppContainer>
            <CategoryDescription></CategoryDescription>
            <GridLayout>
                <GridItem column="span 2">
                    <Title>Wake Up and smell the coffee</Title>
                    <ReadMore><Link to="/dashboard">Read more...</Link></ReadMore>
                </GridItem>
                <GridItem row="span 2">
                    <Title>Wake Up and smell the coffee</Title>
                    <ReadMore><a href="#">Read more...</a></ReadMore>
                </GridItem>
                <GridItem row="span 2">
                    <Title>Wake Up and smell the coffee</Title>
                    <ReadMore><a href="#">Read more...</a></ReadMore>
                </GridItem>
                <GridItem column="span 1" row="span 2">
                    <Title>Wake Up and smell the coffee</Title>
                    <ReadMore><a href="#">Read more...</a></ReadMore>
                </GridItem>
                <GridItem row="span 2">
                    <Title>Wake Up and smell the coffee</Title>
                    <ReadMore><a href="#">Read more...</a></ReadMore>
                </GridItem>
                <GridItem column="span 2">
                    <Title>Wake Up and smell the coffee</Title>
                    <ReadMore><a href="#">Read more...</a></ReadMore>
                </GridItem>
            </GridLayout>
        </AppContainer>
    )
}