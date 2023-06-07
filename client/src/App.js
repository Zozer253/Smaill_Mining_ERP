import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/signin/Login";
// import Signup from "./pages/signup/Signup";
import { Signup, Login, Dashbord, MiningDashboard } from "./pages/";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin"  element= {<Dashbord />} />
          <Route path="/mining"  element= {<MiningDashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
