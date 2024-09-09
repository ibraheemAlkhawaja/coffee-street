import { useEffect, useState } from "react";
import "./ScrollToTop.css";
import { GoChevronUp } from "react-icons/go";
const ScrollToTop = () => {
    const [onScroll ,setOnScroll] =useState(false)
    useEffect(()=>{
        window.addEventListener("scroll" ,()=>{
            console.log("scrollY")
            if(window.scrollY > 300){
                setOnScroll(true)
            }
            else{
                setOnScroll(false)
            }
        })
    },[])
  return (
<>
        <a href="#" style={{opacity :onScroll ? 1 : 0 ,transitionDuration:".5s"}}><button className="scrolltotop">
        <GoChevronUp size={30}/>
      </button>
      </a>
</>
  );
};

export default ScrollToTop;
