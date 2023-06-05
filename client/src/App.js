import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/signin/Login";
// import Signup from "./pages/signup/Signup";
import { Signup, Login, Dashbord } from "./pages/";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin"  element= {<Dashbord />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
