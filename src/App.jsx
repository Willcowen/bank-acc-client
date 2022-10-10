import './App.css';
import {Route, Routes} from 'react-router-dom'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
