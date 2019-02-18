import React from 'react';
import HeadlineBig from '../SharedComponents/Headlines/HeadlineBig';
import FeaturedDesktops from './Components/FeaturedDesktops/FeaturedDesktops';
import FeaturedTablets from './Components/FeaturedTablets/FeaturedTablets';

const Mainpage = () => (
    <div class="container">
    {HeadlineBig('Welcome to our store')}
    <FeaturedDesktops />
    <FeaturedTablets />
    
</div>
);

export default Mainpage;