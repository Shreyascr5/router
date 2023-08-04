import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Page404 from "./components/Page404";
import Users from "./components/Users";
import Filter from "./components/Filter";
import Contact from "./components/Contact";
import Company from "./components/Company";
import Login from "./components/Login";
import Protected from "./components/Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Protected Component={Home} />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/about" element={<Protected Component={About} />} />
          <Route path="/users/:name" element={<Protected Component={Users} />} />
          <Route path="/filter" element={<Protected Component={Filter} />} />
          <Route path="/contact/" element={<Contact />}>
            <Route path="company" element={<Company />} />
          </Route>
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
