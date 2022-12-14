const API_KEY = "https://www.themoviedb.org/documentation/api?language=en-US to get key ";
// use to validate key https://api.themoviedb.org/3/movie/popular?api_key=API KEY HERE


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    
    //movies
    fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    
    //tv shows    
    fetchFamilyTV: `/discover/tv?api_key=${API_KEY}&with_genres=10751`,
    fetchAnimationTV: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
    fetchComedyTV: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchSciFiTV: `/discover/tv?api_key=${API_KEY}&with_genres=878`,
    
    
    




}

export default requests;


