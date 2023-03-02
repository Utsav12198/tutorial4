import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import { ProfileList } from "./components/ProfileList";
import { ProfileDetail } from "./components/ProfileDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/profile_list" element={<ProfileList />} />
        <Route path="/profile_detail/:id" element={<ProfileDetail />} />
      </Routes>
    </div>
  );
}

export default App;
