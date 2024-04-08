import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { items, fibreitems } from "./items";
import { useState } from "react";
import "../styles.css";
const Register = ({ selectedDate, selectedTime }) => {
  const formattedDate = selectedDate
    ? selectedDate.toDateString()
    : "9:00am - 9:15am, Monday, July 13, 2020";
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim()) {
      setNameError("Name is required.");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    navigate("/confirm");
  };
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission on Enter key press
    }
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError(""); // Clear any previous error message
  };
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-auto min-w-[360px] lg:max-w-4xl ">
        <section className="w-full md:w-1/2 p-4 md:p-8 focus:outline-none">
          <Link to="/">
            <button class="back-btn">
              <img
                src="icons/arrow (1).svg"
                alt="back-arrow"
                className="w-5 h-5 mr-4"
              />
            </button>
          </Link>
          <div className="flex items-center justify-center mb-4">
            <img src="./icons/icon.png" alt="fibre-icon" />
          </div>
          <h2 className="text-medium lg:text-2xl font-semibold text-gray-700 mb-4">
            Fibery Demo
          </h2>
          <div className="flex items-center mb-3">
            <img
              src="icons/clock.svg"
              alt="clock-icon"
              className="w-5 h-5 mr-2"
            />
            <h4>45 min</h4>
          </div>
          <div className="flex items-center mb-3">
            <img
              src="icons/calendar (1).svg"
              alt="calendar-icon"
              className="w-5 h-5 mr-2"
            />
            <h4>
              {formattedDate}, {selectedTime}
            </h4>
          </div>
          <p className="text-base leading-relaxed text-gray-600">
            Book a meeting with our Fibery team. Talk to a real person about how
            to get your processes set up with us 🐴or not 💩
          </p>
        </section>
        <section className="w-full md:w-1/2 p-4 md:p-8 focus:outline-none overflow-y-auto max-h-[80vh] scrollbar-custom">
          <form className="max-w-sm ">
            <h3>Enter Details</h3>
            <div className="mb-4">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                name=""
                id="name"
                value={name}
                required
                onKeyDown={handleKeyDown}
                onChange={handleNameChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
           dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
            </div>
            <div className="mb-4">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name=""
                id="email"
                value={email}
                onKeyDown={handleKeyDown}
                onChange={handleEmailChange}
                required
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
           dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {emailError && (
                <p className="text-red-500 text-sm">{emailError}</p>
              )}
            </div>
            <div class="mb-4 ">
              <label
                for="checkbox"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                I want Fibery to work for:*
              </label>
              {items.map((item) => {
                return (
                  <ul class="w-48">
                    <li class="w-full ">
                      <div class="flex items-center ps-3">
                        <input
                          id="checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4"
                          onKeyDown={handleKeyDown}
                          key={item.id}
                        />
                        <label
                          for="checkbox"
                          class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {item.Name}
                        </label>
                      </div>
                    </li>
                  </ul>
                );
              })}
            </div>

            <div class="mb-4 ">
              <label
                for="checkbox"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                You are more about *
              </label>
              {fibreitems.map((item) => {
                return (
                  <ul class="w-48">
                    <li class="w-full ">
                      <div class="flex items-center ps-3">
                        <input
                          id="checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4"
                          onKeyDown={handleKeyDown}
                          key={item.id}
                        />
                        <label
                          for="checkbox"
                          class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {item.Name}
                        </label>
                      </div>
                    </li>
                  </ul>
                );
              })}
            </div>

            <div className="mb-4">
              <label
                for="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                please,share anything that will help prepare for our meeting
              </label>
              <textarea
                name=""
                onKeyDown={handleKeyDown}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
           dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label for="name block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                please,share with us the name of your fibrey workspace (if any)
              </label>
              <input
                type="text"
                name=""
                id="name"
                onKeyDown={handleKeyDown}
                required
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
           dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 
            py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Schedule Event
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};
export default Register;
