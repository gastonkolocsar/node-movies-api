var movies = new Map();
var index = 1;

// movies.set("1", {title: "Terminator 2",
// plot: "An android travels back from the future....",
// releaseDate: 1991-10-14,
// actors: [
// "Arnold S.",
// "Linda Hamilton",
// ],
// duration: 142,
// poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
// rating: "R"});

// movies.set("2", {title: "The Shawshank Redemption",
// plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
// releaseDate: 1994-10-14,
// actors: [
// "Tim Robbins",
// "Morgan Freeman",
// "Bob Gunton",
// "William Sadler",
// ],
// duration: 142,
// poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
// rating: "PG"
// });

module.exports = {
    movies: movies,
    saveMovie: function(data){
        movies.set(index.toString(), data);
        index++;
    }
};