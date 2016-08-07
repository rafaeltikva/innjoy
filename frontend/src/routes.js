import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/App'
import * as pages from './components/pages'

console.log('configuring routes');

export default (
    <Route path="/" component={App}>
        <IndexRoute component={pages.Home}/>
        <Route path="/front-desk" component={pages.FrontDesk}/>
        <Route path="/room-service" component={pages.RoomService}/>
        <Route path="/amenities" component={pages.Amenities}>
            <Route type="categories" path="/amenities/:amenity"
                   components={{amenityComponent: pages.Amenity, amenityCategoriesComponent: pages.AmenityCategories}}>
                <Route type="resource" path="/amenities/:amenity/(:amenityResource)" component={pages.Amenity}/>
            </Route>
        </Route>
        <Route path="/transportation" component={pages.Transportation}/>
        <Route path="/gift-shop" component={pages.GiftShop}>
            <Route path="/gift-shop/:item" component={pages.GiftShopItem}/>
        </Route>
        <Route path="/nearby" component={pages.Nearby}>
            <Route path="/nearby/restaurants" component={pages.Restaurants}>
                <Route path="/nearby/restaurants/:restaurant" component={pages.Restaurant}/>
            </Route>
            <Route path="/nearby/coffee" component={pages.CoffeeShops}>
                <Route path="/nearby/coffee/:coffeeShop" component={pages.CoffeeShop}/>
            </Route>

            <Route path="/nearby/fun" component={pages.Fun}>
                <Route path="/nearby/fun/:funActivity" component={pages.FunResource}/>
            </Route>

            <Route path="/nearby/shopping" component={pages.Shopping}>
                <Route path="/nearby/shopping/:shoppingLocation" component={pages.ShoppingResource}/>
            </Route>
        </Route>
        <Route path="/search(/)" component={pages.SearchResults}/>
        <Route path="*" component={pages.NotFound}/>
    </Route>
);

