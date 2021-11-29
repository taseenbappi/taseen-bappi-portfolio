import './App.css';
import Home from './PortfolioContainer/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
