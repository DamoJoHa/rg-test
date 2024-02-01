import './styles/App.scss';
import logoW from "./assets/logo-white.svg"


function App() {
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
        <img src={logoW} alt="Rooster Grin Logo" className="header-logo"/>
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

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
