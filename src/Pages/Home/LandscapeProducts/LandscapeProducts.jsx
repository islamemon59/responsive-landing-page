import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const products = [
  {
    id: 1,
    name: "Antiqo Fence",
    price: "₹4,995.00",
    image: "https://i.ibb.co/VcRkPbxp/image-4.png",
  },
  {
    id: 2,
    name: "JF Australian Trellis",
    price: "₹499.00 – ₹1,589.00",
    image: "https://i.ibb.co/8L6M1Ckk/image-5.png",
  },
  {
    id: 3,
    name: "JF Polyhex Mesh",
    price: "₹1,260.00 – ₹10,750.00",
    image: "https://i.ibb.co/k2Yqr5vK/image-6.png",
  },
  {
    id: 4,
    name: "JF Privezy Grass Wall",
    price: "₹3,087.50 – ₹6,362.50",
    image: "https://i.ibb.co/Rk8LJV45/image-7.png",
  },
  {
    id: 5,
    name: "Greenhouse Plastic",
    price: "₹950.00 – ₹8,000.00",
    image:
      "https://i.ibb.co/xts57c74/VEVOR-Greenhouse-Film-24-x-50-ft-Polyethylene-6-Mil-Thickness-Plastic-Clear-UV-Resistant-Keep-Warmin.jpg",
  },
  {
    id: 6,
    name: "Shade Net",
    price: "₹300.00 – ₹2,500.00",
    image: "https://i.ibb.co/HDy5PMDX/71lce0dpw7-L-SS1000.jpg",
  },
];

const LandscapeProducts = () => {
  return (
    <section className="max-w-7xl mx-auto py-8 px-4 relative">
      <h2 className="text-[42px] font-medium mb-8 text-gray-800">
        Landscape Products
      </h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        // ****** KEY CHANGE HERE: Use CSS selectors for navigation elements ******
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}

        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-[#F2F4F6] p-4 rounded-lg shadow-md flex flex-col items-center justify-between h-full hover:shadow-lg transition-shadow duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded-md border border-gray-200"
              />
              <h3 className="text-lg font-semibold text-center text-[#1A1A1A] mb-2 mt-auto">
                {" "}
                {product.name}
              </h3>
              <p className="text-sm font-medium text-[#00000080] text-center mb-4">
                {product.price}
              </p>
              <div className="justify-end w-full">
                <button className=" bg-[#B0DD1D] hover:bg-lime-600 text-sm text-[#1A1A1A] font-medium py-3 px-7 rounded-full transition-colors duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="swiper-button-prev-custom absolute top-[58%] sm:left-4 left-5 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg cursor-pointer z-10
                   hover:bg-gray-100 transition-colors duration-300 transform -translate-x-1/2 sm:translate-x-0
                   flex items-center justify-center w-10 h-10"
      >
        <IoIosArrowBack size={24} className="text-gray-700" />
      </div>
      <div
        className="swiper-button-next-custom absolute top-[58%] sm:right-4 right-5 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg cursor-pointer z-10
                   hover:bg-gray-100 transition-colors duration-300 transform translate-x-1/2 sm:translate-x-0
                   flex items-center justify-center w-10 h-10"
      >
        <IoIosArrowForward size={24} className="text-gray-700" />
      </div>
    </section>
  );
};

export default LandscapeProducts;