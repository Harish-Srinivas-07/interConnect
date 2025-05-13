import { useState,useCallback,useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 
import useEmblaCarousel from "embla-carousel-react";


const categories = [
  "Big brands",
  "Work from home",
  "Part-time",
  "MBA",
  "Engineering",
  "Media",
  "Design",
  "Data Science",
];

const internships = [
  {
    id: 1,
    title: "MIS",
    company: "Hungama Digital Media Entertainment Private Limited",
    location: "Mumbai",
    stipend: "₹ 5,000 /month",
    duration: "3 Months",
    activelyHiring: true,
    category: "Big brands",
   
  },
  {
    id: 2,
    title: "Content Development (English)",
    company: "Material Holdings, LLC",
    location: "Gurgaon (Hybrid)",
    stipend: "₹ 25,000 /month",
    duration: "6 Months",
    activelyHiring: false,
    category: "Part-time",
  },
  {
    id: 3,
    title: "Human Resources (HR)",
    company: "Justdial",
    location: "Hyderabad",
    stipend: "₹ 10,000 - 12,000 /month",
    duration: "3 Months",
    activelyHiring: false,
    category: "Engineering",
  },
  {
    id: 4,
    title: "Customer Service/Customer Support",
    company: "Waaree Energies Limited",
    location: "Mumbai",
    stipend: "₹ 5,000 - 10,000 /month",
    duration: "3 Months",
    activelyHiring: false,
    category: "Big brands",
  },
  {
    id: 5,
    title: "Marketing Analyst",
    company: "ABC Corp",
    location: "Work From Home",
    stipend: "₹ 15,000 /month",
    duration: "4 Months",
    activelyHiring: true,
    category: "Work from home",
  },
  {
    id: 6,
    title: "Business Development Intern",
    company: "XYZ Solutions",
    location: "Bangalore",
    stipend: "₹ 12,000 /month",
    duration: "6 Months",
    activelyHiring: true,
    category: "MBA",
  },
  {
    id: 7,
    title: "Software Engineering Intern",
    company: "Tech Innovations Ltd.",
    location: "Chennai",
    stipend: "₹ 18,000 /month",
    duration: "3 Months",
    activelyHiring: true,
    category: "Engineering",
  },
  {
    id: 8,
    title: "Social Media Marketing Intern",
    company: "Global Media Group",
    location: "Delhi",
    stipend: "₹ 8,000 /month",
    duration: "2 Months",
    activelyHiring: true,
    category: "Media",
  },
  {
    id: 9,
    title: "Graphic Design Intern",
    company: "Creative Studio Inc.",
    location: "Pune",
    stipend: "₹ 10,000 /month",
    duration: "4 Months",
    activelyHiring: false,
    category: "Design",
  },
  {
    id: 10,
    title: "Data Science Intern",
    company: "Analytics AI",
    location: "Work From Home",
    stipend: "₹ 20,000 /month",
    duration: "6 Months",
    activelyHiring: true,
    category: "Data Science",
  },
  {
    id: 11,
    title: "Marketing Intern",
    company: "Tata Consultancy Services",
    location: "Chennai",
    stipend: "₹ 12,000 /month",
    duration: "6 Months",
    activelyHiring: true,
    category: "Big brands",
   
  },
  {
    id: 12,
    title: "Finance Intern",
    company: "Reliance Industries Limited",
    location: "Mumbai",
    stipend: "₹ 15,000 /month",
    duration: "3 Months",
    activelyHiring: true,
    category: "Big brands",
  },
  {
    id: 13,
    title: "Software Development Intern",
    company: "Infosys",
    location: "Bangalore",
    stipend: "₹ 18,000 /month",
    duration: "4 Months",
    activelyHiring: true,
    category: "Big brands",
  },
  {
    id: 14,
    title: "Human Resources Intern",
    company: "Hindustan Unilever Limited",
    location: "Kolkata",
    stipend: "₹ 10,000 /month",
    duration: "3 Months",
    activelyHiring: false,
    category: "Big brands",
  },
  {
    id: 15,
    title: "Business Analyst Intern",
    company: "ICICI Bank",
    location: "Hyderabad",
    stipend: "₹ 14,000 /month",
    duration: "6 Months",
    activelyHiring: true,
    category: "Big brands",
  },
  {
    id: 16,
    title: "Digital Marketing Intern",
    company: "Aditya Birla Group",
    location: "Mumbai",
    stipend: "₹ 11,000 /month",
    duration: "3 Months",
    activelyHiring: true,
    category: "Big brands",
  },
  {
    id: 17,
    title: "Operations Intern",
    company: "Mahindra & Mahindra",
    location: "Pune",
    stipend: "₹ 13,000 /month",
    duration: "4 Months",
    activelyHiring: false,
    category: "Big brands",
  },
  {
    id: 18,
    title: "Research and Development Intern",
    company: "Larsen & Toubro",
    location: "Chennai",
    stipend: "₹ 16,000 /month",
    duration: "6 Months",
    activelyHiring: true,
    category: "Big brands",
  },
  {
    id: 19,
    title: "Corporate Communications Intern",
    company: "Bharti Airtel",
    location: "Delhi",
    stipend: "₹ 9,000 /month",
    duration: "3 Months",
    activelyHiring: false,
    category: "Big brands",
  },
  {
    id: 20,
    title: "Sales Intern",
    company: "ITC Limited",
    location: "Kolkata",
    stipend: "₹ 10,500 /month",
    duration: "4 Months",
    activelyHiring: true,
    category: "Big brands",
  },
];

function LatestInternship() {
  const [activeCategory, setActiveCategory] = useState("Big brands");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    skipSnaps: false,
    dragFree: false,
  });

  const [scrollProgress, setScrollProgress] = useState(0);

  // Next/Prev callbacks
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  // Update scrollProgress on slide change
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      const snaps = emblaApi.scrollSnapList().length;
      const idx = emblaApi.selectedScrollSnap();
      setScrollProgress((idx + 1) / snaps);
    };
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  const filteredInternships = internships.filter(
    (i) => i.category === activeCategory
  );

  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
        Latest internships on Internshala
      </h2>
      {/* Categories with Title */}
      <div className="flex items-center justify-center flex-wrap gap-4 mb-12">
        <h2 className="text-sm font-semibold text-gray-700 tracking-wider">
          POPULAR CATEGORIES :
        </h2>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              emblaApi && emblaApi.reInit();
            }}
            className={`px-5 py-1 rounded-full border ${
              activeCategory === category
                ? "bg-blue-400 text-white border-blue-400"
                : "bg-white text-gray-600 border-gray-300"
            } text-sm font-medium transition-all`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex embla__container gap-6 px-20">
          {filteredInternships.map((internship) => (
            <div
              key={internship.id}
              className="embla__slide w-[300px] min-w-[300px] bg-white rounded-2xl border border-gray-200 p-5 text-left shadow-sm hover:shadow-md flex flex-col justify-between transition"
            >
              {internship.activelyHiring && (
                <div className="flex items-center gap-1 text-sm text-blue-600 mb-2 font-semibold">
                  📈 Actively hiring
                </div>
              )}
              <h3 className="text-lg font-semibold text-gray-800">
                {internship.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{internship.company}</p>
              {internship.companyLogo && (
                <img
                  src={internship.companyLogo}
                  alt={`${internship.company} logo`}
                  className="w-16 h-16 mb-4 object-contain"
                />
              )}
              <div className="flex flex-col gap-2 text-sm text-gray-700 mb-4">
                <div className="flex items-center gap-2">
                  📍 {internship.location}
                </div>
                <div className="flex items-center gap-2">
                  💰 {internship.stipend}
                </div>
                <div className="flex items-center gap-2">
                  🗓️ {internship.duration}
                </div>
              </div>
              <div className="mt-auto flex justify-between items-center">
                <span className="text-xs bg-gray-200 text-gray-700 py-1 px-3 rounded-md">
                  Internship
                </span>
                <button className="text-blue-400 text-sm font-medium flex items-center gap-1 hover:underline">
                  View details <FaChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Navigation + Modern Scrollbar Indicator */}
      <div className="mt-6 flex items-center justify-center gap-6">
        <button
          onClick={scrollPrev}
          aria-label="Previous"
          className="p-3 bg-white shadow-sm border border-gray-200 rounded-full hover:bg-blue-100 transition"
        >
          <FaChevronLeft size={16} />
        </button>

        <div className="relative w-40 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="absolute top-0 h-full w-10 bg-blue-400 rounded-full transition-transform duration-300"
            style={{ transform: `translateX(${scrollProgress * 100}%)` }}
          />
        </div>

        <button
          onClick={scrollNext}
          aria-label="Next"
          className="p-3 border-gray-200 bg-white shadow-sm border rounded-full hover:bg-blue-100 transition"
        >
          <FaChevronRight size={16} />
        </button>
      </div>
    </section>
  );
}


export default LatestInternship;

