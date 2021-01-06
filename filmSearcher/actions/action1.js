export const setTitle = (title) => ({
    type: 'SET_TITLE',
    payload: title,
})

export const setFavourite = (title, image) => ({
    type: 'SET_FAVORITE_ARRAY',
    payload: {
            favoriteMovieTitle: title, 
            favoriteMovieImage: image,
    },
})

export const removeFromFavorite = (arrayOfFavorite, name,img) => ({
    type: 'REMOVE',
    payload: arrayOfFavorite.filter((title, image) => (title.favoriteMovieTitle != name && image.favoriteMovieImage != img)) 
})

export const GET_ARRAY = 'GET_ARRAY'

export const getMovie = (title) => ({
    type: GET_ARRAY,
    payload: title
})

export const getMovieAfter = (arrOfData) => ({
    type: 'GET_ARRAY_AFTER',
    payload: arrOfData
})

// export const getMovieAsync = (dispatch, title) => {
//     const url = 'http://api.tvmaze.com/search/shows?q=';
//     return async() => {
//         try{
//             const response = await fetch(url + title);
//             const arrOfData = await response.json();
//             dispatch(getMovie(arrOfData))
//         }
//         catch(error) {
//             console.log("getMovieAsync" , error)
//         }
//     }
// }