import projectImage1 from "../../../assets/my project/supoerhero.jpg";
import projectImage2 from "../../../assets/my project/food.jpg";
import projectImage3 from "../../../assets/my project/car doctor.jpg";
import projectImage4 from "../../../assets/my project/music.jpg";
import projectImage5 from "../../../assets/my project/Dragon-news.jpg";
import projectImage6 from "../../../assets/my project/ema jhon.jpg";

import Tilt from "react-parallax-tilt";
import { FaCode, FaDatabase, FaGlobe } from "react-icons/fa";

const MyWork = () => {
  return (
    <>
      <div className="mt-20">
        <h1 className="ml-10 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1c7ed6] to-[#85e6f5]">
          My Work
        </h1>
      </div>
      <div className="multiple-tilt">
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-10 space-y-24">
          <Tilt>
            <div className="card card-compact lg:w-96 h-96 bg-base-100 shadow-xl mt-10">
              <figure>
                <img src={projectImage1} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Super hero kid toy website</h2>
                <p>
                  Responsive home page, My toys, Add a new toy and blog section.
                  If the user does not login to the login page, the user adds a
                  new toy for sale. Confirm order and show the selected order
                  table .
                </p>
                <div className="card-actions ">
                  <a href="https://64a300d4f8f8e6384cff4868--stunning-centaur-ad2163.netlify.app/" target="blank" className="btn btn-sm bg-gradient-to-r from-[#1c7ed6] to-[#22b8cf] text-white"><FaGlobe/> demo</a>
                  <a href="https://github.com/soutammollick829/super-hero-kid-website-client" target="blank" className="btn btn-sm bg-gradient-to-r from-[#1c7ed6] to-[#22b8cf] text-white"><FaCode/>Client</a>
                  <a href="https://github.com/soutammollick829/super-hero-kid-website-server" target="blank" className="btn btn-sm bg-gradient-to-r from-[#1c7ed6] to-[#22b8cf] text-white"><FaDatabase/> server</a>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className="card card-compact lg:w-96 h-96 bg-base-100 shadow-xl mt-10">
              <figure>
                <img src={projectImage2} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Testy food recipes</h2>
                <p>
                  Recipes HUB is a website. There will user find some well known
                  China chefs and their famous recipes.
                </p>
                <div className="card-actions justify-end">
                <a href="https://dancing-manatee-98dcd6.netlify.app" target="blank" className="btn btn-sm bg-gradient-to-r from-[#1c7ed6] to-[#22b8cf] text-white"><FaGlobe/> demo</a>
                  <a href="https://github.com/soutammollick829/recipes-testy-food-client" target="blank" className="btn btn-sm bg-gradient-to-r from-[#1c7ed6] to-[#22b8cf] text-white"><FaCode/>Client</a>
                  <a href="https://github.com/soutammollick829/recipes-testy-food-server" target="blank" className="btn btn-sm bg-gradient-to-r from-[#1c7ed6] to-[#22b8cf] text-white"><FaDatabase/> server</a>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
      <div className="multiple-tilt">
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-10 space-y-24">
          <Tilt>
            <div className="card card-compact lg:w-96 h-96 bg-base-100 shadow-xl mt-10">
              <figure>
                <img src={projectImage3} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Car doctors</h2>
                <p>
                  This is a simple single page website. user booking your
                  services, delete , and update.
                </p>
                <div className="card-actions justify-end">
                <a href="https://nimble-scone-ae3b59.netlify.app/" target="blank" className="btn btn-sm bg-gradient-to-r from-[#1c7ed6] to-[#22b8cf] text-white"><FaGlobe/> demo</a>
                  <a href="https://github.com/soutammollick829/car-docter-client" target="blank" className="btn btn-sm bg-gradient-to-r from-[#1c7ed6] to-[#22b8cf] text-white"><FaCode/>Client</a>
                  <a href="https://github.com/soutammollick829/car-docter-server" target="blank" className="btn btn-sm bg-gradient-to-r from-[#1c7ed6] to-[#22b8cf] text-white"><FaDatabase/> server</a>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className="card card-compact lg:w-96 h-96 bg-base-100 shadow-xl mt-10">
              <figure>
                <img src={projectImage4} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Easy to learn music</h2>
                <p>
                  This is a learning music school website.Dedicated Admin route,
                  Instructors dashboard, and students dashboard.
                </p>
                <div className="card-actions justify-end">
                <a href="https://hello-firbase-ea76c.web.app/" target="blank" className="btn btn-sm bg-gradient-to-r from-[#1c7ed6] to-[#22b8cf] text-white"><FaGlobe/> demo</a>
                  <a href="https://github.com/soutammollick829/easy-to-learn-music-school" target="blank" className="btn btn-sm bg-gradient-to-r from-[#1c7ed6] to-[#22b8cf] text-white"><FaCode/>Client</a>
                  <a href="https://github.com/soutammollick829/easy-to-learn-music-school-servr" target="blank" className="btn btn-sm bg-gradient-to-r from-[#1c7ed6] to-[#22b8cf] text-white"><FaDatabase/> server</a>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
      <div className="multiple-tilt">
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-10 space-y-24">
          <Tilt>
            <div className="card card-compact lg:w-96 h-96 bg-base-100 shadow-xl mt-10">
              <figure>
                <img src={projectImage5} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Dragon news</h2>
                <p>
                  Recipes HUB is a website. There will user find some well known
                  China chefs and their famous recipes.
                </p>
                <div className="card-actions justify-end">
                <a href="https://dancing-manatee-98dcd6.netlify.app" target="blank" className="btn btn-sm bg-gradient-to-r from-[#1c7ed6] to-[#22b8cf] text-white"><FaGlobe/> demo</a>
                  <a href="https://github.com/soutammollick829/recipes-testy-food-client" target="blank" className="btn btn-sm bg-gradient-to-r from-[#1c7ed6] to-[#22b8cf] text-white"><FaCode/>Client</a>
                  <a href="https://github.com/soutammollick829/recipes-testy-food-server" target="blank" className="btn btn-sm bg-gradient-to-r from-[#1c7ed6] to-[#22b8cf] text-white"><FaDatabase/> server</a>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className="card card-compact lg:w-96 h-96 bg-base-100 shadow-xl mt-10">
              <figure>
                <img src={projectImage6} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Ema-Jhon marketplace</h2>
                <p>
                  Recipes HUB is a website. There will user find some well known
                  China chefs and their famous recipes.
                </p>
                <div className="card-actions justify-end">
                <a href="https://64a3155d4d7516428023391a--zingy-melba-a48a73.netlify.app/" target="blank" className="btn btn-sm bg-gradient-to-r from-[#1c7ed6] to-[#22b8cf] text-white"><FaGlobe/> demo</a>
                  <a href="https://github.com/soutammollick829/ema-john-with-firebase" target="blank" className="btn btn-sm bg-gradient-to-r from-[#1c7ed6] to-[#22b8cf] text-white"><FaCode/>Client</a>
                  
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </>
  );
};

export default MyWork;
