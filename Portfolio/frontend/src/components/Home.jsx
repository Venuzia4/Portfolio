import Nav from "../components/Nav.jsx";
import { Carousel } from "react-responsive-carousel";
import { Progress } from "@material-tailwind/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import code from "../assets/code.png";
import cat from "../assets/cat.jpg";
import yalinov from "../assets/yalinov.jpg";

import skills from "../assets/skills.png";
import replique from "../assets/replique.jpg";
import Contact from "../components/Contact.jsx";
import libside from "../assets/libside.jpg";

export default function Home() {
  return (
    <div className="bg-purple-50">
      <Nav />
      <div className="m-10 p-20" >

      <h1 className=" text-5xl text-center mt-10">Developpeur web junior </h1>
        <div className="md:flex  md:p-4 m-10 rounded-full ">
          <img className="mx-auto w-40 h-30 md:w-[30%]" src={code} alt={code} />
          <h2 className="text-3xl">Venuzia,</h2>

          <p className="tracking-normal text-center text-2xl mx-auto mt-10 mb-5 p-4 md:text-justify md:w-1/2 md:py-20">dévoloppeuse  react/javascript
            je suis orientée front-end car  suis passionnnée et sensible à l'UX design.
          </p>
        </div>
        <hr></hr>
      </div>
      <div >
        <h2 className="text-3xl mt-10 text-center">skills</h2>
        <div className="md:grid md:grid-cols-2">

        <img className="mx-auto w-40 h-30 md:w-50 md:h-50" src={skills} alt={skills} />
        <div className="flex w-full flex-col gap-2 p-6 ">
          <div>
            <p>Javascript</p>
            <Progress value={50} color="blue" />
          </div>

          <div>
            <p>React</p>
            <Progress value={50} color="red" />
          </div>

          <div>
            <p>NodeJs</p>
            <Progress value={30} color="green" />
          </div>

          <div>
            <p>HTML/CSS</p>
            <Progress value={60} color="amber" />
          </div>
          <div>
            <p>Sql</p>
            <Progress value={40} color="teal" />
          </div>

          <div>
            <p>Git</p>
            <Progress value={30} color="teal" />
          </div>


          </div>
          {/* 
     
      <Progress value={ 30} color="red" />
      <Progress value={50} color="green" />
      <Progress value={50} color="amber" />
      <Progress value={50} color="teal" />
      <Progress value={50} color="indigo" />
      <Progress value={50} color="purple" />
      <Progress value={50} color="pink" /> */}
        </div>
        <div>
          <h2 className="text-3xl mt-10 mt-10 text-center">Mes projets</h2>

          <Carousel autoPlay className="mt-10 w-[65%] mx-auto ">
            <div>
              <img className="w-[40%] h-50   rounded-xl " src={cat} alt="" />
               <p className="legend"><strong className="text-2xl"> Conception d'une site d'adopption de chat</strong> </p>
            </div>
            <div>
              <img
                className="w-[40%] h-50  rounded-xl "
                src={replique}
                alt=""
              />
              <p className="legend">
               <strong className="text-2xl"> Conception d'une application de jeu de replique de film</strong> 
              </p>
            </div>
            <div>
              <img
                className="w-[40%] h-50   rounded-xl"
                src={libside}
                alt="pic3"
              />
             <p className="legend"><strong className="text-2xl"> Projet hackathon</strong> </p>
            </div>
            <div>
              <img
                className="w-[40%] h-50  rounded-xl "
                src={yalinov}
                alt="pic"
              />

<p className="legend"><strong className="text-2xl"> Conception d'une market place</strong></p>
            </div>
          </Carousel>

          <Contact />
        </div>
      </div>
    </div>
  );
}
