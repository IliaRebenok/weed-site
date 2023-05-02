import AOS from "aos";
import 'aos/dist/aos.css';
import Featured from "./components/featured/featured";
import Footer from "./components/footer/footer";
import GetInTouch from "./components/getInTouch/getInTouch";
import Testimonial from "./components/testimonial/testimonial";
import Contacts from "./components/contacts/contacts";
import Header from './components/header/header';
import React, {useRef} from "react";
import About from "./components/about/about";
import Hero from './components/hero/hero';

AOS.init({
    duration: 1000,
})


function App() {
    const shopRef = useRef(null);
    const contactsRef = useRef(null);
    const aboutRef = useRef(null);

    return (
        <div className="App">
            <Header shop={shopRef} contacts={contactsRef} about={aboutRef}/>
            <Hero/>
            <Featured ref={shopRef}/>
            <Contacts ref={contactsRef}/>
            <About ref={aboutRef}/>
            <GetInTouch/>
            <Testimonial/>
            <Footer/>
        </div>
    );
}

export default App;