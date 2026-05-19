const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
    }
};

function fetchTrending() {

    return fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
        .then(response => {
            return response.json()
        })
        .then(data => {
            if (data) {
                console.log(data.results);
                
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

export default fetchTrending