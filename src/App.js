import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greeting from './components/greeting/index';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;