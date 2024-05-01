import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import About from "../Pages/About/About";

const Main = () => {
  return (
    <div>
      <Navbar />
      <PropertyDetails />
      <About/>
      <Footer />
    </div>
  );
};

export default Main;
