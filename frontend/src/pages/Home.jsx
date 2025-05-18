import MovieCard from "../components/MovieCard"

function Home(){
    const movies= [
        {id:1, title: "Transfomrmers", release_date:"2020"},
        {id:2, title: "Transfomrmers 2", release_date:"2021"},
        {id:3, title: "Transfomrmers 3", release_date:"2023"},
        {id:4, title: "Transfomrmers 4", release_date:"2025"},
    ];

    const handleSearch = () => {

    }

    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form"> 
            <input type="text" placeholder="Search for movies..." className="search-input"/>
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
    );
}

export default Home