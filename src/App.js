import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { GlobalStyle } from './GlobalStyles';

export const App = () => (
    <>
        <GlobalStyle />
        <ListOfCategories />
        <ListOfPhotoCards />
    </>
)