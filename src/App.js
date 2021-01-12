// import logo from './logo.svg';
import React from "react";
import './App.css';
// import './component/content.js';
import Content from "./component/content";
import Navbar from "./component/navbar";
import Section1 from "./component/section1";
import Section2 from "./component/section2";
import Section3 from "./component/section3";
import Footer from "./component/footer";

import './style/main.css'



// class App extends React.Component {
   const App = () => {
    // useDarkMode();

  
    return (
      
      <div className="leading-normal tracking-normal App">
      <div className ="">
        <Navbar/>
        
        <Content/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Footer/>

      </div>

        
       
      </div>
    
    );

  
}
export default App;