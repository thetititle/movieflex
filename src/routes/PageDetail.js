import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Style from '../css/PageDetail.module.css';

function PageDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      const jsonData = await response.json();
      setMovie(jsonData.data.movie);
    }
    getData();
  }, [id]);
  console.log(movie);
  return (
    <div className="content">
      <Header />
      <section className={Style.section}>
        <div className={Style.movieInfoWrap}>
          <img
            src={movie.large_cover_image}
            alt={movie.title}
            className={Style.thumbImg}
          />
          <div className={Style.movieInfo}>
            <h1 className={Style.title}>
              {movie.title_long}
            </h1>
            <div>
              <ul className={Style.movieDesc}>
                <li className={Style.subTt}>Genres</li>
                <li>{movie.genres}</li>
              </ul>
              <ul className={Style.movieDesc}>
                <li className={Style.subTt}>Rating</li>
                <li>{movie.rating}</li>
              </ul>
              <ul className={Style.movieDesc}>
                <li className={Style.subTt}>Runtime</li>
                <li>{movie.runtime}</li>
              </ul>
            </div>
            <p>{movie.description_full}</p>
            <img
              src={movie.background_image}
              alt={movie.title}
              className={Style.detailImg}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
export default PageDetail;
