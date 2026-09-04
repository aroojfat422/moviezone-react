
import { useState } from 'react'

import './App.css'

import inceptionImg from './assets/inception.jpg'
import interstellarImg from './assets/interstellar.jpg'
import avengersImg from './assets/avengers.jpg'
import darkKnightImg from './assets/dark-knight.jpg'
import spidermanImg from './assets/spiderman.jpg'
import avatarImg from './assets/avatar.jpg'
import titanicImg from './assets/titanic.jpg'
import johnImg from './assets/john.jpg'

function App() {
  const movies = [
    {
      name: 'The Dark Knight',
      rating: '9.0',
      genre: 'Action',
      image: darkKnightImg,
      video: '/dark-knight.mp4',
      description:
        'A masked hero fights crime and protects Gotham City from dangerous villains.',
    },
    {
      name: 'Inception',
      rating: '8.8',
      genre: 'Sci-Fi',
      image: inceptionImg,
      video: '/inception.mp4',
      description:
        'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    },
    {
      name: 'Interstellar',
      rating: '8.7',
      genre: 'Sci-Fi',
      image: interstellarImg,
      video: '/interstellar.mp4',
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    },
    {
      name: 'Avengers',
      rating: '8.0',
      genre: 'Action',
      image: avengersImg,
      video: '/avenger.mp4',
      description:
        'A group of superheroes join forces to save the world from a catastrophic threat.',
    },
    {
      name: 'Spider-Man: No Way Home',
      rating: '8.2',
      genre: 'Action',
      image: spidermanImg,
      video: '/spiderman.mp4',
      description:
        'Spider-Man faces a dangerous new challenge when villains from different worlds arrive in his universe.',
    },
    {
      name: 'Avatar',
      rating: '7.8',
      genre: 'Sci-Fi',
      image: avatarImg,
      video: '/avatar.mp4',
      description:
        'A marine discovers the beautiful world of Pandora and becomes involved in a conflict that changes his life.',
    },
    {
      name: 'Titanic',
      rating: '7.9',
      genre: 'Drama',
      image: titanicImg,
      video: '/titanic.mp4',
      description:
        'A young couple from different backgrounds fall in love aboard the legendary Titanic.',
    },
    {
      name: 'John Wick',
      rating: '7.4',
      genre: 'Action',
      image: johnImg,
      video: '/john.mp4',
      description:
        'A retired assassin returns to his dangerous past after a devastating loss forces him back into action.',
    },
  ]

  const [search, setSearch] = useState('')
  const [searchSubmitted, setSearchSubmitted] = useState('')
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [showInfo, setShowInfo] = useState(false)
  const [selectedGenre, setSelectedGenre] = useState('All')
  const [favorites, setFavorites] = useState([])
  const [showFavorites, setShowFavorites] = useState(false)
  const [showPopular, setShowPopular] = useState(false)

  const toggleFavorite = (movieName) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(movieName)) {
        return prevFavorites.filter((name) => name !== movieName)
      }

      return [...prevFavorites, movieName]
    })
  }

  const scrollToMovies = () => {
    document.getElementById('movies').scrollIntoView({
      behavior: 'smooth',
    })
  }

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.name
      .toLowerCase()
      .includes(searchSubmitted.toLowerCase())

    const matchesGenre =
      selectedGenre === 'All' || movie.genre === selectedGenre

    const matchesFavorites =
      !showFavorites || favorites.includes(movie.name)

    const matchesPopular =
      !showPopular || Number(movie.rating) >= 8.0

    return (
      matchesSearch &&
      matchesGenre &&
      matchesFavorites &&
      matchesPopular
    )
  })

  return (
    <div>
      {/* Navbar */}

      <nav className="navbar">
        <h2>MovieZone</h2>

        <div className="nav-links">
          <a href="#home">Home</a>

          <a
            href="#movies"
            onClick={() => {
              setShowFavorites(false)
              setShowPopular(false)
            }}
          >
            Movies
          </a>

          <a
            href="#movies"
            onClick={() => {
              setShowFavorites(false)
              setShowPopular(true)
            }}
          >
            Popular
          </a>

          <a
            href="#movies"
            onClick={() => {
              setShowFavorites(true)
              setShowPopular(false)
            }}
          >
            Favorites
          </a>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setSearchSubmitted(search)
                scrollToMovies()
              }
            }}
          />

          <button
            type="button"
            onClick={() => {
              setSearchSubmitted(search)
              scrollToMovies()
            }}
          >
            Search
          </button>
        </div>
      </nav>

      {/* Hero Section */}

      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-label">#1 FEATURED MOVIE</p>

          <h1>The Dark Knight</h1>

          <div className="hero-meta">
            <span>⭐ 9.0</span>
            <span>Action</span>
            <span>2008</span>
            <span>2h 32m</span>
          </div>

          <p className="hero-description">
            When a menace known as the Joker wreaks havoc and chaos
            on the people of Gotham, Batman must accept one of the
            greatest psychological and physical tests of his ability
            to fight injustice.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="hero-watch-button"
              onClick={() => setSelectedMovie(movies[0])}
            >
              ▶ Watch Now
            </button>

            <button
              type="button"
              className="hero-info-button"
              onClick={() => setShowInfo(true)}
            >
              ⓘ More Info
            </button>
          </div>
        </div>

        <div className="hero-scroll">
          <span>Scroll to explore</span>
          <span>↓</span>
        </div>

        {/* More Info Modal */}

        {showInfo && (
          <div className="info-modal">
            <div className="info-content">
              <button
                type="button"
                className="close-button"
                onClick={() => setShowInfo(false)}
              >
                ✕
              </button>

              <h2>The Dark Knight</h2>

              <div className="hero-meta">
                <span>⭐ 9.0</span>
                <span>Action</span>
                <span>2008</span>
                <span>2h 32m</span>
              </div>

              <p>
                When a menace known as the Joker wreaks havoc and
                chaos on the people of Gotham, Batman must face one
                of the greatest challenges of his life.
              </p>

              <button
                type="button"
                className="hero-watch-button"
                onClick={() => {
                  setShowInfo(false)
                  setSelectedMovie(movies[0])
                }}
              >
                ▶ Watch Movie
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Movies Section */}

      <section className="movies" id="movies">
        <h2>
          {showFavorites
            ? 'My Favorites'
            : showPopular
              ? 'Popular Movies'
              : 'All Movies'}
        </h2>

        <div className="genre-buttons">
          <button
            type="button"
            className={selectedGenre === 'All' ? 'active' : ''}
            onClick={() => setSelectedGenre('All')}
          >
            All
          </button>

          <button
            type="button"
            className={selectedGenre === 'Action' ? 'active' : ''}
            onClick={() => setSelectedGenre('Action')}
          >
            Action
          </button>

          <button
            type="button"
            className={selectedGenre === 'Sci-Fi' ? 'active' : ''}
            onClick={() => setSelectedGenre('Sci-Fi')}
          >
            Sci-Fi
          </button>

          <button
            type="button"
            className={selectedGenre === 'Drama' ? 'active' : ''}
            onClick={() => setSelectedGenre('Drama')}
          >
            Drama
          </button>
        </div>

        <div className="movie-list">
          {filteredMovies.length === 0 ? (
            <p className="no-results">
              No movies found 😔
            </p>
          ) : (
            filteredMovies.map((movie) => (
              <div className="movie-card" key={movie.name}>
                <img
                  src={movie.image}
                  alt={movie.name}
                />

                <h3>{movie.name}</h3>

                <div className="movie-meta">
                  <span>⭐ {movie.rating}</span>

                  <span className="genre-badge">
                    {movie.genre}
                  </span>
                </div>

                <p className="movie-description">
                  {movie.description}
                </p>

                <div className="movie-actions">
                  <button
                    type="button"
                    className="watch-button"
                    onClick={() => setSelectedMovie(movie)}
                  >
                    ▶ Watch Now
                  </button>

                  <button
                    type="button"
                    className="favorite-button"
                    onClick={() => toggleFavorite(movie.name)}
                    aria-label={
                      favorites.includes(movie.name)
                        ? `Remove ${movie.name} from favorites`
                        : `Add ${movie.name} to favorites`
                    }
                  >
                    {favorites.includes(movie.name)
                      ? '♥'
                      : '♡'}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Video Player */}

        {selectedMovie && (
          <div className="movie-modal">
            <div className="modal-content">
              <button
                className="close-button"
                type="button"
                onClick={() => setSelectedMovie(null)}
              >
                ✕
              </button>

              <video controls width="600">
                <source
                  src={selectedMovie.video}
                  type="video/mp4"
                />

                Your browser does not support video.
              </video>

              <div className="modal-info">
                <h2>{selectedMovie.name}</h2>

                <p>⭐ {selectedMovie.rating}</p>

                <p>{selectedMovie.description}</p>

                <button
                  type="button"
                  onClick={() => {
                    const video =
                      document.querySelector(
                        '.modal-content video'
                      )

                    video.play()
                  }}
                >
                  ▶ Watch Now
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}

      <footer className="footer">
  <div className="footer-content">
    <div className="footer-brand">
      <h2>MovieZone</h2>
      <p>
        Your favorite movies, all in one place.
      </p>
    </div>

    <div className="footer-links">
      <a href="#home">Home</a>
      <a href="#movies">Movies</a>
      <a href="#movies">Popular</a>
      <a href="#movies">Favorites</a>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2026 MovieZone. All rights reserved.</p>
    <p>Made with React</p>
  </div>
</footer>
    </div>
  )
}

export default App
