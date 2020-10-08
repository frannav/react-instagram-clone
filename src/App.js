import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';

export const App = () => (
    <>
        <GlobalStyle />
        <Logo />
        <ListOfCategories />
        <ListOfPhotoCards />
    </>
)