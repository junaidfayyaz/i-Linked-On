
import './App.css';
import About from './Components/pages/About/About';
import Banner from './Components/pages/Banner/Banner';
import Service from './Components/pages/Best-service-section/Service';
import Feature from './Components/pages/Feature-comparison/Feature';
import Find from './Components/pages/Find-section/Find';
import Footer from './Components/pages/Footer/Footer';
import Form from './Components/pages/Form-section/Form';
import GetApp from './Components/pages/Get-App-Section/GetApp';
import Header from "./Components/pages/Header/Header";
import Booking from './Components/pages/Instant-booking-section/Booking';
import Logo from './Components/pages/Logo-Section/Logo';
import Move from './Components/pages/Move-on-section/Move';
import Video from './Components/pages/video-section/Video';
function App() {
  return (
    
    <div>
      <Header />
      <Banner />
      <Video />
      <Form />
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
    
  );
}

export default App;
