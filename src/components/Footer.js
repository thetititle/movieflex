import Foot from '../css/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../src/img/logo.png';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer>
      <div className={Foot.container}>
        {' '}
        <Link to={`/`} className={Foot.link}>
          <img
            src={Logo}
            alt="logo"
            className={Foot.logo}
          />
        </Link>
        <Link
          to={`#`}
          onClick={() =>
            (window.location =
              'mailto:business.thetititle@gmail.com')
          }
          className={Foot.link}
        >
          <div className={Foot.mailTo}>
            {/* <FontAwesomeIcon icon={faAt} /> */}
            <FontAwesomeIcon icon={faAt} />
            <p>CONTACT ME</p>
          </div>
        </Link>
      </div>
    </footer>
  );
}
export default Footer;
