import { Route, Routes } from 'react-router-dom';
import './css/App.css';
import Nav from './components/nav/Nav';
import Home from './routes/Home';
import ScrollCardPage from './routes/ScrollCardPage';
import Page2 from './routes/Page2';
import Page3 from './routes/Page3';
import Page4 from './routes/Page4';
import Header from './components/Header';
import { useWinSize } from './hooks/useWinSize';

function App() {
  const { winY } = useWinSize()
  return (
    <div className="App">
      <main className='main' >
        {/* <div style={{ border: '1px solid black', width: '100%', minHeight: '100%' }}></div> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/1' element={<ScrollCardPage />} />
          <Route path='/2' element={<Page2 />} />
          <Route path='/3' element={<Page3 />} />
          <Route path='/4' element={<Page4 />} />
        </Routes>
      </main>
      <Header />
      <Nav />
    </div>
  );
}

export default App;
