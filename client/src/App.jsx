import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRef } from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home";
import FishPage from "./Pages/FishPage";
import Research from "./Pages/Research";

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
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <Routes>
         <Route path="/" element={<Home/>} /> 
         <Route path="dive" element={<FishPage/>} />
         <Route path="research" element={<Research/>} />
        </Routes>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
