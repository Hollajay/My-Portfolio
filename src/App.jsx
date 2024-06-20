
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Portfolio } from './component/portfolio_page/Portfolio';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Portfolio />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
