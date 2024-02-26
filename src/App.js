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
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={'/'} element={<PageHome />} />
        <Route
          path={'/movie/:id'}
          element={<PageDetail />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
