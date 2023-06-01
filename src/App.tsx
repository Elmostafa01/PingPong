import '../src/styles/main.scss';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Friends from './pages/Friends';
import Chat from './pages/Chat';
import Game from './pages/Game';
import History from './pages/History';
import Profil from './pages/Profil';
import Settings from './pages/Settings';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';




function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/profil' element={<Profil />} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/history' element={<History />} />
          <Route path='/game' element={<Game />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>

    </Router>
  )
}

export default App
