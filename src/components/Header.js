import { useState,useEffect } from "react";
import { ArrowRightIcon,HomeIcon } from "lucide-react";
import style from '../styles/header.scss'


const Header=()=>{

    const [currentMode, setCurrentMode] = useState("dark");

    useEffect(() => {
     
      let elem = document.body;
  
      // Remove existing theme classes
      elem.classList.remove("dark", "light");
  
      // Add the current theme class
      elem.classList.add(currentMode);
    }, [currentMode]); 
  
    const toggleMode = () => {
      setCurrentMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
    };

    return (
        <div className="header">

           <div className="logoName"><span>A</span><span className="otherO">O</span></div>

           
           <div className="ytNav">
           <div className="navpack">

<div className="nav">
  <div className="eachNav active"><HomeIcon size={12}/>Home</div>
  <div className="eachNav">Works</div>
  <div className="eachNav">About</div>
</div>

<div className="btn t12">
  Contact Me <ArrowRightIcon size={12}/>
</div>

</div>
           </div>
           
         

           <div className="trP">
         
           <div className="more"></div>
           </div>

        </div>
    )

}

export default Header

