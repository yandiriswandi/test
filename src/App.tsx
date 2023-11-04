import { useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Routing from "./Routes";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer } from "react-toastify";

import jsPDF from "jspdf";
const doc = new jsPDF();

function App() {
  const [title, setTitle] = useState("Closepay");
  function getFaviconEl() {
    return document.getElementById("favicon");
  }

  return (
    <div className="App-full bg-mobile font-montserrat">
      <Routes>
        {Routing.map((prop: any, index: any) => {
          if (prop.path == "") {
            return (
              <Route
                key={`menu-${index}`}
                path="/"
                element={<Navigate to={prop.redirect} replace />}
              />
            );
          } else {
            return (
              <Route
                key={"menu-" + index}
                path={prop.path}
                element={<prop.component />}
              />
            );
          }
        })}
      </Routes>

    </div>
  );
}

export default App;
