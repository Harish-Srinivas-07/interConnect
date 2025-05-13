import { useState,useEffect } from "react";
import { FiChevronDown, FiSearch, FiBell } from "react-icons/fi";
import { logo } from "../assets";
import { useNavigate } from "react-router";
import {supabase} from "../services/supabaseClient";

const internshipMenu = {
  "Top Locations": [
    "Work from Home",
    "Internship in Bangalore",
    "Internship in Delhi",
    "Internship in Hyderabad",
    "Internship in Mumbai",
    "Internship in Chennai",
    "Internship in Pune",
    "Internship in Kolkata",
    "Internship in Jaipur",
    "International Internship",
    "View all internships",
  ],
  Profile: [
    "Computer Science Internship",
    "Marketing Internship",
    "Finance Internship",
    "Graphic Design Internship",
    "Architecture Internship",
    "Mechanical Internship",
    "HR Internship",
    "Digital Marketing Internship",
    "Law Internship",
    "Electronics Internship",
    "Content Writing Internship",
    "Civil Internship",
  ],
  "Top Categories": [],
  "Explore More Internships": [],
  "Placement Guarantee Courses": [],
};

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [session, setSession] = useState(null);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
    };
    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      setShowLogin(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setShowProfileDropdown(false);
    navigate("/");
  };

  return (
    <>
      <header className="flex justify-between items-center px-32 py-5 shadow bg-white font-medium text-[15px] font-inter">
        {/* Logo */}
        <div>
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="Logo"
            className="h-10 cursor-pointer"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8 relative">
          <InternshipDropdown />
          <Dropdown
            label="Jobs"
            items={[
              {
                section: "Categories",
                links: ["Fresher Jobs", "Work from Home Jobs", "View all Jobs"],
              },
            ]}
          />
          <Dropdown
            label={
              <span className="flex items-center gap-2">
                Courses
                <span className="bg-orange-400 text-white text-[12px] px-2 py-1 rounded-md font-semibold">
                  OFFER
                </span>
              </span>
            }
            items={[
              {
                section: "Top Courses",
                links: ["Web Development", "Data Science", "Digital Marketing"],
              },
            ]}
          />
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-5 text-gray-600 relative">
          {session ? (
            <>
              <FiBell className="text-xl cursor-pointer" />

              <div className="relative">
                <button
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  className="w-8 h-8 rounded-full border border-blue-500 text-blue-500 font-bold flex items-center justify-center"
                >
                  {session.user.email[0].toUpperCase()}
                </button>

                {showProfileDropdown && (
                  <div className="absolute right-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-3 text-sm z-50">
                    <div className="px-4 py-2 font-semibold">
                      {session.user.email}
                    </div>
                    <hr />
                    <ul className="space-y-2 px-4 py-2">
                      <li className="cursor-pointer hover:text-blue-500">
                        My Applications
                      </li>
                      <li className="cursor-pointer hover:text-blue-500">
                        Bookmarks
                      </li>
                      <li className="cursor-pointer hover:text-blue-500">
                        Edit Resume
                      </li>
                      <li className="cursor-pointer hover:text-blue-500">
                        Preferences
                      </li>
                      <li
                        className="cursor-pointer hover:text-blue-500 font-medium"
                        onClick={handleLogout}
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center cursor-pointer">
                <FiSearch className="mr-1 text-lg font-semibold" />
                <span>Search</span>
                </div>
                
              <button
                onClick={() => setShowLogin(true)}
                className="border font-semibold border-blue-500 text-blue-500 px-6 py-1.5 rounded hover:bg-blue-50"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/registration/student")}
                className="bg-blue-500 font-semibold text-white px-5 py-2 rounded hover:bg-blue-600"
              >
                Candidate Sign-up
              </button>
              <button className="bg-blue-500 font-semibold text-white px-5 py-2 rounded hover:bg-blue-600">
                Employer Sign-up
              </button>
            </>
          )}
        </div>
      </header>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl relative">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            <h2 className="text-center text-2xl font-semibold text-blue-500 mb-8">
              Student Login
            </h2>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {errorMsg && (
                <div className="text-sm text-red-600 font-medium">
                  {errorMsg}
                </div>
              )}

              <div className="text-sm text-blue-600 hover:underline cursor-pointer text-left">
                Forgot Password?
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2.5 rounded-lg font-semibold transition duration-200"
              >
                Login
              </button>

              <div className="text-center text-sm text-gray-600">
                New to InterConnect?{" "}
                <span
                  onClick={() => {
                    setShowLogin(false);
                    navigate("/registration/student");
                  }}
                  className="text-blue-500 hover:underline cursor-pointer font-bold"
                >
                  Register
                </span>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

function InternshipDropdown() {
  const [isOpen, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Top Locations");

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-grey-900">
        Internships <FiChevronDown className="" />
      </button>

      {isOpen && (
        <div className="absolute top-10 left-0 flex bg-white border shadow-lg w-[700px] z-50">
          {/* Sidebar */}
          <div className="w-1/2 border-r">
            {Object.keys(internshipMenu).map((section, i) => (
              <div
                key={i}
                onMouseEnter={() => setActiveSection(section)}
                className={`px-4 py-3 cursor-pointer text-[15px] ${
                  activeSection === section
                    ? "bg-blue-50 text-grey-900 font-semibold"
                    : "hover:bg-gray-100 text-gray-800"
                }`}
              >
                {section}
                {section === "Placement Guarantee Courses" && (
                  <span className="ml-2 bg-orange-400 text-white text-xs px-1 py-0.5 rounded">
                    NEW
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="w-1/2 px-4 py-4 text-gray-800 space-y-1 text-[15px] font-semibold">
            {internshipMenu[activeSection].map((link, i) => (
              <div key={i} className="hover:text-blue-500 cursor-pointer">
                {link}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Dropdown({ label, items }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-gray-700 hover:text-blue-500">
        {label} <FiChevronDown className="text-gray-500" />
      </button>

      {isOpen && (
        <div className="absolute top-10 left-0 bg-white border rounded shadow-lg w-[450px] grid grid-cols-1 p-4 z-50">
          {items.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-blue-600 font-semibold mb-2 text-[15px]">
                {section.section}
              </h4>
              <ul className="space-y-1 text-gray-700 font-semibold text-[15px]">
                {section.links.map((link, index) => (
                  <li
                    key={index}
                    className="hover:text-blue-500 cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Header;
