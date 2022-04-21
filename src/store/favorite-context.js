import { useState, createContext } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});


export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetUp) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetUp);
        });
    }

    function removeFavoriteHandler(meetUpId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetUpId);
        });
    }
    function itemIsFavoriteHandler(meetUpId) {
        return userFavorites.some(meetup => meetup.id === meetUpId);
    }


const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler

};

return (
    <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
);


}

export default FavoritesContext;