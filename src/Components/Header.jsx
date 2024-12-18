import { useState, useEffect } from "react";
import logo from '../assets/logo.svg'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 50);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return (
        <header className={`fixed top-0 right-0 left-0 z-50 py-3 transparent ${isScrolled && "navbar-scrolled py-3"}`}>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <a href='#' className="">
                        {/* <img src={logo} alt='logo' /> */}
                        <h2 className="h2 text-accent mt-3">Nsikan Adaowo</h2>
                    </a>
                    <button className='btn btn-sm'>Work with Me</button>
                </div>
            </div>
        </header>
    )
}

export default Header;