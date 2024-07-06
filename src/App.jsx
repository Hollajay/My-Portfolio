
import  { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Portfolio } from './component/portfolio_page/Portfolio';
import { Preloader } from './component/preloader/Preloader';


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
 <Preloader/>
      ) : (
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
