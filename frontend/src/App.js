import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import About from "./components/Product/About";
import Contact from "./components/Product/Contact";
import ProductList from "./components/Product/ProductList"
import Banner from "./components/Product/Banner"
import Footer from "./components/Product/Footer"
import Customer from './components/Customer';
import Map from './components/Map';


function App(props) {

  const [customes, setCustomes] = useState([]);
  const [banners, setBanners] = useState([])
  const [products, setProducts] = useState([])
  const [isShowMenu, setIsShowMenu] = useState(false);
  useEffect(() => {
    fetch("http://13.211.63.187/banners")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBanners(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    fetch("http://13.211.63.187/products")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setProducts(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
  }, [])



  return (
    <div className="App">
      {/* Header */}
      <Header isShow={isShowMenu} setIsShowMenu={setIsShowMenu} />
      {/* banner */}
      {banners.map((banner) => (
        <Banner title={banner.title} />
      ))}
      {/* end banner */}
      {/* start our product */}
      <ProductList products={products} />
      {/* end our product */}
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
              {customes.map((index, custome) => {
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
      {/* about section end */}
      {/* map section start */}
      <Map />
      <Contact />
      {/*end*/}
      {/*  footer start */}
      <Footer />
      {/*  footer end */}
    </div>
  );

}
export default App;
