import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './quote/Quote';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="mt-2">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
