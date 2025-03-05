import { testimonials } from "../constant";

const Testimonials = () => {
    return (
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-700">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            See why people love our delicious, creamy yogurts!
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {testimonials.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all max-w-xs"
              >
                <img
                  src={review.image}
                  alt={review.user}
                  className="w-20 h-20  rounded-full mx-auto mb-4 outline-4 outline-pink-400"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {review.user}
                </h3>
                <p className="text-sm text-pink-600 font-medium">
                  {review.favoriteFlavor}
                </p>
                <p className="text-gray-600 mt-3">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Testimonials;
