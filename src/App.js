import Footer from "./Components/Main Components/Footer";
import { Header } from "./Components/Main Components/Header";
import { Routes, Route } from "react-router-dom";
import FoodsProvider from "./provider/FoodsProvider";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import { RecipeProvider } from "./provider/RecipeProvider";
import { AuthProvider } from "react-auth-kit";
import { ProfileProvider } from "./provider/ProfileProvider";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { RequireAuth } from "react-auth-kit";

function App() {
  return (
    <>
      <AuthProvider authType={"cookie"} authName={"_auth"}>
        <Header />
        <Routes>
          <Route path="/" element={<FoodsProvider />}></Route>
          <Route path="/:id" element={<RecipeProvider />}></Route>
          <Route path="/profile/:id" element={<RecipeProvider />}></Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="profile"
            element={
              <RequireAuth loginPath={"/login"}>
                <ProfileProvider />
              </RequireAuth>
            }
          />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
