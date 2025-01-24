import {
  BrowserRouter as Routers,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import Singlemovie from "./pages/Singlemovie";
import Notfound from "./pages/Notfound";
import Findmovie from "./pages/Findmovie";

function App() {
  return (
    <>
      <Routers>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/findmovie" element={<Findmovie />}></Route>
          <Route path="/SearchPage/:mov" element={<SearchPage />}></Route>
          <Route path="/singlemovie/:movid" element={<Singlemovie />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </Routers>
    </>
  );
}

export default App;
