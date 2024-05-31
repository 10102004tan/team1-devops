import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App(props) {
  const [banners, setBanners] = useState([]);

  // React Hook
  useEffect(() => {
    fetch("http://localhost:3003/banners").then((res) => {
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
      <Footer/>
    </div>
  );
}

export default App;
