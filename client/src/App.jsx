import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import FishPage from './Pages/FishPage';
import Register from './Pages/Register';
import Login from './Pages/Login';
import AllFishes from './pages/fishes/allFishes.page';
import OneFish from './pages/fishes/oneFish.page';
import AddFishData from './pages/AddFishData';

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

          <Route path='/add-fish' element={<AddFishData />} data-scroll-section />
          <Route path='/' element={<Home />} data-scroll-section />
          <Route path='/dive' element={<FishPage />} data-scroll-section />
          <Route exact path='/encyclopedia' element={<AllFishes />} />
          <Route path='/fishes/:fishId' element={<OneFish />} />
        </Routes>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
