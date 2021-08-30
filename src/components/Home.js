import React,{useEffect} from 'react';
// import SimpleSlider from './specialities';
// import MultipleItems from './doctors';
import '../components/assets/style.css'
import '../../node_modules/swiper/swiper-bundle.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/umd/popper.min';
import 'jquery/dist/jquery.min';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faSearch } from '@fortawesome/free-solid-svg-icons';
//images 
import threeOne from "../components/assets/img/three/1.png";
import threeTwo from "../components/assets/img/three/2.png";
import threeThree from "../components/assets/img/three/3.png";
import main from "../components/assets/img/app/main.png";
import docOne from "../components/assets/img/blog/blog-1.jpg"

const Home = () => {

    useEffect(() => {
        window.scroll(0,0)
    }, )

    return ( 
        <>
        <main className="main-wrapper">

<section className="pharmacy-home-slider">
            <div id="home-banner">
                <section className="section section-search"></section>
            </div>
    
        
        <div className="banner-wrapper">
            <div className="banner-header">
                <h1>Find a Doctor,<br/> Book a Medical Appointment.</h1>
                <p>It’s Simple and Free!</p>
            </div>
            
            <div className="search-box" style={{padding: "0"}}>
                <div className="s-btns">
                    <button id="search-btns" className="search-btns">Doctors</button>
                    <button id="search-btns2" className="search-btns2">Clinics</button>
                    <button id="search-btns3" className="search-btns3">Video Consultation</button>
                </div>
                
                <form className="form-design" action="assets/webpages/list.html">
                    <div className="form-group search-location">
                        <input type="text" className="form-control" id="location" defaultValue="Search" placeholder="Search Location"/>
                    </div>
                    <div className="form-group search-info">
                        <input type="text" className="form-control" id="want" defaultValue="Search" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc"/>
                    </div>
                    <button id="search-btn" type="submit" className="btn btn-primary search-btn mt-0"><FontAwesomeIcon icon={faSearch}/><span>Search</span></button>
                </form>
            </div>
            
        </div>
    </section>

    <section>
        <div className="section-two text-center">
            
            <div id="s-two" className="styles-two">
                    <div className="top-two">
                        <img src={threeOne} alt="#/"/>
                    </div>
                    <div className="body-two text-center">
                        <h3 className="h3-two">Assess Your Health</h3>
                        <h6 className="h6-two">Assess your health with AI features</h6>
                        <div className="text-center">
                        <button id="section-btn">Check Now</button>
                        </div>
                    </div>
            </div>

            <div id="s-two" className="styles-two">
                    <div className="top-two">
                        <img src={threeTwo} alt="#/"/>
                    </div>
                    <div className="body-two text-center">
                        <h3 className="h3-two">Pregnancy packages</h3>
                        <h6 className="h6-two">Buy Complete Pregnancy pacakges</h6>
                        <div className="text-center">
                        <button id="section-btn">Book Now</button>
                        </div>
                    </div>
            </div>
            
            <div id="s-two" className="styles-two">
                    <div className="top-two">
                        <img src={threeThree} alt="#/"/>
                    </div>
                    <div className="body-two text-center">
                        <h3 className="h3-two">Health Insurance @ ₹50</h3>
                        <h6 className="h6-two">Insurance at Just ₹50 INR</h6>
                        <div className="text-center">
                        <button id="section-btn">Book Now</button>
                        </div>
                    </div>
            </div>

        </div>
    </section>

{/* <SimpleSlider/> */}

<section style={{backgroundImage: "linear-gradient(to right, #fbfdff , #E6EFF9 )"}} className="section section-features">
<div className="container-fluid">
    <div className="row">
        <div className="col-md-4">
            <div className="feature-text">
            <h2 className="mt-2">Download the Medatu App</h2><br/>
                <p>1000+ Online Healthcare Experts. Medatu Make It Easy to book a Video consultation.</p>
                <p style={{fontSize: "12px", margin: "3rem 0 .3rem 0"}}>Enter your phone number to join the list.</p>
                <div style={{fontSize: "14px !important"}}>
                    <input type="text" placeholder="Enter Your Phone Number" name="app" id="app"/>
                    <button id="app-num">Download</button>
                </div>
            </div>
            </div>
            <div className="col-md-8">
                <div className="section-header text-center features-img">
                    <img src={main} className="img-fluid" alt="Feature"/>
                </div>
            </div>

    </div>
</div>
</section>     

{/* <MultipleItems/> */}

<section className="section section-doctor">
    <div className="container">
       <div className="row">
            <div className="col-lg-4">
                <div className="section-header ">
                    <h2>Blogs and Posts</h2>
                    <p>Blogs to make you healthier and smarter.</p>
                </div>
                <div className="about-content">
                    <p>Our health and wellness blogs from top healthcare experts enables people to reflect upon their lives and ask themselves if they have been living in the right way as per health is concerned.</p>					
                    <a href={() => false}>Read More..</a>
                </div>
            </div>
<div className="col-lg-8">
<div className="row">
    
    <div className="col-lg-6 col-md-6 col-sm-6">
        <div className="doctor-blog profile-widget">
            <div className="doc-img">
                <a href="/blog">
                    <img className="img-fluid" alt="User" src={docOne}/>
                </a>
                <a href={() => false} className="fav-btn">
                    <FontAwesomeIcon icon={faBookmark}/>
                </a>
            </div>
            <div className="pro-content">
                <h3 className="title">
                    <a href="/blog">10 foods for Healthy Heart</a> 
                </h3>
                
                <p>Most essential foods that keep you and your heart away from unnecessary problems.</p>
            </div>
        </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="doctor-blog profile-widget">
                    <div className="doc-img">
                        <a href="#/">
                            <img className="img-fluid" alt="User" src={docOne}/>
                        </a>
                        <a href={() => false} className="fav-btn">
                            <FontAwesomeIcon icon={faBookmark}/>
                        </a>
                    </div>
                    <div className="pro-content">
                        <h3 className="title">
                            <a href="#/">Ruby Perrin</a> 

                        </h3>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptas fugiat.</p>
                    </div>
                </div>	
            </div>
        </div>
    </div>
</div>
</div>
</section>
</main>
        </>
     );
}
 
export default Home;