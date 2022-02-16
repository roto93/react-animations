import { Route, Routes } from 'react-router-dom';
import './css/App.css';
import Nav from './components/nav/Nav';
import Home from './routes/Home';
import Page1 from './routes/Page1';
import Page2 from './routes/Page2';
import Page3 from './routes/Page3';
import Page4 from './routes/Page4';

function App() {
  return (
    <div className="App">
      <main className='main' onClick={() => { console.log(1234) }}>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/1' element={<Page1 />} />
          <Route path='/2' element={<Page2 />} />
          <Route path='/3' element={<Page3 />} />
          <Route path='/4' element={<Page4 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
