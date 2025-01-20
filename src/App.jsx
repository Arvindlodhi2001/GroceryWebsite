import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Index from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import IndexRouter from "./components/IndexRouter";
import LocomotiveScroll from "locomotive-scroll";

const locomotiveScroll = new LocomotiveScroll();

function App() {
  return (
    <>
      <div>
        <Header />
        <IndexRouter />
        <Footer />
      </div>
    </>
  );
}

export default App;
