import emaillogo from "../../assets/contact/mail-envelope-icon-comic-style-email-message-vector-cartoon_508290-2792.jpg";

const ContactMe = () => {
  return (
    <>
    <div className="mt-32 lg:mt-40 mx-10 lg:flex justify-center gap-10 ">
      <div>
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1c7ed6] to-[#85e6f5]">
        Contact me..
      </h1>
      <img className="lg:w-80" src={emaillogo} alt="" />
      </div>
      <div>
        <div className="form-control w-full">
          <label className="label">
            <span className="text-xl font-bold">Your name?</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input border-2 border-[#22b8cf] w-full "
          />
          <label className="label">
            <span className="text-xl font-bold">Your email</span>
          </label>
          <input
            type="text"
            placeholder="Enter your email"
            className="input w-full border-2 border-[#22b8cf]"
          />
          <label className="label">
            <span className="text-xl font-bold">Your message</span>
          </label>
          <textarea className="textarea border-2 border-[#22b8cf]" placeholder="Text your message here..."></textarea>
          <button className="btn btn-outline btn-sm border-[#1c7ed6] w-24 mx-auto mt-5 bg-gradient-to-r from-[#1c7ed6] to-[#85e6f5] text-white">send</button>
        </div>  
      </div>
    </div>
      <div className="divider">OR</div>
      <div className="mb-20 text-center text-xl font-bold font-mono">
        Call me: 01941238258 |    
        Email: <a >soutammollick829@gmail.com</a>
      </div>
    </>
  );
};

export default ContactMe;
