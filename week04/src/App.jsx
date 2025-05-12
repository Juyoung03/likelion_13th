import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main';
import Info from './pages/Info';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="/info/:id" element={<Info />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
