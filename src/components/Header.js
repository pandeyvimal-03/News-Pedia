import  React from 'react';
import '../css/Header.css';
 import  {Link}  from 'react-router-dom';

function Header (){

  
     return (
        <div className="header">
        <div className="logo">
          News-Pedia
        </div>
        <nav className="navMenu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/business">Business</Link></li>
            <li><Link to="/sports">Sports</Link></li>
            <li><Link to="/technology">Technology</Link></li>
            <li><Link to="/entertainment">Entertainment</Link></li>
            <li><Link to="/health">Health</Link></li>
           
        </nav>
        {/* <div className="logButton">
              <button className='mode-button' onClick={props.changeMode} style={myStyle}>Light Mode</button>
        </div> */}
    </div>
    );
  
 
}

export default Header;
