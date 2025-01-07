import React from "react";
import { Routes, Route, HashRouter as Router } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Navigation } from "./components/Navigation";

import { Home } from "./pages/Home";
import { Games } from "./pages/Games";
import { About } from "./pages/About";
import { Docs } from "./pages/Docs";
import { Settings } from "./pages/Settings";
import { Account } from "./pages/Account";
import { Friends } from "./pages/Friends";
import { Messages } from "./pages/Messages";
import { Clans } from "./pages/Clans";
import { CreateWorld } from "./pages/CreateWorld";
import { Animations } from "./pages/Animations";
import { NotFound } from "./pages/NotFound";
import { GameView } from "./pages/GameView";

function App() {
  return (
    <Box>
      <Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:gameId" element={<GameView />} />
          <Route path="/avalonia" element={<GameView gameId="avalonia" />} />
          <Route path="/etherion" element={<GameView gameId="etherion" />} />
          <Route path="/corleone" element={<GameView gameId="corleone" />} />
          <Route path="/about" element={<About />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/account" element={<Account />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/clans" element={<Clans />} />
          <Route path="/createworld" element={<CreateWorld />} />
          <Route path="/animations" element={<Animations />} />
          <Route path="/westlaw" element={<GameView gameId="westlaw" />} />
          <Route path="/kalamonia" element={<GameView gameId="kalamonia" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Navigation>
    </Box>
  );
}

export default App;
