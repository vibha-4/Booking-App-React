import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="appcontainer">
      <Header />
      <Home />
      <ToastContainer position="top-right" theme="dark" />
      <Footer />
    </div>
  );
}

export default App;
