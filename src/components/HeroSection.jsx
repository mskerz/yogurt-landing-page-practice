import { yogurt_hero } from "../constant";
const HeroSection = () => {
    return (
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide font-bold text-pink-600">
          Indulge in the <span className="bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">Creamy Bliss</span>
        </h1>
        <p className="mt-6 text-lg text-center text-gray-600 max-w-3xl">
          Treat yourself to the delicious and healthy goodness of our premium yogurt. Made with the finest ingredients for a taste that’s simply irresistible!
        </p>
        <div className="flex justify-center my-10">
          <a
            href="#"
            className="bg-gradient-to-r from-pink-400 to-purple-500 py-3 px-6 mx-3 rounded-lg text-white font-semibold shadow-md hover:shadow-lg"
          >
            Shop Now
          </a>
          <a
            href="#"
            className="py-3 px-6 mx-3 rounded-lg border border-pink-400 text-pink-600 font-semibold hover:bg-pink-50"
          >
            Learn More
          </a>
        </div>
        <div className="flex justify-center mt-10">
          <img
            src={yogurt_hero}
            alt="Delicious Yogurt"
            className="rounded-lg w-8/5 border outline-2 outline-pink-300 shadow-lg "
          />
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  