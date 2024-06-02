
import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import About from "./components/Product/About";
import Contact from "./components/Product/Contact";
import ProductCard from "./components/Product/ProductCard"
import ProductList from "./components/Product/ProductList"
import Banner from "./components/Product/Banner"
import Footer from "./components/Product/Footer"


function App() {

  // 
  const [banners,setBanners] = useState([])
  const [products,setProducts] = useState([])
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

  useEffect(() =>{
    fetch("http://13.211.63.187/products")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setProducts(data)
    })
    .catch((error) =>{
      console.error('Error fetching data:', error);
    })
  },[])



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
      {/*about section start*/}
     <Contact/>
     {/*end*/}
     {/*  footer start */}
     <Footer/>
     {/*  footer end */}


    </div>
  );
}
export default App;
