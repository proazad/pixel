import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Header = () => {
const url = "https://i.ibb.co/VTgMRCs/hero-1.png";
  return (
    <header className="" style={{background: `url(${url})`}}>
      <div className="container mx-auto">
        <Navbar />
        <Banner/>
      </div>
    </header>
  );
};

export default Header;
