
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
    }
};

function fetchUtils(searchValue) {

    // const fetchMovies = (query) => {
    //     const params = new URLSearchParams({ query });
    //     const url = `https://api.themoviedb.org/3/search/movie?${params}`;

    //     return fetch(url, options)
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(data => {
    //             if (data.result) {
    //                 return data.results;
    //             } else {
    //                 throw new Error("Dati non presenti")
    //             }
    //         })
    //         .then(movies => {
    //             return movies.map(movie => {
    //                 return {
    //                     ...movie,
    //                     title: title,
    //                     original_title: original_title,
    //                 }
    //             })
    //         })
    //         .catch(err => console.error(err));
    // }

    // const fetchTvSeries = (query) => {
    //     const params = new URLSearchParams({ query });
    //     const url = `https://api.themoviedb.org/3/search/movie?${params}`;

    //     return fetch(url, options)
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(data => {
    //             if (data.result) {
    //                 return data.results;
    //             } else {
    //                 throw new Error("Dati non presenti")
    //             }
    //         })
    //         .then(movies => {
    //             return movies.map(movie => {
    //                 return {
    //                     ...movie,
    //                     title: name,
    //                     original_title: original_name,
    //                 }
    //             })
    //         })
    //         .catch(err => console.error(err));
    // }

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

    return [fetchMovies, fetchTvSeries];
}

function initCatalog(searchValue) {
    const catalogComplete = Promise.all(fetchUtils(searchValue)).then(response => {
        const arr1 = response[0];
        const arr2 = response[1]
        .map(movie => {
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
        return merge;
    });
    return catalogComplete
}

function getImageURL(path, size = 'original') {
    return `https://image.tmdb.org/t/p/${size}/${path}`;
};



export {
    initCatalog,
    getImageURL,
}   