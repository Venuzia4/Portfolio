import { useForm } from "react-hook-form";
import { useState } from "react";
import contact from "../assets/contact.png";

import { sendMessage } from "../services/api";



function Error({ children }) {
  return <p className="m-0 mt-2 text-sm text-red-500">{children}</p>;
}
export default function Contact() {
  const [sentMessage, setSendMessage] = useState();
  const [error, setError] = useState();

  function gitClick() {
    window.location.assign('https://github.com/Venuzia4');
  }


  function linkClick() {
    window.location.assign('https://www.linkedin.com/in/venuzia-babongui-mabika/');
  }



  function tweetClick() {
    window.location.assign('https://twitter.com/MabikaVhenuzya');
  }


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      await sendMessage(formData);
      setSendMessage("Message envoyé!");
    } catch (err) {
      setError("Message non envoyé!");
    }
  };

  if (sentMessage) {
    return (
      <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800">
        <p className="mb-5 text-xl text-center text-green-500 mx-auto">
          {sentMessage}
        </p>
      </div>
    );
  }

  return (
    <div className="py-2 ">
      <div className="flex-grow border-2 border-blue-light m-10 " />


      <h2 className=' mt-10 text-3xl mt-10 text-center  bg-purple-100 rounded-full m-8'>Contact</h2>

      <img  className="mx-auto w-40 h-30 md:w-[30%]" src={contact} alt ={contact}/>

      <div className="py-10 px-10 min-h-screen ">
        <div className="bg-white rounded-lg p-10 md:w-3/4 lg:w-1/2 mx-auto">
          <form method="POST" onSubmit={handleSubmit(onSubmit)}>
            {error && <Error>{error}</Error>}


            <div className="mb-5">
              <input
                placeholder="Prénom"
                className="w-full py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
                {...register("firstname", {
                  required: "Champ obligatoire",
                  maxLength: 100,
                })}
              />

{errors.firstname && <Error>{errors.firstname.message}</Error>}
            </div>

            <div className="mb-5">
              <input
                placeholder="Nom"
                className="w-full py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
                {...register("lastname", {
                  required: "Champ obligatoire",
                  maxLength: 100,
                })}
              />

{errors.lastname && <Error>{errors.lastname.message}</Error>}

            </div>

            <div className="mb-5">
              <input
                placeholder="Adresse email"
                className="w-full py-2 border-b-2 border-gray-400 text-gray-600 placeholder-gray-400 outline-none"
                type="email"
                {...register("email", {
                  required: "Champ obligatoire",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Adresse email invalide",
                  },
                })}
              />


{errors.email && <Error>{errors.email.message}</Error>}

            </div>

            <div className="mb-5">
              <textarea
                rows={4}
                className=" w-full border-b-2 outline-none"
                placeholder="Indiquez votre demande ici"
                {...register("message", { required: "Champ obligatoire" })}
              />

{errors.message && <Error>{errors.message.message}</Error>}

            </div>


           
            <div className="text-right mt-5">
              <button
                type="submit"
                value="submit"
                className="py-3 px-5 bg-purple-100 rounded text-black font-bold md:items-center"
              >Envoyer
              </button>
            </div>
          </form>

          
</div>
        </div>
        <div className=" p-6   mb-[80] bg-gray-100 flex items-center justify-center md:mx-auto">

 

      <div className="grid grid-cols-3 mx-auto">
       

        <button  onClick={tweetClick}className="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="50" height="50"
viewBox="0 0 50 50"
><path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path></svg>
        </button>

     

     

        <button  onClick={linkClick}className="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="50" height="50"
viewBox="0 0 50 50"
>    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path></svg>
        </button>

        
        <button onClick={gitClick}className="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
        
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="64" height="64"
viewBox="0 0 72 72"
><path d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z"></path></svg>
        </button>

     

      

     
      </div>
    </div>
  </div>
     
   
  );
}