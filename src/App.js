//
import './App.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;