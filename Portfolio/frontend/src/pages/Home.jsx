import { Carousel } from "react-responsive-carousel";
import { Progress } from "@material-tailwind/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import code from "../assets/code.png";
import cat from "../assets/cat.jpg";
import yalinov from "../assets/yalinov.jpg";
import identity from "../assets/picture.png";
import skills from "../assets/skills.png";
import replique from "../assets/replique.jpg";
import libside from "../assets/libside.jpg";

import wild from "../assets/wild.png";

import replik from "../assets/replik.png";

import yali from "../assets/yali.png";

export default function Home() {
  return (
    <div className="bg-primary text-center">
      <div className="bg-primary"></div>
      <div className="md:flex mb-10 md:p-4 md:m-10  p-10 rounded-full ">
        <img className="mx-auto w-40 h-30 md:w-[30%]" src={code} alt={code} />

        <div className="mx-auto text-center ">
          <img
            className="mx-auto w-50 h-50 mb-10  rounded-full  "
            src={identity}
            alt={code}
          />
          <h2 className="text-2xl md:mb-10 ">Hi, I'm Venuzia</h2>
          <h1 className="text-center text-3xl"> web developper</h1>
          <p className="text-center mt-2">
            Fond-End Developper React/Javascript
          </p>
          <p>I am passionate about digital and design </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
            culpa? Expedita tempore alias eum, ab fugiat, consequuntur ipsa
            illum rem obcaecati quae nisi voluptatem debitis nesciunt ducimus,
            hic mollitia accusamus.
          </p>
        </div>
        <hr></hr>
      </div>
      <div>
        <h2 className="text-4xl mt-10 text-center  bg-purple-100 rounded-full m-8 ">
          Skills
        </h2>
        <div className="md:grid md:grid-cols-2">
          <div className="flex w-full flex-col gap-2 p-8">
            <>
              <p>Javascript</p>
              <Progress value={50} color="blue" />
            </>

            <>
              <p>React</p>
              <Progress value={50} color="red" />
            </>

            <>
              <p>NodeJs</p>
              <Progress value={40} color="green" />
            </>

            <>
              <p>HTML/CSS</p>
              <Progress value={70} color="amber" />
            </>
            <>
              <p>Sql</p>
              <Progress value={50} color="teal" />
            </>

            <>
              <p>Git</p>
              <Progress value={50} color="teal" />
            </>
          </div>

          <img
            className="mx-auto w-40 h-30 md:w-[80%] md:h-50"
            src={skills}
            alt={skills}
          />
        </div>
        <div>
          <h2 className="text-3xl mt-10 mt-10 text-center  bg-purple-100 rounded-full m-8">
            My projects
          </h2>

          <Carousel autoPlay className="mt-10 w-[65%] mx-auto ">
            <div>
              <img className="w-[40%] h-50   rounded-xl " src={cat} alt="" />
              <p className="legend">
                <strong className="text-xl">
                  {" "}
                  Conception d'une site d'adopption de chat
                </strong>{" "}
              </p>
            </div>
            <div>
              <img
                className="w-[40%] h-50  rounded-xl "
                src={replique}
                alt=""
              />
              <p className="legend">
                <strong className="text-xl">
                  {" "}
                  Conception d'une application de jeu de replique de film
                </strong>
              </p>
            </div>
            <div>
              <img
                className="w-[40%] h-50   rounded-xl"
                src={libside}
                alt="pic3"
              />
              <p className="legend">
                <strong className="text-xl"> Projet hackathon</strong>{" "}
              </p>
            </div>
            <div>
              <img
                className="w-[40%] h-50  rounded-xl "
                src={yalinov}
                alt="pic"
              />

              <p className="legend">
                <strong className="text-xl">
                  {" "}
                  Conception d'un site market place
                </strong>
              </p>
            </div>
          </Carousel>

          <div className="mx-auto sm:mx-auto md:grid md:grid-col lg:grid lg:grid-cols-3 md:items-center md:p-10 md:m-10">
            <div className="max-w-sm  sm:w-[80%] sm:h-[5O%] sm:mx-auto sm:m-4 sm:p-3 rounded  shadow-lg">
              <img
                className="w-full mx-auto m-4 p-5 rounded"
                loading="lazy"
                src={yali}
                alt="yali"
              />
              <a
                className="px-6 py-2 rounded-full bg-black text-white"
                href="https://yalinov.bordeaux-1.wilders.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View website
              </a>
              <div className="px-6 py-4">
                <p className="text-gray-700 text-base">
                  Projet fullstack react/ nodeJs /tailwind
                </p>
              </div>
            </div>
            <div className=" max-w-sm sm:w-[80%] sm:h-[5O%] sm:mx-auto md: sm:m-4 sm:p-3 rounded overflow-hidden shadow-lg">
              <img
                className="w-full mx-auto m-4 p-5 rounded"
                src={replik}
                alt="replik"
              />
              <a
                className="px-6 py-2 rounded-full bg-black  text-white"
                href="https://noplr.bordeaux-1.wilders.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                View website
              </a>
              <div className="px-6 py-4">
                <p className="text-gray-700 text-base">
                  Projet fullstack react/ nodeJs /tailwind
                </p>
              </div>
            </div>
            <div className="max-w-sm  sm:w-[80%] sm:h-[5O%] sm:mx-auto sm:m-4 sm:p-3 rounded overflow-hidden shadow-lg">
              <img
                className="w-full mx-auto  m-4 p-5 rounded"
                src={wild}
                alt="wild"
              />
              <a
                className="px-6 py-2 rounded-full bg-black text-white"
                href="https://matthieuelie.github.io/wild-cat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View website
              </a>
              <div className="px-6 py-4 md:px-0">
                <p className="text-gray-700 text-base">
                  Static web site in Html/css and Javascript
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
