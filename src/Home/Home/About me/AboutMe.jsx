import image from "../../../assets/image/357948335_3339401226309427_4215931536983709685_n.jpg";
const AboutMe = () => {
  return (
    <div className="mt-32">
      <h1 className="ml-10 text-4xl font-bold mb-10">About me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="mx-10">
          <h1 className="text-2xl font-bold">Soutam Mallick</h1>
          <p className="bg-[#1c7ed6] inline-block text-white p-1">React developer</p>
          <h1 className="text-lg font-semibold mb-2">
            <span className="text-5xl font-bold text-[#1c7ed6]">6</span> Month
            Experience
          </h1>
          <hr />
          <p className="text-xl ">
            Hi there! My name is Soutam Mallick and I am a React developer with
            expertise in JavaScript and front-end development. Skilled in
            building scalable web applications using React.js and related
            technologies. Strong problem-solving abilities and a passion for
            staying updated with the latest industry trends.
          </p>
        </div>
        <div>
          <img className="rounded-full w-72" src={image} alt="" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">EDUCATION</h3>
          <p className="text-lg mb-5 mt-5">
            Govt Sundarban Adarsha College, Khulna, Bangladesh BBA Honours 4th
            year in Accounting 2016-2017
          </p>
          <hr />
          <h3 className="text-2xl font-bold mt-5">LANGUAGES</h3>
          <p className="text-lg mb-5 mt-5">
            Bangla: Native <br /> English: Comfortable
          </p>
          <hr />
          <h3 className="text-2xl font-bold mt-5">HOBBIES</h3>
          <p className="text-lg mb-5 mt-5">
            Personal Coding Projects, Playing Football, Open Source Contribution
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
