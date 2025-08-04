import { useState,useEffect } from "react";
import { ArrowRightIcon,HomeIcon } from "lucide-react";
import style from '../styles/header.scss'


const Header=({openContact})=>{

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


  const handleScroll = () => {
    const element = document.getElementById("target-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


    return (
        <div className="header">

           <div className="logoName"><span>A</span><span className="otherO">O</span></div>

           
           <div className="ytNav">
           <div className="navpack">

            <div className="hderlogoName"><span>A</span><span className="otherO">O</span></div>

<div className="nav">
   
  <div className="eachNav active"><HomeIcon size={12}/>Home</div>
  <div className="eachNav">Works</div>
  <div className="eachNav">About</div>
</div>

<div className="btn t12" onClick={()=>openContact(true)}>
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

