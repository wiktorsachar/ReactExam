import React from 'react';
import products from '../../../../Products/products';
import ProductBox from '../../../SharedComponents/ProductBox/ProductBox';


const SearchFilter = (input) => {
    let x = input.toLowerCase();

    let filtered = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].manufacture.toLowerCase().includes(x) || products[i].name.toLowerCase().includes(x)) {
            filtered.push(products[i]);
        } 
    };

    let filterPicker;
    if (filtered.length === 0) {
        return (<div class="column-right">
            <div class="products">
                <p>No matching results</p>
            </div>
        </div>)
    } else {
        filterPicker = filtered;
    }
    return (
        <div class="column-right">
            <div class="products">
                {filterPicker.map((element) => 
                    ProductBox(element)
                )}
            </div>
        </div>
    )
};

export default SearchFilter;