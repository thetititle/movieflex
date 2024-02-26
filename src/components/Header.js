import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Style from '../css/Header.module.css';
import Logo from '../../src/img/logo.png';

function Header({ propHeader }) {
  return (
    <header className={propHeader ? Style.active : ''}>
      <div className={Style.container}>
        <p>THETITITLE</p>
        <Link to={`/`} className={Style.link}>
          <img
            src={Logo}
            alt="logo"
            className={Style.logo}
          />
        </Link>
        <p>MOVIE APP</p>
      </div>
    </header>
  );
}
Header.propTypes = {
  propHeader: PropTypes.bool.isRequired,
};
export default Header;
