import { Zoom } from "react-awesome-reveal";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialContact = () => {
  return (
    <Zoom>
      <div className="flex justify-center gap-10 mb-10">
        <div className="stats shadow border-2 border-[#22b8cf]">
          <div className="stat">
            <a href="https://github.com/soutammollick829" target="blank" className="text-2xl font-bold flex gap-3 items-center">
              <FaGithub />
              Github
            </a>
          </div>
        </div>
        <div className="stats shadow border-2 border-[#22b8cf]">
          <div className="stat">
            <a href="https://www.facebook.com/mallick.somudro/" target="blank" className="text-2xl font-bold flex gap-3 items-center">
              <FaFacebook />
              Facebook
            </a>
          </div>
        </div>
        <div className="stats shadow border-2 border-[#22b8cf]">
          <div className="stat">
            <a href="https://www.linkedin.com/in/soutam-mallick-a0883727b/" target="blank" className="text-2xl font-bold flex gap-3 items-center">
              <FaLinkedin />
              Linkedin
            </a>
          </div>
        </div>
      </div>
      <div className="flex mx-10 mt-20 items-center">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1c7ed6] to-[#85e6f5]">
            Expertise Services! <br /> Let is Check it out
          </h1>
        </div>
        <div className="w-1/2">
          <p className="text-xl">
            These services cater to businesses seeking frontend solutions that
            leverage the power of React to create exceptional user experiences,
            responsive websites, stunning interfaces, and scalable applications,
            backed by expert consulting and support throughout the development
            process.
          </p>
        </div>
      </div>
    </Zoom>
  );
};

export default SocialContact;
