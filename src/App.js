import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/pages/About/About";
import Banner from "./Components/pages/Banner/Banner";
import Service from "./Components/pages/Best-service-section/Service";
import Contact from "./Components/pages/Contact-Us/Contact";
import Feature from "./Components/pages/Feature-comparison/Feature";
import Find from "./Components/pages/Find-section/Find";
import Footer from "./Components/pages/Footer/Footer";
import ForgetPass from "./Components/pages/Forget-Pass/ForgetPass";
import FormS from "./Components/pages/Form-section/FormS";
import GetApp from "./Components/pages/Get-App-Section/GetApp";
import Header from "./Components/pages/Header/Header";
import Booking from "./Components/pages/Instant-booking-section/Booking";
import Logo from "./Components/pages/Logo-Section/Logo";
import Move from "./Components/pages/Move-on-section/Move";
import SignIn from "./Components/pages/Sign-In/SignIn";
import Signup from "./Components/pages/Sign-Up/Signup";
import Video from "./Components/pages/video-section/Video";
function App() {
  return (
    <div>
      <Routes>
        <Route path="sign-up" element={<Signup />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="forget-password" element={<ForgetPass />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Banner />
              <Video />
              <FormS />
              <Find />
              <Service />
              <Booking />
              <Feature />
              <Logo />
              <About />
              <Move />
              <GetApp />
              <Footer />
            </div>
          }
        />

      </Routes>
    </div>
  );
}

export default App;
