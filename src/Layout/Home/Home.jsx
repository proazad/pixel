import ExModal from "../../Components/Gallary/ExModal";
import Gallery from "../../Components/Gallary/Gallery";
import Header from "../../Components/Header/Header";

const Home = () => {
  return (
    <main className="font-roboto">
      <Header></Header>
      <Gallery />
      <ExModal />
    </main>
  );
};

export default Home;
