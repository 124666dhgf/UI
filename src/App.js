
import './App.css';
import Login from './components/Login';
import Teamlead from './components/Teamlead';
import Associate from './components/Associate';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}>
          </Route>
          <Route path="/Teamlead" element={<Teamlead />}>
          </Route>
          <Route path="/Associate" element={<Associate />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
