import Typewriter from "react-ts-typewriter";
import image from "../../assets/image/FB_IMG_1584274881628.jpg";

import { Link } from "react-router-dom";
import SocialContact from "../social media/SocialContact";
import { FaDownload } from "react-icons/fa";
import AboutMe from "./About me/AboutMe";
import Skills from "../Skills/Skills";

const downloadPDF = () => {
  var link = document.createElement("a");
  link.href =
    "https://drive.google.com/drive/u/0/folders/1pOmu1bfbUnAB3ZlhSkDmp_H7FR9nocoB";
  link.download = "soutammollick829@gmail.com.pdf";

  // Trigger the download
  link.click();
};

const Home = () => {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-20">
          <img src={image} className="max-w-sm shadow-2xl rounded-full border-8 border-[#22b8cf]" />
          <div className="space-y-2">
            <h1 className="text-5xl font-bold">
              <span className="text-2xl">Hello there...</span> <br />
              Soutam Mallick
            </h1>
            <h2 className="text-2xl font-semibold text-[#22b8cf]">
              I Am Passionate{" "}
              <Typewriter text="React developer" loop={true} speed={200} />
            </h2>
            <p className="py-6">
              Unleashing the full potential of the web with React: <br />{" "}
              Crafting captivating and cutting-edge digital experiences
            </p>
            <Link>
              <button
                onClick={downloadPDF}
                className="btn bg-gradient-to-r from-[#1c7ed6] to-[#22b8cf] text-white font-semibold"
              >
                Download Resume <FaDownload />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <SocialContact/>
      <AboutMe/>
      <Skills></Skills>
    </>
  );
};

export default Home;
