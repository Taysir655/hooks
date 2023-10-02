import React from "react";
import MovieCard from "../components/MovieCards";

function MovieList({ movies, onRemove, onEdit }) {
  const handleRemoveMovie = (id) => {
    onRemove(id);
  };

  return (
    <div className="movie-list-container">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          {...movie}
          ratingstars={movie.rating}
          onRemove={handleRemoveMovie}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default MovieList;
