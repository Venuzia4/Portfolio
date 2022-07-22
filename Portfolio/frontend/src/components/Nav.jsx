import { useState } from "react";
import { Link } from "react-router-dom";
export default function Nav(){
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () =>{
    setToggleMenu(!toggleMenu)
  }

  return (
    <header>
      <div className="px-4 py-2 text-white flex  justify-between bg-purple-100">
      
        <div className={toggleMenu ? "md:flex  md:pt-0 pt-10 w-full md:w-auto" : "hidden md:flex"} id="menu">
        <ul>
          <Link to ="/" className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">Home</Link>
          <Link to ="/contact" className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">ContactUs</Link>
        </ul>
        </div>
        <div className= "cursor-pointer md:hidden">
          <input className="menu-btn hidden" type="checkbox" id="menu-btn"/>
          <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" htmlFor="menu-btn">
            <span onClick={handleToggle} className="navicon bg-white-darkest flex items-center relative"></span>
          </label>
      </div>
      </div>
    </header>
  )
};
  