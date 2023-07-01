import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../sheard/Navbar/Navbar";
import Footer from "../sheard/Footer/Footer";

const Main = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <Navbar/>
        {/* Page content here */}
        <Outlet/>
        {/* Footer */}
        <Footer/>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
          <NavLink
            to="/"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "#d9832e",
                color: isPending ? "#d9832e" : "",
              };
            }}
          >
            Home
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
            About us
          </NavLink>
          </li>
          <li>
          <NavLink
            to="/services"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "#d9832e" : "",
              };
            }}
          >
            Services
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
            <span className="font-semibold hover:text-[#d9832e]">Contact</span>
          </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
