import logo from './images/ironhack-logo-xs.png';
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import menuTop from './images/menu-top-xs.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="upper-container">
        <div className="navbar">
        <img src={logo}></img>
        <img src={menuTop}></img>
        </div>
          
      
      </div>
      <div className="lower-container">
        <img src={icon1}></img>
        <img src={icon2}></img>
        <img src={icon3}></img>
        <img src={icon4}></img>
      </div>
    </div>
  );
}

export default App;
