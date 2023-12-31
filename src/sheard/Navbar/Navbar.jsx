import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/image_processing20191201-20971-1n6tpq5.gif"

const Navbar = () => {
  return (
    <div className="w-full navbar px-10">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-1 font-extrabold text-2xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#1c7ed6] to-[#85e6f5]">
        <img className="w-20" src={logo} alt="" />
        Soutam mallick
      </div>
      <div className="flex-none hidden lg:block space-x-5">
        <ul className="menu menu-horizontal gap-5">
          {/* Navbar menu content here */}
          <li>
          <NavLink
            to="/"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "#d9832e" : "",
              };
            }}
          >
            <span className="font-semibold hover:text-[#22b8cf]">Home</span>
          </NavLink>
          </li>
          <li>
          <NavLink
            to="/about"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "#d9832e" : "",
              };
            }}
          >
            <span className="font-semibold hover:text-[#22b8cf]">About Us</span>
          </NavLink>
          </li>
          <li>
          <NavLink
            to="/projects"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "#d9832e" : "",
              };
            }}
          >
            <span className="font-semibold hover:text-[#22b8cf]">My Projects</span>
          </NavLink>
          </li>
          <li>
          <NavLink
            to="/contact"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "#d9832e" : "",
              };
            }}
          >
            <span className="font-semibold hover:text-[#22b8cf]">Contact</span>
          </NavLink>
          </li>
        </ul>
        <button onClick={()=>window.my_modal_2.showModal()} className="btn bg-gradient-to-r from-[#1c7ed6] to-[#22b8cf] text-white font-semibold">hire me</button>
        <dialog id="my_modal_2" className="modal">
  <form method="dialog" className="modal-box">
    <p className="py-4">Email: soutammollick829@gmail.com</p>
    <p>phone/What s up: 01941238258</p>
  </form>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
      </div>
    </div>
  );
};

export default Navbar;
