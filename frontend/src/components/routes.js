import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './App'
import {Home, FrontDesk, Amenities, Amenity, AmenityCategories, RoomService, Transportation, GiftShop, GiftShopItem} from './pages'

console.log('configuring routes');

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/front-desk" component={FrontDesk}/>
        <Route path="/room-service" component={RoomService}/>
        <Route path="/amenities" component={Amenities}>
            <Route type="categories" path="/amenities/:amenity" components={{amenityComponent: Amenity, amenityCategoriesComponent: AmenityCategories}}>
                <Route type="resource" path="/amenities/:amenity/(:amenityResource)" component={Amenity}/>
            </Route>
        </Route>
        <Route path="/transportation" component={Transportation}/>
        <Route path="/gift-shop" component={GiftShop}>
            <Route path="/gift-shop/:item" component={GiftShopItem} />
        </Route>

    </Route>
);

