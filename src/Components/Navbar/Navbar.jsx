import {Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <nav className="navbar">
      <div className="flex-1">
        <a className="font-bold normal-case text-3xl text-[#ff0052]">Pixel</a>
      </div>
      <div className="flex-none">
        <Link to="/price" className="btn btn-sm mr-2 btn-secondary bg-[#ff0052]">Price</Link>
        <Link to="/about" className="btn btn-sm  btn-secondary bg-[#ff0052]">About me</Link>
      </div>
    </nav>
  );
};

export default Navbar;
