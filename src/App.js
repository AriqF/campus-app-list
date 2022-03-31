import { useEffect } from 'react';
import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Header from './Components/Header';
import WebApp from './Components/WebApp';
import Games from './Components/Games';
import MobileApp from './Components/MobileApp';
import Footer from './Components/Footer';

function App() {

  useEffect(() => {
    AOS.init();
    document.title = "App List";
  });


  return (
    <>
      <Header />
      <WebApp />
      <Games />
      <MobileApp />
      <Footer />
    </>
  );
}

export default App;
