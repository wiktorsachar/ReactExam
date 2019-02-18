import React from 'react';
import HeadlineSmall from '../../../SharedComponents/Headlines/HeadlineSmall';
import FeaturedPicker from '../FeaturedPicker/FeaturedPicker';


const FeaturedDesktops = () => (
    <div>
        {HeadlineSmall('Desktops')}
        {FeaturedPicker('desktop')}
    </div>
);

export default FeaturedDesktops;