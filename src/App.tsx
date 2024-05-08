import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Mv from "./components/Mv";
import Work from "./components/Work";
import PortfolioPage from "./components/PortfolioPage";
import Client from "./components/Client";
import Client1 from "./components/Client1";
import Client2 from "./components/Client2";
import Client3 from "./components/Client3";
import Client4 from "./components/Client4";
import Client5 from "./components/Client5";
import Client6 from "./components/Client6";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          <Header />
          <Mv />
          <Work />
          <Client />
          <About />
          <Footer />
          </>
        } />
        <Route path="/PortfolioPage" element={<><Header /><PortfolioPage /><Footer /></>} />
        <Route path="/Client1" element={<><Header /><Client1 /><Footer /></>} />
        <Route path="/Client2" element={<><Header /> <Client2 /><Footer /></>} />
        <Route path="/Client3" element={<><Header /> <Client3 /><Footer /></>} />
        <Route path="/Client4" element={<><Header /> <Client4 /><Footer /></>} />
        <Route path="/Client5" element={<><Header /> <Client5 /><Footer /></>} />
        <Route path="/Client6" element={<><Header /> <Client6 /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;