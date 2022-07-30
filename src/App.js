import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import NavBarRoutes from "./components/Routes";
import Post from "./components/Post";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    // <Login />
    // <Register />
    // <Post />

    <Router>
      <Dashboard />
      <NavBarRoutes />
    </Router>
  );
}

export default App;
