import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import Header from '../components/Header';
import Movie from '../components/Movie';
import Home from '../css/PageHome.module.css';
import Carousel from 'react-bootstrap/Carousel';
import Slide from '../css/Carousel.module.css';
import { Link } from 'react-router-dom';

function PageHome() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [isScroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, [isScroll]);
  console.log('isScroll', isScroll);

  const getMovies = async () => {
    const json = await (
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
      )
    ).json();
    const movies = json.data.movies;
    setMovies(movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <main>
      {loading ? (
        <div className={Home.loadingWrap}>
          <Loading />
        </div>
      ) : (
        <div className="content">
          <Header propHeader={isScroll} />
          <div className={Home.bannerWrap}>
            <Carousel fade className={Slide.carouselWrap}>
              {movies.map((movie) => (
                <Carousel.Item
                  className={Slide.carouselHeight}
                  key={movie.id}
                >
                  <img
                    className={Slide.carouselImg}
                    src={movie.background_image_original}
                    alt={movie.title}
                  />
                  <Carousel.Caption
                    className={Slide.carouselCaption}
                  >
                    <h1>{movie.title}</h1>
                    <p>{movie.summary}</p>
                    <button>
                      <Link to={`/movie/${movie.id}`}>
                        go Detail
                      </Link>
                    </button>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className={Home.container}>
            <h1 className={Home.title}>Now Playing</h1>
            <div className={Home.movieList}>
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  propCover_image={movie.medium_cover_image}
                  propTitle={movie.title}
                  propSummary={movie.summary}
                  propGenres={movie.genres}
                  propGId={movie.id}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
export default PageHome;
