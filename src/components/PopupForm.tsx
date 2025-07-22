import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import countryCodeData from "./country_code.json";

const PopupForm = ({ textColor, beforeSelectOptionTextColor, afterSelectOptionTextColor }) => {
  const [formdata, setFormData] = useState({ from: "VigorousIT", fname: "", email: "", lname: "", contact: "", country: "", message: "", service: "", budget: "", companyName: "", nda: "No" });
  const [validate, setValidate] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedOption, setSelectedOption] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [Selectedbudget, setSelectedbudget] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'country') {
      setSelectedCountry(value);
    }

    if (name === 'service') {
      setSelectedOption(value);
    }

    if (name === "budget") {
      setSelectedbudget(value);
    }

    if (name === "email") {
      if (!value) {
        setEmailError("Email is required.");
      }
      else if (!value.includes("@")) {
        setEmailError("Email should contain an '@' symbol.");
      }
      else if (value.indexOf("@") === 0) {
        setEmailError("Email should have characters before '@'.");
      }
      else if (!value.includes(".", value.indexOf("@"))) {
        setEmailError("Email should contain a domain (e.g., gmail.com).");
      }
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setEmailError("Email should have a valid format (e.g., user@example.com).");
      }
      else {
        setEmailError("");
      }
    }

    setFormData({ ...formdata, [name]: value });
  };


  const handleCheckbox = (e) => {
    const isChecked = e.target.checked
    setCheckbox(isChecked);
    setFormData({ ...formdata, nda: isChecked ? "Yes" : "No" });
  };


  async function submitHandle(e) {
    e.preventDefault();
    if (formdata.fname && formdata.contact && formdata.email) {
      setValidate(true);
      setLoading(true);
      const name = (formdata.fname + " " + formdata.lname).trim();
      const user = { ...formdata, name };
      const {...finalData } = user;
      // const { fname, lname, ...finalData } = user;

      try {
        const req = await axios.post("https://vigorousit-email.vercel.app/enquiry", finalData);
        const res = req?.data?.success;
        if (res) {
          router.push("/thankyoupage");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setLoading(false);
      }
    } else {
      setValidate(false);
    }
  }

  const selectTypes = [
    { value: "", label: "What are You Looking For?" },
    // { value: "Sports betting/Fantasy app", label: "Sports betting/Fantasy app" },
    { value: "Game development", label: "Game development" },
    { value: "Game/Sports API", label: "Game/Sports API" },
    { value: "Others", label: "Others" },
  ];

  const selectBudget = [
    { value: "", label: "Select Your Budget" },
    { value: "$10k - $25k", label: "$10k - $25k" },
    { value: "$25k - $50k", label: "$25k - $50k" },
    { value: "$50k - $100k", label: "$50k - $100k" },
    { value: "More than $100k", label: "More than $100k" },
  ];

  return (
    <section>
      <form className="space-y-5 text-left w-full lg:px-8 px-4 font-nunito max-w-7xl">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="fname"
            id="fname"
            className={`block py-2.5 px-0 w-full text-sm ${textColor} bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer`}
            placeholder="Full Name* "
            required
            onChange={handleChange}
          />
          {!validate && !formdata.fname && (
            <div className="invalid-feedback text-secondary text-xs font-light px-1">Full Name is required</div>
          )}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="emailForm"
            className={`block py-2.5 px-0 w-full text-sm ${textColor} bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer`}
            placeholder="Email* "
            required
            onChange={handleChange}
          />
          {emailError && (
            <div className="invalid-feedback text-red-500 text-xs font-light px-1">
              {emailError}
            </div>
          )}
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-3.5">
          <div className="relative z-0 w-full">
            <div className="group">
              <select
                name="country"
                aria-label="country"
                className={`block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer ${(selectedCountry && selectedCountry !== "") ? afterSelectOptionTextColor : beforeSelectOptionTextColor}`}
                required
                value={selectedCountry}
                onChange={handleChange}
              >
                <option value="">Select Your Country*</option>
                {countryCodeData.map((country, index) => (
                  <option key={index} value={country.name} className="mt-1 block w-full p-2 border bg-transparent focus:ring-1 focus:outline-none">
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="relative z-0 w-full group">
            <input
              type="number"
              name="contact"
              id="number"
              disabled={!selectedCountry}
              className={`block py-2.5 px-0 w-full text-sm ${textColor} bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer`}
              placeholder="Phone Number* "
              required
              onChange={handleChange}
            />
            {!validate && !formdata.contact && (
              <div className="invalid-feedback text-secondary text-xs font-light px-1">Phone Number is required</div>
            )}
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="companyName"
            id="companyName"
            className={`block py-2.5 px-0 w-full text-sm ${textColor} bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer`}
            placeholder="Company Name "
            required
            onChange={handleChange}
          />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-3.5">
          <div className="w-full">
            <select
              aria-label="choice"
              name="service"
              id="choiceForm-three"
              className={`block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer ${(selectedOption && selectedOption !== "") ? afterSelectOptionTextColor : beforeSelectOptionTextColor}`}
              required
              onChange={handleChange}
            >
              {selectTypes.map((option, index) => (
                <option key={index} value={option.value} className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer">
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <select
              name="budget"
              onChange={handleChange}
              aria-label="Select Your Budget"
              className={`block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer ${(Selectedbudget && Selectedbudget !== "disabled selected") ? afterSelectOptionTextColor : beforeSelectOptionTextColor}`}
            >
              {selectBudget.map((option, index) => (
                <option key={index} value={option.value} className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" >
                  {option.label}
                </option>))}
            </select>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="message"
            id="messageForm"
            className={`block py-2.5 px-0 w-full text-sm ${textColor} bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer`}
            placeholder="Your Message"
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center py-2">
          <div className="flex items-center">
            <input
              id="termslabel"
              type="checkbox"
              name="nda"
              checked={checkbox}
              className={`accent-[#FF6926] w-4 h-4 border rounded-xl ${textColor}`}
              onChange={handleCheckbox}
            />
          </div>
          <label htmlFor="termslabel" className={`ml-2 text-sm font-medium ${textColor}`}>Yes, send me a Mutual NDA (Non-Disclosure Agreement)</label>
        </div>
        <div className="w-full justify-end flex">
          <button
            id="popup-form"
            aria-label="popup-form"
            type="submit"
            onClick={submitHandle}
            className="text-white bg-secondary hover:bg-white hover:border-secondary border hover:text-ternary font-medium rounded-lg text-[15px] w-full sm:w-auto px-5 py-3 text-center"
          >
            {loading ? (
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 mr-3 text-primary animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08157 50.5908C9.08157 74.3807 26.2101 91.5092 50 91.5092C73.7899 91.5092 90.9184 74.3807 90.9184 50.5908C90.9184 26.8009 73.7899 9.67236 50 9.67236C26.2101 9.67236 9.08157 26.8009 9.08157 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5538C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.9901 15.1192 80.8826 10.7234 74.941 7.7681C69.9995 4.81275 64.2104 3.36962 58.3176 3.66143C55.8598 3.7912 53.8944 5.61789 53.4979 8.05579C53.1013 10.4937 54.4931 12.8688 56.937 13.4202C61.6142 14.4626 66.0506 16.2676 69.9427 18.7383C73.8349 21.209 77.1216 24.3173 79.6022 27.9086C81.5596 30.6675 83.0438 33.7302 84.0077 36.953C84.8284 39.4631 87.5423 40.9463 90.0105 40.3133C90.0199 40.311 90.0293 40.3086 90.0387 40.3063L93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </section>
  );
}

export default PopupForm;
