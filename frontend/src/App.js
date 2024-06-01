import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Footer from './components/Footer';

function App(props) {
  const [banners, setBanners] = useState([]);

  // React Hook
  useEffect(() => {
    fetch("http://localhost:8080/banners").then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data);
      setBanners(data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      
      <Banner banners={banners}/>
      {/* <Banner title={<>Guicci <br />Kit</>} description={"The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles."}/> */}

      {/* about section start */}
      <About />
      {/* about section end */}
      <Footer/>
    </div>
  );
}

export default App;
