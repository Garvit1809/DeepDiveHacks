import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import FishPage from './Pages/FishPage';
import Research from './Pages/Research';
import Register from './Pages/Register';
import Login from './Pages/Login';

function App() {
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}>
      <main data-scroll-container ref={containerRef}>
        <Routes>
          <Route path='/register' element={<Register />} data-scroll-section />
          <Route path='/login' element={<Login />} data-scroll-section />
          <Route path='/' element={<Home />} data-scroll-section />
          <Route path='research' element={<Research />} data-scroll-section />
          <Route path='dive' element={<FishPage />} data-scroll-section />
        </Routes>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
