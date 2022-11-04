import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {AppRoutes.map((route) => (
            <Route path={route.path} element={route.element} key={route.id} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
