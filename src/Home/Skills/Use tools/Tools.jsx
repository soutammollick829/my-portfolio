import Marquee from "react-fast-marquee";
import toolsImage1 from "../../../assets/tools/1681038242chatgpt-logo-png.png";
import toolsImage2 from "../../../assets/tools/670020.png";
import toolsImage3 from "../../../assets/tools/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313538383830353835382f7265706f7369746f726965732f76657263656c2f6c6f676f2e706e67.png";
import toolsImage4 from "../../../assets/tools/figma-1-logo-png-transparent.png";
import toolsImage5 from "../../../assets/tools/Google_Chrome_icon_(2011).png";
import toolsImage6 from "../../../assets/tools/kisspng-github-repository-git-project-commit-5b0f2dd1efb513.5784673515277214259819.jpg";
import toolsImage7 from "../../../assets/tools/netlify-logo-png-transparent.png";
import toolsImage8 from "../../../assets/tools/png-transparent-visual-studio-code-hd-logo-thumbnail.png";

const Tools = () => {
  return (
    <>
      <Marquee className="mt-20" pauseOnHover speed={50}>
        <div className="flex gap-10 justify-center items-center w-80 mb-20">
          <div className="rounded-lg bg-slate-200">
            <div className="stat flex items-center w-48">
              <img className="w-10" src={toolsImage2} alt="" />
              <h2 className="text-xl font-bold">Github</h2>
            </div>
          </div>
          <div className="rounded-lg bg-slate-200">
            <div className="stat flex items-center w-48">
              <img className="w-10" src={toolsImage3} alt="" />
              <h2 className="text-xl font-bold">Vercel</h2>
            </div>
          </div>

          <div className="rounded-lg bg-slate-200">
            <div className="stat flex items-center w-48">
              <img className="w-10" src={toolsImage7} alt="" />
              <h2 className="text-xl font-bold">Netlify</h2>
            </div>
          </div>
          <div className="rounded-lg bg-slate-200">
            <div className="stat flex items-center w-48">
              <img className="w-10" src={toolsImage8} alt="" />
              <h2 className="text-xl font-bold">Vs code</h2>
            </div>
          </div>
        </div>
      </Marquee>
      <Marquee pauseOnHover speed={50}>
<div className="flex gap-10 justify-center items-center w-80 mb-20">
      
      <div className="rounded-lg bg-slate-200">
        <div className="stat flex items-center w-48">
          <img className="w-10" src={toolsImage1} alt="" />
          <h2 className="text-xl font-bold">Chat Gpt</h2>
        </div>
      </div>
      <div className="rounded-lg bg-slate-200">
        <div className="stat flex items-center w-48">
          <img className="w-7" src={toolsImage4} alt="" />
          <h2 className="text-xl font-bold">Figma</h2>
        </div>
      </div>
      
      <div className="rounded-lg bg-slate-200">
        <div className="stat flex items-center w-48">
          <img className="w-10" src={toolsImage5} alt="" />
          <h2 className="text-xl font-bold">Chrome</h2>
        </div>
      </div>
      <div className="rounded-lg bg-slate-200">
        <div className="stat flex items-center w-48">
          <img className="w-16" src={toolsImage6} alt="" />
          <h2 className="text-xl font-bold">Git</h2>
        </div>
      </div>
    </div>
    </Marquee>
    </>
  );
};

export default Tools;
