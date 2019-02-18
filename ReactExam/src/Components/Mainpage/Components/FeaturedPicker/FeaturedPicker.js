import React from 'react';
import ProductBox from '../../../SharedComponents/ProductBox/ProductBox';
import products from '../../../../Products/products';

const FeaturedPicker = (key) => {
    let featuredSorter = [];
    let displayedElements = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].featured && products[i].category === key) {
            featuredSorter.push(products[i]);
        }
    }
    while (displayedElements.length !== 4) {
        let randomPicker = Math.floor(Math.random() * featuredSorter.length);
        if (!displayedElements.includes(featuredSorter[randomPicker])) {
            displayedElements.push(featuredSorter[randomPicker]);
        }
    }
    return (
        <div class = 'products'>
            {displayedElements.map((element) => 
                ProductBox(element)
            )}
        </div>
    )
};

export default FeaturedPicker;
