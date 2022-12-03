import "./styles/App.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

//components
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const { useEffect } = require("react");

function App() {
  return (
    <Router>
      <Nav />
      <main>
        <Routes>
          {routes.map((route, i) => (
            <Route path={route.path} element={<route.component />} key={i} />
          ))}
        </Routes>
      </main>
      <Footer text="personal blog 2022" />
    </Router>
  );
}

export default App;
