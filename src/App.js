import './styles/App.scss';
import logoW from "./assets/logo-white.svg"
import logoC from "./assets/logo-color.svg"
import climberImage from "./assets/img-1.jpg"

function App() {
  const sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  const sampleTitle = "Lorem Ipsum"
  // Reusable button for various points in the app
  function Button({href, buttonClass, text="Button Button"}) {
    return (
      <a href={href} className={"button " + buttonClass}>
        {text}
      </a>
    )
  }


  function Header({}) {

    return (
      <div id="header">
        <Logo />
        <div className="header-content">
          <h1 className="title-header">
            <span className='upper-title'>Welcome To</span><br />
            Rooster Grin
          </h1>
          <Button href="/" buttonClass="button-main"/>
        </div>
      </div>
    )
  }

  function Logo({}) {
    return (
      <a href='https://www.roostergrin.com/' target="_blank">
        <img src={logoW} alt="Rooster Grin Logo" id="logo-white" className="header-logo"/>
        <img src={logoC} alt="Rooster Grin Logo" id="logo-color" className="header-logo"/>
      </a>
    )
  }


  return (
    <div className="App">
      <Header />
      <div className="content-grid">

        <div className="grid-row-split">
          <div className="split-left">
            <h2>{sampleTitle}</h2>
            <p>{sampleText}</p>
            <a href="/" target='_blank'>> {sampleTitle}</a>
          </div>
          <img src={climberImage} alt="Two climbers helping each other up a boulder." />
        </div>

        <div className="grid-row-split" id='banner-1'>
          <div className="split-left">
            <h2>{sampleTitle}</h2>
            <Button />
          </div>
        </div>

        <div className="grid-row-split">
          <div className="split-left">

          </div>
          <div className="split-right">

          </div>
        </div>

        <div className="grid-row-split" id="banner-2">
          <div className="split-right">
            <h2>{sampleTitle}</h2>
            <p>{sampleText}</p>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
