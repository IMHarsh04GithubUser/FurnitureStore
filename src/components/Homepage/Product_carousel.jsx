import { Carousel } from 'react-responsive-carousel';
import WS from '../../assets/WoodenSofa.jpg';
import WT from '../../assets/WoodenChair.jpg';
import DT from '../../assets/DT.jpg';

const Product_carousel = () => {
    const products = [{
        'title': 'Wood & Cloth Sofa',
        'para': 'Enhance your living space with our premium wooden and cloth sofa, designed for ultimate comfort and durability. Crafted with high-quality wood and upholstered with soft, breathable fabric, this sofa blends elegance and functionality, making it a perfect addition to any home.',
        'image': WS
    }, {
        'title': 'Wood & Cloth Chair',
        'para': 'Experience the perfect mix of style and practicality with our wooden and cloth chairs. Built with sturdy wooden frames and cushioned with cozy fabric seats, these chairs provide ergonomic support and timeless appeal for any setting.',
        'image': WT
    }, {
        'title': 'Wooden Dining Table',
        'para': 'Upgrade your dining experience with our exquisite wooden dining table, crafted from durable, polished wood. With its sleek design and spacious surface, this table is perfect for family meals, gatherings, or adding a touch of sophistication to your dining area.',
        'image': DT
    }];

    return (
        <>
            <Carousel showThumbs={false} autoPlay infiniteLoop stopOnHover showStatus={false}>
                {products.map((items, index) => (
                    <div key={index} className="carousel-items-container flex flex-col lg:flex-row h-fit px-4 py-10 border-l-cyan-400 border-r-cyan shadow-2xl items-center justify-center gap-8">
                        <div className="item-head-para flex flex-col items-center text-center gap-4">
                            <h2 className="heading-carousel text-3xl lg:text-4xl font-bold text-red-500">
                                {items.title}
                            </h2>
                            <p className="para text-lg lg:text-xl text-gray-600 px-4 lg:px-10 leading-relaxed">
                                {items.para}
                            </p>
                        </div>
                        <div className="item-image mx-16 h-72 overflow-hidden rounded-full shadow-2xl cursor-pointer hover:scale-105 transition ease-in-out">
                            <img src={items.image} alt={items.title} className="object-cover h-full w-full hover:scale-110 cursor-pointer" />
                        </div>
                    </div>
                ))}
            </Carousel>
        </>
    );
};

export default Product_carousel;
