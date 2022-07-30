import { Route, Routes } from "react-router-dom";
// import {Contact,About,Service} from './Components/Subcomponent/Index'
import NoteCard from "./Note/NoteCard";
import Dashboard from "./Dashboard";
import CardInfo from "./Reuseable/CardInfo";
import Post from "./Post";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
const NavBarRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<NoteCard />} />
      <Route path="/cardinfo/:subject" element={<CardInfo />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/post" element={<Post />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default NavBarRoutes;
