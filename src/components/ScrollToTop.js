import React, { useEffect } from "react";
import { useLocation } from "@reach/router"; 

const ScrollToTop  = () => {

    const { pathname } = useLocation()
    useEffect(()=> 
    {
        scrollToBlogPost( pathname )
    }, [pathname])
  
    
    return ( 
        <button className="scroll-to-top" id="scrolltotop" onClick={scrollToTop} ></button>
        );
        
}

const scrollToBlogPost = ( pathname) =>
{
    if(typeof window !== 'undefined' && pathname.includes('/blog'))
    {           
        window.scrollTo({top:400, behavior:"smooth"})
    }
}

const scrollToTop = () => 
{
    if(typeof window !== 'undefined')
    {
      window.scrollTo({top:0, behavior:"smooth"})
    }    
}
 
export default ScrollToTop;