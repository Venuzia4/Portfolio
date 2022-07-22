
import './App.css';
import { Routes, Route } from "react-router-dom";

import BaseLayout from "./components/BaseLayout";

import Home from './pages/Home.jsx';

import Contact from './pages/Contact.jsx';

function App() {
  return (
        <div className="flex flex-col text-black">

          <div className="grow flex flex-col ">

            <Routes>

            <Route path="/" element={<BaseLayout />}>

              <Route path="/" element={<Home/>} />

              <Route path="/contact" element={<Contact/>} />
         </Route>
            </Routes>
          </div>
        </div>
  );
}

export default App;
