import logo from './logo.svg';
import realmsLogo from './images/iAppbeats_Realms.png'
import './App.css';

import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { About } from './pages/About';
import { Animations } from './pages/Animations';
import { Docs } from './pages/Docs';
import { Itempreview } from './pages/Itempreview';
import { Games } from './pages/Games';
import { GameCard } from './components/GameCard';

function App() {
  return (
    <div className="App">
      <nav>
        <img src={realmsLogo} alt='application logo' width={750} height={90} style={{ margin: 5 }}/>
      </nav>
      <Routes>
        <Route path="*" element={<NotFound />}/>

        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>

        <Route path="/avalonia" element={<GameCard gameURL={'https://avaloniaonline.com/'}/>}/>
        <Route path="/etherion" element={<GameCard gameURL={'https://etheriononline.com/'}/>}/>
        <Route path="/corleone" element={<GameCard gameURL={'https://corleoneonline.com/'}/>}/>
        
        <Route path="/games" element={<Games />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/animations" element={<Animations />}/>
        <Route path="/itempreview" element={<Itempreview />}/>
        <Route path="/docs" element={<Docs />}/>
      </Routes>
    </div>
  );
}

export default App;
