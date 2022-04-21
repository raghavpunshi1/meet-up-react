import {useContext} from 'react';
import FavoritesContext from '../store/favorite-context';
import MeetUpList from '../components/meetups/MeetUpList'


function Favorites(){

    const favoriteCtx =useContext(FavoritesContext);

    return (
        <section>
            <h1>My Favorites</h1>
            <MeetUpList meetups={favoriteCtx.favorites}/>
        </section>
    )
}
export default Favorites;