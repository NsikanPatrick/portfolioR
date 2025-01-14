// React Icons

// React Scroll
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { IoDesktopSharp } from "react-icons/io5";
import { BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
    return (
        <nav className="fixed bottom-0 lg:bottom-0 w-full overflow-hidden z-50">
            <div className="container mx-auto">
                <div className="w-full bg-black/20 h-[56px] backdrop-blur-2xl rounded-3xl max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
                    <Link to="home" activeClass="active" smooth={true} spy={true} offset={-200} className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center">
                        <BiHomeAlt />
                    </Link>
                    <Link to="about" activeClass="active" smooth={true} spy={true} offset={-70} className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center">
                        <BiUser />
                    </Link>
                    <Link to="services" activeClass="active" smooth={true} spy={true} offset={-160} className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center">
                        <IoDesktopSharp />
                    </Link>
                    <Link to="work" activeClass="active" smooth={true} spy={true} offset={-140} className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center">
                        <BsBriefcase />
                    </Link>
                    <Link to="contact" activeClass="active" smooth={true} spy={true} offset={-50} className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center">
                        <BsChatSquareText />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav;