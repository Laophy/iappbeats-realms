import * as React from 'react';
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

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import MiniDrawer from './components/MiniDrawer';
import { Friends } from './pages/Friends';
import { Messages } from './pages/Messages';
import { Clans } from './pages/Clans';
import { CreateWorld } from './pages/CreateWorld';
import { Account } from './pages/Account';
import { Settings } from './pages/Settings';


function App() {
  const mainTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        light: '#515151',
        main: '#757575',
        dark: '#b3b3b3',
        contrastText: '#fff',
      },
      secondary: {
        light: '#515151',
        main: '#a99dfd',
        dark: '#b3b3b3',
        contrastText: '#000',
      },
    },
  });

  return (
    <ThemeProvider theme={mainTheme}>
      <MiniDrawer content={
          <div className="App">
            <CssBaseline />
            <Routes>
              <Route path="*" element={<NotFound />} />

              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />

              <Route path="/avalonia" element={<GameCard gameURL={'https://avaloniaonline.com/'} gameInfo={{ name: 'Avalonia Online', desc: 'Avalonia online was launched in 2015 by Stefan Knorr.' }}/>} />
              <Route path="/etherion" element={<GameCard gameURL={'https://etheriononline.com/'} gameInfo={{ name: 'Etherion Online', desc: 'Etherion online was launched in 2023 by Stefan Knorr, Shiz, and Laophy.'}}/>} />
              <Route path="/corleone" element={<GameCard gameURL={'https://corleoneonline.com/'} gameInfo={{ name: 'Corleone Online', desc: 'Corleone online was launched in 2017 by Stefan Knorr and Shiz.'}}/>} />
              <Route path="/afk" element={<><GameCard gameURL={'https://corleoneonline.com/'} gameInfo={{ name: 'Corleone Online', desc: 'Corleone online was launched in 2017 by Stefan Knorr and Shiz.'}}/> <GameCard gameURL={'https://avaloniaonline.com/'} gameInfo={{ name: 'Avalonia Online', desc: 'Avalonia online was launched in 2015 by Stefan Knorr.' }}/></>} />

              <Route path="/games" element={<Games />} />
              <Route path="/about" element={<About />} />
              <Route path="/animations" element={<Animations />} />
              <Route path="/itempreview" element={<Itempreview />} />
              <Route path="/docs" element={<Docs />} />

              <Route path="/friends" element={<Friends />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/clans" element={<Clans />} />
              <Route path="/createworld" element={<CreateWorld />} />

              <Route path="/account" element={<Account />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
      } />
    </ThemeProvider>
  );
}

export default App;
