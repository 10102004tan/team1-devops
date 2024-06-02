import { useState } from "react";

export default function Header() {
    const [isShowNavbar, setIsShowNavbar] = useState(false);
    const closeNavbar = () => {
        setIsShowNavbar(false);
    }

    const showNavbar = () => {
        setIsShowNavbar(true);
    }


    return (
        <div className="header_section">
            <div className="container-fluid">
                <nav className="navbar navbar-light bg-light justify-content-between">
                    <div id="mySidenav" className="sidenav"
                        style={isShowNavbar ? {
                            width: "100%"
                        } : {
                            width: "0"
                        }}
                    >
                        <a href="javascript:void(0)" className="closebtn" onClick={() => {
                            closeNavbar();
                        }}>&times;</a>
                        <a href="index.html">Home</a>
                        <a href="products.html">Products</a>
                        <a href="about.html">About</a>
                        <a href="client.html">Client</a>
                        <a href="contact.html">Contact</a>
                    </div>
                    <span className="toggle_icon" onClick={() => {
                        showNavbar();
                    }}><img src="images/toggle-icon.png" alt="toggle-icon" /></span>
                    <a className="logo" href="index.html"><img src="images/logo.png" /></a>
                    <form className="form-inline ">
                        <div className="login_text">
                            <ul>
                                <li><a href="#"><img src="images/user-icon.png" alt="user-icon" /></a></li>
                                <li><a href="#"><img src="images/bag-icon.png" alt="bag-icon"/></a></li>
                                <li><a href="#"><img src="images/search-icon.png" alt="search-icon"/></a></li>
                            </ul>
                        </div>
                    </form>
                </nav>
            </div>
        </div>
    );
}