import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import Results from './components/Results';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-800 min-h-screen">
        <Navbar />
        <Results />
      </div>
    </BrowserRouter>
  );
}

export default App;
