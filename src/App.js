import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './components/Calculator';
import Quotes from './quote/Quote';

function App() {
  return (
    <div className="container mt-2">
      <h1>Calculator</h1>
      <Calculator />
      <Quotes />
    </div>
  );
}

export default App;
