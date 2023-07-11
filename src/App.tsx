import '../src/styles/main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Friends from './pages/Friends';
import Chat from './pages/Chat';
import Game from './pages/Game';
import History from './pages/History';
import Profil from './pages/Profil';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Authentication from './pages/Authentication';
import Registration from './pages/Registration';



function App() {
  const excludeRoutes = [
    '/authentication',
    '/authentication/',
    '/',
    '/authentication/register'
  ];
  
  const doNotRenderNavbarSidebar = (routePath: string) => {
    return !excludeRoutes.includes(routePath);
  };

  return (
    <Router>
        <div className="App">
          {doNotRenderNavbarSidebar(window.location.pathname) && (
            <>
              <Navbar />
              <Sidebar />
            </>
          )}
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/authentication' element={<Authentication />} >
              <Route path='/authentication/register' element={<Registration />} /> 
            </Route>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/profil' element={<Profil />} />
            <Route path='/friends' element={<Friends />} />
            <Route path='/history' element={<History />} />
            <Route path='/game' element={<Game />} />
            <Route path='/chat' element={<Chat />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
