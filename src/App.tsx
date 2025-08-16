import { Route, BrowserRouter as Router, Routes } from "react-router";
import AppLayout from "./components/layouts/AppLayout";
import Home from "./components/features/Home/Home";
import Game from "./components/features/Game/Game";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/game" index element={<Game />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
