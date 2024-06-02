import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Footer from './components/Footer';
import Customer from './components/Customer';
import Map from './components/Map';


function App(props) {
  const [banners, setBanners] = useState([]);
  const [customes, setCustomes] = useState([]);

  // React Hook
  useEffect(() => {
    fetch("http://localhost:3000/banners").then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data);
      setBanners(data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);
   // CUSTOMER**********************************************************************
   let index = 0;
   // React Hook
   useEffect(() => {
     fetch("http://localhost:3000/contacts")
       .then((res) => {
         return res.json();
       })
       .then((data) => {
         console.log(data);
         setCustomes(data);
       })
       .catch((err) => {
         console.log(err);
       });
   }, []);
   // CUSTOMER**********************************************************************
  return (
    <div className="App">
      <Header />
      {banners.map((banner) => {
        // return <Banner title={banner.title} description={banner.description} image={banner.image} />
      })}
      {/* <Banner title={<>Guicci <br />Kit</>} description={"The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles."}/> */}

      {/* about section start */}
      <About />
      {/* about section end */}
       {/* COSTUMER********************************************************************************* */}
       <div className="customer_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="customer_taital">What says customers</h1>
            </div>
          </div>
          <div id="main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {customes.map((custome) => {
                return (
                  <Customer
                    title={custome.title}
                    detail={custome.detail}
                    image={custome.image}
                    index={index++}
                  />
                );
              })}
            </div>
            <a
              className="carousel-control-prev"
              href="#main_slider"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-angle-left"></i>
            </a>
            <a
              className="carousel-control-next"
              href="#main_slider"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>

      {/* COSTUMER********************************************************************************* */}

      {/* map section start */}
      <Map />
      {/* map section end */}
      
      <Footer/>
    </div>
  );
}

export default App;
