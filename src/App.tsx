import { Route, BrowserRouter as Router, Routes } from "react-router";
import AppLayout from "./components/layouts/AppLayout";
import Home from "./components/features/Home/Home";
import Game from "./components/features/Game/Game";
import Login from "./components/features/Registrations/Login";
import SignUp from "./components/features/Registrations/SignUp";
import GuestOnly from "./components/utility/GuestOnly";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/game" index element={<Game />} />
          <Route
            path="/login"
            element={
              <GuestOnly>
                <Login />
              </GuestOnly>
            }
          />
          <Route
            path="/register"
            element={
              <GuestOnly>
                <SignUp />
              </GuestOnly>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
