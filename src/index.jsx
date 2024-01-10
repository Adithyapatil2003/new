import React from "react";
import ReactDOM from "react-dom";
import Ap from "SignIU";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "contexts/authContext";
import LandingPagePage from "pages/LandingPage";

export default function App1() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPagePage/>}/>
        <Route path="/getstarted" element={<Ap/>}/>


      </Routes>
      
      </AuthProvider>
    </BrowserRouter>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>,
  document.getElementById("root"),
);
