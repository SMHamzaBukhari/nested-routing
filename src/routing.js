import React from "react";
import Login from "./components/login";
import NotFound from './components/notfound';
import Dashboard from "./components/dashboard";
import Profile from './components/profile';
import Analysis from './components/analysis';
import Accounting from './components/accounting';
import Projects from './components/project';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function Routing() {
  return (
    <Router>
  
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard/:id" element={<Dashboard/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/analysis" element={<Analysis/>}/>
          <Route path="/accounting" element={<Accounting/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>

    </Router>
  );
}
