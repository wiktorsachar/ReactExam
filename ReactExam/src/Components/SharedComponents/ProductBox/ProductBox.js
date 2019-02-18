import React from 'react';

const ProductBox = (data) => {
    let fixedName;
    if (data.name.includes(data.manufacture)) {
        fixedName = data.name;
    } else {
        fixedName = data.manufacture + ' ' + data.name;
    };

    return (
        <div class="product">
            <img src={data.image} alt={fixedName}/>
            <p class="price">{"$" + data.amount}</p>
            <h3>{fixedName}</h3>
        </div>
)};

export default ProductBox; 