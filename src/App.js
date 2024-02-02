// Way too many assets
import './styles/App.scss';
import logoW from "./assets/logo-white.svg"
import logoC from "./assets/logo-color.svg"
import climberImage from "./assets/img-1.jpg"
import instaLogo from "./assets/instagram.svg"
import fbLogo from "./assets/facebook.svg"
import expertise from "./assets/home-expertise.svg"
import hygiene from "./assets/home-hygiene.svg"
import lab from "./assets/home-lab.svg"
import retention from "./assets/home-retention.svg"

import React from 'react';
import {useState} from "react"

// External carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function App() {
  const sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  const sampleTextShort = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  const sampleTitle = "Lorem Ipsum"
  const sampleLongTitle = "Lorem Ipsum Dolor Sit Amet"


  // Reusable button for various points in the app
  function Button({href="#header", target="", buttonClass, text="Button Button"}) {
    return (
      <a href={href} target={target} className={"button " + buttonClass} rel="noreferrer">
        {text}
      </a>
    )
  }


  function Header() {
    return (
      <div id="header">
        <Logo />
        <div className="header-content appearing">
          <h1 className="title-header">
            <span className='upper-title'>Welcome To</span><br />
            Rooster Grin
          </h1>
          <Button href="https://github.com/roostergrin" target="_blank" buttonClass="button-main"/>
        </div>
      </div>
    )
  }

  function Footer() {
    return (
      <div id="footer" className="background-grey">
        <h2>Follow Us:</h2>
        <div>
          <a href="https://www.instagram.com/roostergrinmedia/" target="_blank" rel="noreferrer">
            <img src={instaLogo} alt="instagram logo" className="footer-logo" />
          </a>
          <a href="https://www.facebook.com/RoosterGrin/" target="_blank" rel="noreferrer">
            <img src={fbLogo} alt="facebook logo" className="footer-logo" />
          </a>
        </div>
      </div>
    )
  }

  function Logo() {
    return (
      <a href='https://www.roostergrin.com/' target="_blank"  rel="noreferrer">
        <img src={logoW} alt="Rooster Grin Logo" id="logo-white" className="header-logo"/>
        <img src={logoC} alt="Rooster Grin Logo" id="logo-color" className="header-logo"/>
      </a>
    )
  }

  function ImageGrid() {
    const images = document.getElementsByClassName("image-grid-image")
    const [titleText, setTitleText] = useState("")

    function focus(event) {
      const text = event.target.getAttribute("alt")
      setTitleText(text)

      // This is necessary because of the way HTML collections are.
      // Could definitely make this easier on the eyes if we passed the imgs to
      // this component as a prop, but for this scale that's not neede
      for (let i = 0; i < images.length; i++ ) {
        images[i].setAttribute("class", "image-grid-image")
      }
      event.target.setAttribute("class", "image-grid-image beating")
    }

    return (
      <div id="image-grid">
        <p id="image-grid-title">{titleText}</p>
        <img src={hygiene} alt="hygeine" className="image-grid-image" onClick={focus} onMouseOver={focus}/>
        <img src={lab} alt="lab" className="image-grid-image" onClick={focus} onMouseOver={focus}/>
        <img src={expertise} alt="expertise" className="image-grid-image" onClick={focus} onMouseOver={focus}/>
        <img src={retention} alt="retention" className="image-grid-image" onClick={focus} onMouseOver={focus}/>
      </div>
    )
  }

  function TextCarousel() {
    // React responsive carousel is responsible for all the behaviour here
    return (
      <Carousel showThumbs={false} showArrows={true} autoPlay={true} dynamicHeight={false} showStatus={false} infiniteLoop={true}>
        <div>
          <p>{sampleText}</p>
        </div>
        <div>
          <p>{sampleTextShort}</p>
        </div>
        <div>
          <p>
            This is a piece of sample text that I'm writing because I need three things, but don't want to just use a different lenght of "Lorem Ipsum" again.
          </p>
        </div>
      </Carousel>
    )
  }

  return (
    <div className="App">
      <Header />
      <div className="content-grid">
        {/* Row A */}
        <div className="grid-row-split">
          <div className="split-left">
            <div className="text-box">
              <h2>{sampleTitle}</h2>
              <p>{sampleText}</p>
              <a href="/" target='_blank' className="link" rel="noreferrer">> {sampleTitle}</a>
            </div>
          </div>
          <img src={climberImage} alt="Two climbers helping each other up a boulder." id="climber-image"/>
        </div>
        {/* Banner 1 */}
        <div className="grid-row-split" id='banner-1'>
          <div className="split-left">
            <h2>{sampleTitle}</h2>
            <Button />
          </div>
        </div>
        {/* Row B */}
        <div className="grid-row-split">
          <div className="split-left">
            <div className="text-box">
              <h2 className='grey-text'>{sampleLongTitle}</h2>
              <p>{sampleTextShort}</p>
              <a href="/" target="_blank" className='link' rel="noreferrer">> {sampleTitle}</a>
            </div>
          </div>
          <div id="image-grid-holder" className="background-grey">
            <ImageGrid />
          </div>
        </div>
        {/* Banner 2 */}
        <div className="grid-row-split" id="banner-2">
          <div className="split-right">
            <div className="text-box">
              <h2>{sampleTitle}</h2>
              <p>{sampleText}</p>
              <Button />
            </div>
          </div>
        </div>
        {/* Row 3 */}
        <div className="grid-row-split">
          <div className="split-left">
            <h2 className='grey-text'>{sampleLongTitle}</h2>
            {/* FontAwesome for the stars */}
            <div id="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div className="split-right">
            <TextCarousel />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
