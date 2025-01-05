import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { IoReorderThreeOutline } from "react-icons/io5";
import Logo from "../../assets/Logo.jpeg"
import "./Navbar.css"
import { useContext } from "react";
import EContext from "../../Econtext/Econtext";
const Navbar = () => {
    const { handleOpen, open, handleClose } = useContext(EContext)
    return (
        <>
            <div className="rounded-md h-fit p-5 ">
                <nav className="md:flex md:items-center md:h-12 md:justify-between md:p-5 hidden">
                    <div className="nav-content">
                        <img src={Logo} alt="Logo" className="first-nav logo border rounded-full h-20 w-20 overflow-hidden hover:scale-110 transition-transform ease-in-out 0.3s hover:border-red-800 shadow-2xl" />
                    </div>
                    <div className="center-nav p-1">
                        <ul className="nav-content flex justify-between items-center h-12 gap-10 ">
                            <li className="">Home</li>
                            <li className="">About</li>
                            <li className="">Details</li>
                            <li className="">Shop</li>
                            <li className="">Contact</li>
                        </ul>
                    </div>
                    <div className="nav-content last-nav flex justify-between items-center h-12 gap-5 p-1">
                        <div className="search-logo"><IoIosSearch className="h-6 w-6" /> </div>
                        <div className="like-items"><CiHeart className="h-6 w-6" /></div>
                        <div className="cart-logo"><LuShoppingCart className="h-6 w-6" /></div>
                    </div>
                </nav>
                <div className="responsive-nav flex items-center md:hidden">
                <div className="Three-line-icon md:hidden">
                    {open ? (<IoReorderThreeOutline onClick={handleClose} className="h-10 w-10 cursor-pointer" />) : (<IoReorderThreeOutline role="button" className="h-10 w-10 cursor-pointer" onClick={handleOpen} />)}
                </div>
                <div className="nav-content mx-20">
                        <img src={Logo} alt="Logo" className="first-nav logo border rounded-full h-20 w-20 overflow-hidden hover:scale-110 transition-transform ease-in-out 0.3s hover:border-red-800 shadow-2xl" />
                    </div>
                </div>
                
                {open ? (<>
                    <div className="nav-content-responsive Three-line-icon-content md:hidden float-right text-xl nav-content border px-5 py-20 -mx-8 -my-28 rounded-md shadow-xl ">
                        <ul className="flex flex-col gap-10 items-center">
                            <li className="">Home</li>
                            <li className="">About</li>
                            <li className="">Details</li>
                            <li className="">Shop</li>
                            <li className="">Contact</li>
                            <div className="search-logo"><IoIosSearch className="h-6 w-6" /> </div>
                            <div className="like-items"><CiHeart className="h-6 w-6" /></div>
                            <div className="cart-logo"><LuShoppingCart className="h-6 w-6" /></div>
                        </ul>
                    </div>
                </>) : (null)}
                
            </div>
        </>
    )
}

export default Navbar