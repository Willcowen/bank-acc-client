import './App.css';
import {Route, Routes} from 'react-router-dom'
import Login from './components/Login.jsx'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
