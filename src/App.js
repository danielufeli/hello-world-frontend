import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greeting from './components/greeting/index';

const App = () => (
  <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
