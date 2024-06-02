export default function Banner({ banners }) {
    console.log("heh", banners);
    return (
        <div className="banner_section">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {banners.map((banner,index ) => {
                        return (
                            <div key={index} className={`carousel-item ${index == 0 ? " active" : ""}`}>
                                <div className="row">
                                    <div className="col-sm-6 flex-column d-flex">
                                        <h1 className="banner_taital">{banner.title}</h1>
                                        <p className="banner_text">{banner.description}</p>
                                        <div className="read_bt mx-auto"><a href="#">Buy Now</a></div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="banner_img d-block w-100"><img src={banner.image} /></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
