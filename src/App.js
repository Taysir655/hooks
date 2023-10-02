import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import { v4 as uuidv4 } from "uuid";


function App() {
  const [initialMovies] = useState([
    {
      id: uuidv4(),
      title: "Avatar",
      description: "Action",
      rating: 2,
      imageUrl:
        "https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg",
    },
    {
      id: uuidv4(),
      title: "Monster High",
      description: "Drama",
      rating: 2,
      imageUrl:
        "https://imgix.hoyts.com.au/mx/posters/nz/paw-patrol-the-mighty-movie-dcc7f92f.jpg",
    },
    {
      id: uuidv4(),
      title: "Resident Evil",
      description: "Action",
      rating: 4,
      imageUrl:
        "https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg",
    },
    {
      title: "Prince of Persia",
      description: "Action",
      rating: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c0/Monster_High_The_Movie_poster.jpg",
    },
    {
      id: uuidv4(),
      title: "Avatar",
      description: "Comedi",
      rating: 4,
      imageUrl:
        "https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg",
    },
    {
      id: uuidv4(),
      title: "Hitman",
      description: "Kids",
      rating: 3,
      imageUrl:
        "https://imgix.hoyts.com.au/mx/posters/nz/paw-patrol-the-mighty-movie-dcc7f92f.jpg",
    },
    {
      id: uuidv4(),
      title: "Resident Evil",
      description: "Drama",
      rating: 1,
      imageUrl:
        "https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg",
    },
    {
      title: "Prince of Persia",
      description: "Kids",
      rating: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c0/Monster_High_The_Movie_poster.jpg",
    },
    {
      id: uuidv4(),
      title: "Resident Evil",
      description: "Comedi",
      rating: 3,
      imageUrl:
        "https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg",
    },
    {
      title: "Prince of Persia",
      description: "Action",
      rating: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c0/Monster_High_The_Movie_poster.jpg",
    },
  ]);

  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);

  const filterMovies = ({ title, rating }) => {
    const filteredMovies = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (rating === 0 || movie.rating === rating)
      );
    });
    setFilteredMovies(filteredMovies);
  };

  const addMovie = (newMovie) => {
    const updatedMovies = [...movies, { ...newMovie, id: uuidv4() }];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  const editMovie = (editedMovie) => {
    const updatedMovies = movies.map((movie) =>
      movie.id === editedMovie.id ? { ...editedMovie } : movie
    );
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  const removeMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  return (
    <div className="App">
      <Navbar bg="danger" variant="dark">
        <Container className="justify-content-start text-xl padding-navbar">
          <Navbar.Brand className="sizetext navbar-title" href="#home">
            MOVIES
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Filter onFilter={filterMovies} addNewMovie={addMovie} />
      <MovieList
        movies={filteredMovies}
        onRemove={removeMovie}
        onEdit={editMovie}
      />
    </div>
  );
}

export default App;
