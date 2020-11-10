import React from 'react'
import { AppContainer, GridLayout, GridItem, Span3, Span2 } from "../styles/style"
import { CategoryDescription } from './CategoryDescription'
export const Content = () => {
    return (
        <AppContainer>
            <CategoryDescription></CategoryDescription>
            <GridLayout>
                <GridItem column="span 2">Hello</GridItem>
                <GridItem row="span 2">Helo</GridItem>
                <GridItem row="span 2">Helo</GridItem>
                <GridItem column="span 1" row="span 2">Hello</GridItem>
                <GridItem row="span 2">Helo</GridItem>
                <GridItem column="span 2">Helo</GridItem>
            </GridLayout>
        </AppContainer>
    )
}