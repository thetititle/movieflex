import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import PageHome from './routes/PageHome';
import PageDetail from './routes/PageDetail';
import './styles.css';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          basename={process.env.PUBLIC_URL}
          path={'/'}
          element={<PageHome />}
        />
        <Route
          basename={process.env.PUBLIC_URL}
          path={'/movie/:id'}
          element={<PageDetail />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
