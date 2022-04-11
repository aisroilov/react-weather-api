import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [user, setUser] = useState(null);

  const getUser = (authUser) => {
    setUser({ id: Math.random(100), name: authUser });
  };

  const logOut = (d) => {
    setUser(null);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage getUser={getUser} />}></Route>
        <Route path="/" element={<HomePage user={user} logOut={logOut} />} />
      </Routes>
    </div>
  );
}

export default App;
