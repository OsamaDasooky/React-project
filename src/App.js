import Footer from "./Components/Main Components/Footer";
import { Header } from "./Components/Main Components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
