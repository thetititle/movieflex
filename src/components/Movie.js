import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Style from '../css/Movie.module.css';

function Movie({
  propCover_image,
  propTitle,
  propSummary,
  propGenres,
  propGId,
}) {
  return (
    <Link to={`/movie/${propGId}`}>
      <div className={Style.movie}>
        <img
          src={propCover_image}
          alt={propTitle}
          className={Style.img}
        />
        <div className={Style.movieInfoWrap}>
          <div className={Style.movieInfo}>
            <h1 className={Style.title}>{propTitle}</h1>
            <ul className={Style.genres}>
              {propGenres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
          <div className={Style.summaryWrap}>
            <p className={Style.summary}>{propSummary}</p>
          </div>
          <div className={Style.detailWrap}>
            <span className={Style.detail}>go Detail</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
Movie.propTypes = {
  propCover_image: PropTypes.string.isRequired,
  propTitle: PropTypes.string.isRequired,
  propSummary: PropTypes.string.isRequired,
  propGenres: PropTypes.array.isRequired,
  propGId: PropTypes.number.isRequired,
};
export default Movie;
