

function useFetch(searchValue) {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
        }
    };

    const fetchMovies = fetch(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`, options)
        .then(response => {
            return response.json()
        })
        .then(data => data.results)
        .catch(err => console.error(err));

    const fetchTvSeries = fetch(`https://api.themoviedb.org/3/search/tv?query=${searchValue}&include_adult=false&language=en-US&page=1`, options)
        .then(response => {
            return response.json()
        })
        .then(data => data.results)
        .catch(err => console.error(err));

    // return fetch(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`, options)
    //     .then(response => {
    //         return response.json()
    //     })
    //     .then(data => data)
    //     .catch(err => console.error(err));

    return [fetchMovies, fetchTvSeries];
}

function initCatalog(searchValue) {
    const catalogComplete = Promise.all(useFetch(searchValue)).then(response => {
        const arr1 = response[0];
        const arr2 = response[1].map(movie => {
            const {
                original_name,
                name,
            } = movie;

            return {
                ...movie,
                original_title: original_name,
                title: name,
            }
        })

        const merge = [...arr1, ...arr2];
        console.log(arr1);
        console.log(arr2);

        return merge;

    });
    return catalogComplete
}



export {
    initCatalog
}   