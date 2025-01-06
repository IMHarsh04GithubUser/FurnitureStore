import Navbar from "../Navbar/Navbar"
import Product_carousel from "./Product_carousel"

const Homepage = () => {
  return (

    <>
    <Navbar />
    <div className="Homepage-container">
        <div className="product-carousel my-10 h-fit">
            <Product_carousel />
        </div>
    </div>
    </>
    

  )
}

export default Homepage