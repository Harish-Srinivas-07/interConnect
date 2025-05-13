import { slide1, slide2, slide3 } from "../assets";

function TrendingSection() {
  return (
    <section className="text-center py-16 px-6">
      {/* Top Heading */}
      <h1 className="text-5xl font-extrabold text-gray-800 leading-relaxed relative inline-block">
        Make your{" "}
        <span className="relative text-black inline-block">
          dream career
          <div >
            <img
              src="http://internshala.com/static/images/registration/student_new/underline_d.svg"
              alt="underline"
              className="w-full h-5"
            />
          </div>
        </span>{" "}
        a reality
      </h1>

      {/* Subheading */}
      <p className="text-2xl font-bold mt-8 mb-10">
        Trending on Internshala{" "}
        <span role="img" aria-label="fire">
          🔥
        </span>
      </p>

      <div className="flex justify-between w-full px-6">
        <div className="flex-1 p-2">
          <img
            src={slide1}
            alt="Slide 1"
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        </div>
        <div className="flex-1 p-2">
          <img
            src={slide2}
            alt="Slide 2"
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        </div>
        <div className="flex-1 p-2">
          <img
            src={slide3}
            alt="Slide 3"
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export default TrendingSection;
