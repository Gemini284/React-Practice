import MovieCard from "../components/MovieCard"
import { useState } from "react";

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const movies= [
        {id:1, title: "Transformers", release_date:"2020"},
        {id:2, title: "Transformers 2", release_date:"2021"},
        {id:3, title: "Transformers 3", release_date:"2023"},
        {id:4, title: "Transformers 4", release_date:"2025"},
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
        
    }

    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form"> 
            <input 
            type="text" 
            placeholder="Search for movies..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map(
                (movie) => 
                movie.title.toLowerCase().startsWith(searchQuery) && (
                    <MovieCard movie={movie} key={movie.id} />
                )
            )}
        </div>
    </div>
    );
}

export default Home