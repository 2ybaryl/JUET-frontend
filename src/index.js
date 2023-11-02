import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutPage from './routes/AboutPage';
import ContactPage from './routes/ContactPage';
import AcademicsPage from "./routes/AcademicsPage";
import FacultyPage from "./routes/FacultyPage";
import reportWebVitals from './reportWebVitals';
import Login from "./routes/Admin/Login";
import Dashboard from "./routes/Admin/Dashboard";
import Placement from './routes/Placement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<AboutPage />} />
      <Route path = "contact" element = {<ContactPage></ContactPage>}/>
      <Route path = "academics" element = {<AcademicsPage/>}></Route>
      <Route path = "/placements" element = {<Placement />}></Route>
      <Route path = "faculty" element = {<FacultyPage/>}></Route>
      <Route path = "/JUET/CMS/login" element = {<Login/>}></Route>
      <Route path = "/JUET/CMS/dashboard" element = {<Dashboard/>}></Route>
  </Routes>
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
