import { Slide } from "react-awesome-reveal";
import image1 from "../../assets/skills/5352-html5_102567.png";
import image2 from "../../assets/skills/kisspng-cascading-style-sheets-logo-clip-art-css3-html-5b7617f67bd3d6.3499284915344660385072.jpg";
import image3 from "../../assets/skills/Bootstrap_logo.svg.png";
import image4 from "../../assets/skills/Tailwind_CSS_Logo.svg.png";
import image5 from "../../assets/skills/1611079.png";
import image6 from "../../assets/skills/png-transparent-firebase-google-google-i-o-icon.png";
import image7 from "../../assets/skills/JavaScript-logo.webp";
import image8 from "../../assets/skills/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png";
import image9 from "../../assets/skills/493-4931277_database-icon-png-green-transparent-png.png";
import image10 from "../../assets/skills/node-js-javascript-web-application-express-js-computer-software-others.jpg";
import Tools from "./Use tools/Tools";

const Skills = () => {
  return (
    <>
      <div className="mt-20">
        <h1 className="ml-10 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1c7ed6] to-[#85e6f5]">
          My Skills
        </h1>
        <Slide>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-10 mb-10">
            <div className="card lg:w-48 lg:h-60 border-2 shadow-2xl p-6">
              <figure>
                <img src={image1} alt="car!" />
              </figure>
              <div className="text-center">
                <h2 className="text-xl font-bold">HTML</h2>
                <p>Expertise</p>
              </div>
            </div>
            <div className="card lg:w-48 lg:h-60 border-2 shadow-2xl p-6">
              <figure>
                <img src={image2} alt="car!" />
              </figure>
              <div className="text-center">
                <h2 className="text-xl font-bold mt-2">CSS</h2>
                <p>Expertise</p>
              </div>
            </div>
            <div className="card lg:w-48 lg:h-60 border-2 shadow-2xl p-6">
              <figure>
                <img src={image3} alt="car!" />
              </figure>
              <div className="text-center">
                <h2 className="text-xl font-bold mt-7">Bootstrap</h2>
                <p>Expertise</p>
              </div>
            </div>
            <div className="card lg:w-48 lg:h-60 border-2 shadow-2xl p-6">
              <figure>
                <img src={image4} alt="car!" />
              </figure>
              <div className="text-center">
                <h2 className="text-xl font-bold">Tailwind</h2>
                <p>Expertise</p>
              </div>
            </div>
            <div className="card lg:w-48 lg:h-60 border-2 shadow-2xl p-6">
              <figure>
                <img className="lg:w-32" src={image5} alt="car!" />
              </figure>
              <div className="text-center">
                <h2 className="text-xl font-bold mt-2">React.js</h2>
                <p>Expertise</p>
              </div>
            </div>
            <div className="card lg:w-48 lg:h-60 border-2 p-6 shadow-2xl">
              <figure>
                <img src={image6} alt="car!" />
              </figure>
              <div className="text-center">
                <h2 className="text-xl font-bold mt-2">Firebase</h2>
                <p>Expertise</p>
              </div>
            </div>
            <div className="card lg:w-48 lg:h-60 border-2 p-6 shadow-2xl">
              <figure>
                <img className="lg:w-32" src={image7} alt="car!" />
              </figure>
              <div className="text-center">
                <h2 className="text-xl font-bold mt-2">Javascript</h2>
                <p>Comfortable</p>
              </div>
            </div>
            <div className="card lg:w-48 lg:h-60 border-2 p-6 shadow-2xl">
              <figure>
                <img className="w-32" src={image8} alt="car!" />
              </figure>
              <div className="text-center">
                <h2 className="text-xl font-bold mt-2">Express.js</h2>
                <p>Comfortable</p>
              </div>
            </div>
            <div className="card lg:w-48 lg:h-60 border-2 p-6 shadow-2xl">
              <figure>
                <img src={image9} alt="car!" />
              </figure>
              <div className="text-center">
                <h2 className="text-xl font-bold mt-4">MongoDB</h2>
                <p>Comfortable</p>
              </div>
            </div>
            <div className="card lg:w-48 lg:h-60 border-2 p-6 shadow-2xl">
              <figure>
                <img className="lg:w-32" src={image10} alt="car!" />
              </figure>
              <div className="text-center">
                <h2 className="text-xl font-bold mt-2">Node.js</h2>
                <p>Familiar</p>
              </div>
            </div>
          </div>
        </Slide>
      </div>
      <div className="mt-10">
        <h1 className="ml-10 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1c7ed6] to-[#85e6f5]">
          Tools
        </h1>
        <Tools />
      </div>
    </>
  );
};

export default Skills;
