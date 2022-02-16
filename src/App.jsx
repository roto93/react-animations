import { Route, Routes, useNavigate } from 'react-router-dom';
import './css/App.css';
import Home from './routes/Home';
import Page1 from './routes/Page1';
import Page2 from './routes/Page2';
import Page3 from './routes/Page3';
import Page4 from './routes/Page4';

function App() {
  const navigate = useNavigate()
  const navigateTo = (path) => () => {
    navigate(path)
  }
  return (
    <div className="App">
      <nav className="nav">
        <ul className="nav__ul">
          <li className="nav__li" onClick={navigateTo('/1')}>1</li>
          <li className="nav__li" onClick={navigateTo('/2')}>2</li>
          <li className="nav__li" onClick={navigateTo('/3')}>3</li>
          <li className="nav__li" onClick={navigateTo('/4')}>4</li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/1' element={<Page1 />} />
        <Route path='/2' element={<Page2 />} />
        <Route path='/3' element={<Page3 />} />
        <Route path='/4' element={<Page4 />} />
      </Routes>
    </div>
  );
}

export default App;
