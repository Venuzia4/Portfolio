
import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from './components/Home.jsx';

import Contact from './components/Contact.jsx';

function App() {
  return (
        <div className="flex flex-col text-black">

          <div className="grow flex flex-col ">

            <Routes>

              <Route path="/" element={<Home/>} />

              <Route path="/contact" element={<Contact/>} />
          
            </Routes>
          </div>
        </div>
  );
}

export default App;
