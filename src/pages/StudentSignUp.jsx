import { React, useState } from "react";
import { useNavigate } from "react-router";
import { logo } from "../assets";
import Swal from "sweetalert2";
import { createStudent, signUp } from "../services/supabaseClient";

const StudentRegistration = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    college: "",
    degree: "",
    stream: "",
    year_start: "",
    year_end: "",
    resume_url: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSignup = () => {
    const { email, password } = form;
    if (!email || !password) return alert("Email and password are required.");
    signUp(
      email,
      password,
      () => setStep(2),
      (msg) => alert(msg)
    );
  };

  const handleFinalSubmit = async () => {
    const {
      email,
      firstName,
      lastName,
      college,
      degree,
      stream,
      year_start,
      year_end,
      resume_url,
    } = form;

    try {
      const full_name = `${firstName} ${lastName}`;

      const success = await createStudent({
        email,
        full_name,
        college,
        degree,
        stream,
        year_start,
        year_end,
        resume_url: resume_url || null,
      });

      if (success === true) {
        await Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "Your student account has been created!",
          confirmButtonColor: "#3085d6",
        });
        navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: "Could not register student. Please try again.",
          confirmButtonColor: "#d33",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error Occurred",
        text: error.message,
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <>
      {/* Sticky Header */}
      <header className="sticky top-0 z-10 flex justify-between items-center px-8 md:px-32 py-4 shadow bg-white font-medium text-[15px] font-inter">
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="Logo"
          className="h-10 cursor-pointer"
        />
      </header>

      {/* Main Container */}
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 pt-12 pb-24">
        {/* Heading Outside Box */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-snug">
            Sign-up and apply for free
          </h1>
          <div className="flex justify-center mt-2 mb-2">
            <img
              src="https://internshala.com/static/images/registration/student_new/underline_d.svg"
              alt="underline"
              className="h-4 w-48"
            />
          </div>
          <p className="text-gray-600 text-sm">
            3,00,000+ companies hiring on Internshala
          </p>
        </div>

        {/* Registration Box */}
        <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-xl">
          {step === 1 ? (
            <>
              {/* Email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="john@example.com"
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Must be at least 6 characters"
                />
              </div>

              {/* First & Last Name */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Sign up Button */}
              <button
                type="button"
                onClick={handleSignup}
                className="w-full bg-blue-500 text-white text-sm font-semibold py-2.5 rounded-md hover:bg-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              {/* Additional Fields */}
              {[
                "college",
                "degree",
                "stream",
                "year_start",
                "year_end",
              ].map((field) => (
                <div className="mb-4" key={field}>
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-gray-700 mb-1 capitalize"
                  >
                    {field.replace("_", " ")}
                  </label>
                  <input
                    type="text"
                    id={field}
                    value={form[field]}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder={`Enter ${field.replace("_", " ")}`}
                  />
                </div>
              ))}

              <button
                type="button"
                onClick={handleFinalSubmit}
                className="w-full bg-green-500 text-white text-sm font-semibold py-2.5 rounded-md hover:bg-green-600 transition-all focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                Submit Details
              </button>
            </>
          )}

          {/* Terms & Login - Centered */}
          <div className="text-center mt-6 text-sm text-gray-600 space-y-2">
            <p>
              By signing up, you agree to our{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Terms and Conditions
              </a>
              .
            </p>
            <p>
              Already registered?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentRegistration;
