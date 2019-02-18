import products from '../../../../Products/products';

const ManufactureSorter = () => {
    let filtered = [];
        for (let i = 0; i < products.length; i++) {
            if (!filtered.includes(products[i].manufacture)) {
                filtered.push(products[i].manufacture);
            } 
        };
    return filtered.sort();
}

export default ManufactureSorter;