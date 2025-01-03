import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import Logo from "../../assets/Logo.jpeg"
import "./Navbar.css"
const Navbar = () => {
    return (
        <>
            <div className="rounded-md h-fit p-5">
                <nav className="flex items-center h-12 justify-between p-5">
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
            </div>
        </>
    )
}

export default Navbar