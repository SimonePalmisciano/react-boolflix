

function useFetch(searchValue) {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
        }
    };

    return fetch(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`, options)
        .then(response => {
            return response.json()
        })
        .then(data => data)
        .catch(err => console.error(err));
}


export default useFetch