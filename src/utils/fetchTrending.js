const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
    }
};

function fetchTrendingMovies() {

    return fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
        .then(response => {
            return response.json()
        })
        .then(data => {
            if (data) {
                return data.results;
            } else {
                throw new Error("Dati non presenti")
            }
        })
        .then(movies => {
            return movies
        })
        .catch(err => console.error(err));

}

function fetchTrendingTv() {

    return fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
        .then(response => {
            return response.json()
        })
        .then(data => {
            if (data) {
                return data.results;
            } else {
                throw new Error("Dati non presenti")
            }
        })
        .then(tvs => {
            return tvs.map(tv => {
                const {
                    name,
                    original_name,
                } = tv;
                return {
                    ...tv,
                    title: name,
                    original_title: original_name,
                }
            })
        })
        .catch(err => console.error(err));

}

export { fetchTrendingMovies, fetchTrendingTv }