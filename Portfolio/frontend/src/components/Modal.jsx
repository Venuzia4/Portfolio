
import { useNavigate } from "react-router-dom";

import valid from "../assets/valid.jpeg";
export default function Modal({ visible, onClose }) {
  const navigate = useNavigate();

  const handleOnclose = () => {
    onClose();
  };
  const handleOnClick = () => {
    navigate("/");
  };
  if (!visible) return null;
  return (
    <div className="bg">
    <div className="bg-slate-800 bg-opacity-50  rounded-lg flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
      <div className="bg-white w-30 m-10 md:h-50 md:w-[40%] px-16 py-14 rounded-md text-center">
       <img className="mx-auto w-20" src={valid} alt={valid}/>
       <p className="text-xl mb-4 font-bold text-primary">Message sent</p>

        <button
          onClick={handleOnClick}
          className="bg-green-500 px-8 py-2 ml-2 p-2 mx-4 mb-2 rounded-md text-md w-30 text-white font-semibold"
        >
          Ok
        </button>
        <button
          onClick={handleOnclose}
          className="bg-red-500 px-5 py-2 ml-2 p-2 mx-4 rounded-md text-md w-30 text-white font-semibold"
        >
          Close
        </button>
      </div>
    </div>
    </div>
  );
}

