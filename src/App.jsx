import { Route, Routes } from 'react-router-dom';
import './css/App.css';
import Nav from './components/nav/Nav';
import Home from './routes/Home';
import ScrollCardPage from './routes/ScrollCardPage';
import Page2 from './routes/Page2';
import Page3 from './routes/Page3';
import Page4 from './routes/Page4';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main' >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/1' element={<ScrollCardPage />} />
          <Route path='/2' element={<Page2 />} />
          <Route path='/3' element={<Page3 />} />
          <Route path='/4' element={<Page4 />} />
        </Routes>
      </main>
      <Nav />
    </div>
  );
}

export default App;
