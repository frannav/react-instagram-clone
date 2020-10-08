import React, { useEffect, useState } from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';

function useCategoriesData() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(function () {
        setLoading(true)
        fetch('https://instagram-clone-api.vercel.app/categories')
            .then(res => res.json())
            .then(response => {
                setCategories(response)
                setLoading(false)
            })
    
    }, []);

    return { categories }
}

export const ListOfCategories = () => {
    const { categories, loading }= useCategoriesData();
    const [showFixed, setShowFixed] = useState(false);


    useEffect(function () {
        const onScroll = (e) => {
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed &&
            setShowFixed(newShowFixed)
        }

        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed]);

    const renderList = (fixed) => (
        <List fixed={fixed}>
            {
                loading ? 
                <h1>Loading categories...</h1>
                :
                categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
            }
        </List>
    )

    return (
        <>
            {renderList()}
            {showFixed && renderList(true)}
        </>
    )
}