import React from 'react';
import HeadlineSmall from '../../../SharedComponents/Headlines/HeadlineSmall';
import FeaturedPicker from '../FeaturedPicker/FeaturedPicker';

const FeaturedTablets = () => (
    <div>
        {HeadlineSmall('Tablets')}
        {FeaturedPicker('tablet')}
    </div>
);

export default FeaturedTablets;