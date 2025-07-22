import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import countryCodeData from "./country_code.json";

const ContactForm = () => {
  const [formdata, setFormData] = useState({ from: "VigorousIt", fname: "", email: "", lname: "", contact: "", country: "", message: "", service: "", budget: "", companyName: "" });
  const [validate, setValidate] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedOption, setSelectedOption] = useState("");
  const [Selectedbudget, setSelectedbudget] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'country') {
      setSelectedCountry(value);
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

    if (name === 'service') {
      setSelectedOption(value);
    }

    setFormData({ ...formdata, [name]: value });
  };

  const submitHandle = async (e) => {
    e.preventDefault();

    if (formdata.fname && formdata.contact && formdata.email) {
      setValidate(true);
      setLoading(true);

      const name = (formdata.fname + " " + formdata.lname).trim();
      const user = { ...formdata, name, };
      const { ...finalData } = user;
      // const { fname, lname, ...finalData } = user;
      const req = await axios.post("https://vigorousit-email.vercel.app/enquiry", finalData);
      const res = req?.data?.success;
      if (res) {
        setLoading(false);
        router.push("/thankyoupage");
      }
    } else {
      setValidate(false);
    }
  };


  const selectTypes = [
    // { value: "Sports betting/Fantasy app", label: "Sports betting/Fantasy app" },
    { value: "Game development", label: "Game development" },
    { value: "Game/Sports API", label: "Game/Sports API" },
    { value: "Others", label: "Others" },
  ];

  const selectBudget = [
    { value: "$10k - $25k", label: "$10k - $25k" },
    { value: "$25k - $50k", label: "$25k - $50k" },
    { value: "$50k - $100k", label: "$50k - $100k" },
    { value: "More than $100k", label: "More than $100k" },
  ];

  return (
    <section className="lg:py-10 py-5 font-nunito" id="contact">
      <div className="lg:space-x-10 space-x-0 lg:w-4/5 w-full mx-auto">
        <form className="text-left w-full" onSubmit={submitHandle}>
          <div className="bg-gray-50 rounded-md border-gray-300 border">
            <h2 className="text-2xl text-center text-primary font-bold p-5 font-inter">
              Lets build or improve your digital product
            </h2>

            <div className="px-2 bg-gray-100 m-4">
              <input type="text" name="fname"
                placeholder="Full Name*"
                value={formdata.fname}
                onChange={handleChange}
                className="w-full p-4 font-light border-b bg-gray-100 outline-none focus:border-gray-600" required />
              {!validate && !formdata.fname && (
                <span className="text-red-500 text-[10px] pl-2">Full Name is required</span>
              )}

              <input type="text" name="email"
                placeholder="Email"
                value={formdata.email}
                onChange={handleChange}
                className="w-full p-4 font-light border-b bg-gray-100 outline-none focus:border-gray-600" required />
              {emailError && (
                <div className="invalid-feedback text-red-500 text-xs font-light px-1">
                  {emailError}
                </div>
              )}
              <div className="grid sm:grid-cols-2 sm:gap-6">
                <div className="relative z-0 w-full">
                  <div className="group">
                    <select
                      name="country"
                      aria-label="country"
                      className={`block p-4 w-full text-sm bg-gray-100 border-b  appearance-none outline-none focus:border-gray-600 peer ${(selectedCountry && selectedCountry !== "") ? "text-black" : "text-gray-600"}`}
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
                    className={`block p-4  w-full text-sm text-black bg-gray-100 border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer`}
                    placeholder="Phone Number* "
                    required
                    onChange={handleChange}
                  />
                  {!validate && !formdata.contact && (
                    <div className="invalid-feedback text-secondary text-xs font-light px-1">Phone Number is required</div>
                  )}
                </div>
              </div>
              <input type="text" name="companyName"
                placeholder="Company Name"
                value={formdata.companyName}
                onChange={handleChange}
                className="w-full p-4 font-light border-b bg-gray-100 outline-none focus:border-gray-600" />

              <div className="sm:flex gap-4">
                <div className="w-full">
                  <select
                    name="service"
                    id="choiceForm-one"
                    aria-label="service"
                    className={`block p-4 w-full text-sm bg-gray-100 border-b  appearance-none outline-none focus:border-gray-600 peer ${(selectedOption && selectedOption !== "") ? "text-black" : "text-gray-600"}`}
                    required
                    value={selectedOption}
                    onChange={handleChange}
                  >
                    <option value="">What are you Looking for</option>
                    {selectTypes.map((option, index) => (
                      <option key={index} value={option.value} className="mt-1 block w-full p-2 border bg-transparent focus:ring-1 focus:outline-none">
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="w-full">
                  <select
                    name="budget"
                    id="budget-one"
                    aria-label="budget"
                    className={`block p-4 w-full text-sm bg-gray-100 border-b  appearance-none outline-none focus:border-gray-600 peer ${(Selectedbudget && Selectedbudget !== "") ? "text-black" : "text-gray-600"}`}
                    required
                    value={Selectedbudget}
                    onChange={handleChange}
                  >
                    <option value="">Select Your Budget</option>
                    {selectBudget.map((option, index) => (
                      <option key={index} value={option.value} className="mt-1 block w-full p-2 border bg-transparent focus:ring-1 focus:outline-none">
                        {option.label}
                      </option>
                    ))}
                  </select>

                </div>
              </div>



              <div className="md:col-span-2">
                <textarea name="message"
                  cols={18} rows={3} placeholder="Message"
                  value={formdata.message}
                  onChange={handleChange}
                  className="w-full p-4 font-light border-b bg-gray-100 outline-none focus:border-gray-600"></textarea>
              </div>
            </div>

            <div className="flex py-5 px-5">
              <button type="submit" className="text-base active text-white font-semibold bg-blue-700 hover:text-primary hover:bg-white border-blue-500 border rounded-lg lg:py-2 py-3 text-center cursor-pointer transition duration-300 relative w-40">
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
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
