import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header/Header";
import Routing from "./Components/routes/Routing";
import Footer from "./Components/Footer/Footer";

function App() {
  
  return (
    <>
      <Header />
      <Routing />
      <Footer />
    </>
  );
}

export default App;
