"use client"

import { useState } from "react";
import Header from "../../components/Header";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import Image from 'next/image';
import HQSection from '../../components/HQSection';
import Contact from '../../components/Contact';
import contact from "./contact.json";

const About = () => {

    // const [isOpen, setIsOpen] = useState(false);

    type FormErrors = {
        name?: string;
        mobile?: string;
        email?: string;
        institute?: string;
        country?: string;
        message?: string;
        agreeTerms?: string;
    };

    const [errors, setErrors] = useState<FormErrors>({});

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        institute: '',
        country: '',
        message: '',
        shareMaterial: false,
        agreeTerms: false
    });

    const [focusedFields, setFocusedFields] = useState({
        name: false,
        mobile: false,
        email: false,
        institute: false,
        country: false,
        message: false
    });

    const { offceHQ, contactNo } = contact;

    type Field = keyof typeof formData;
    const handleFocus = (field: Field) => {
        setFocusedFields(prev => ({ ...prev, [field]: true }));
    };

    const handleBlur = (field: Field) => {
        if (!formData[field]) {
            setFocusedFields(prev => ({ ...prev, [field]: false }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.institute.trim()) newErrors.institute = 'Institute Name is required';
        if (!formData.country.trim()) newErrors.country = 'Country is required';

        if (!formData.mobile.trim()) {
            newErrors.mobile = 'Mobile No. is required';
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            newErrors.mobile = 'Enter a valid 10-digit mobile number';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Enter a valid email address';
        }

        if (!formData.agreeTerms) {
            newErrors.agreeTerms = 'You must agree to the terms and conditions';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});

    };

    return (
        <>
            <Header />

            {/* Get In Touch Section */}
            <div className="w-full pt-28 bg-primary font-nunito pb-20 ">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col-reverse md:flex-row items-start justify-between md:gap-8">
                        <div className="w-full md:w-1/2 text-center md:text-left md:pt-16 pt-2 pb-4">
                            <h2 className="md:text-5xl font-bold text-white font-inter text-3xl">
                                Get in touch<span className="text-secondary text-5xl">.</span>
                            </h2>
                            <p className="text-gray-100  text-lg md:text-xl mt-4">
                                {"Want to get in touch? We'd love to hear from you. Here's how you can reach us."}
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Image
                                src="/images/contact/get-in-touch.webp"
                                alt="get-in-touch"
                                title="get-in-touch"
                                width={600}
                                height={400}
                                className="rounded-3xl object-cover w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Card Section */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 font-nunito">
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col space-y-4 items-center text-center max-w-md w-full">
                        <div className="text-secondary text-4xl">
                            <IoCallOutline />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900 font-inter">Talk to Sales</h2>
                        <p className="text-gray-600">
                            Interested in HubSpot’s software? Just pick up the phone to chat with a member of our sales .
                        </p>
                        <p className="text-lg font-medium text-primary">000800 050 3669</p>
                        <p className="text-secondary border-b border-secondary cursor-pointer hover:text-secondary/80 transition">
                            View all global numbers
                        </p>
                    </div>
                    <div className="bg-white border-t rounded-xl shadow-lg p-8 flex flex-col space-y-4 items-center text-center max-w-md w-full">
                        <div className="text-secondary text-4xl">
                            <MdOutlineMessage />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900 font-inter">Contact Customer Support</h2>
                        <p className="text-gray-600">
                            Sometimes you need a little help from your friends. Or a HubSpot support rep. Don’t worry… we’re here for you.
                        </p>
                        <button className="px-6 py-3 bg-secondary text-white rounded-md hover:bg-secondary/80 transition ">
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>

            {/* Map & Contact Form Section */}
            <div className="w-full px-4 py-12  font-nunito">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-primary mb-4">
                            Connect with our <span className="text-secondary">Global Offices</span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Reach out to our team worldwide for inquiries, partnerships, or support.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row bg-white">
                        <div className="w-full lg:w-1/2 overflow-hidden">
                            <iframe
                                title="Global Offices Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222.3380238326932!2d75.7397929011729!3d26.922265053857455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db367adcc873b%3A0xbe79e60941c05e9a!2s250%2C%20Janak%20Marg!5e0!3m2!1sen!2sin!4v1738127244490!5m2!1sen!2sin"
                                className="w-full h-[500px] lg:h-full border-none"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div className="w-full lg:w-1/2 bg-white md:py-2 md:pr-8 md:pl-6 py-4 pr-2 pl-2">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {(['name', 'email', 'mobile', 'institute'] as const).map((field) => (
                                        <div className="h-14 relative" key={field}>
                                            <input
                                                type={field === 'email' ? 'email' : field === 'mobile' ? 'tel' : 'text'}
                                                name={field}
                                                value={formData[field]}
                                                onChange={(e) => {
                                                    setFormData({ ...formData, [field]: e.target.value });
                                                    if (errors[field]) setErrors({ ...errors, [field]: '' });
                                                }}
                                                onFocus={() => handleFocus(field)}
                                                onBlur={() => handleBlur(field)}
                                                className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 ${errors[field]
                                                    ? 'border-red-500 focus:ring-red-200'
                                                    : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'}`}
                                            />
                                            <label className={`absolute left-4 transition-all duration-200 pointer-events-none bg-white px-1 ${focusedFields[field] || formData[field]
                                                ? '-top-3 text-sm text-blue-600'
                                                : 'top-3 text-gray-500'}`}>
                                                {field.charAt(0).toUpperCase() + field.slice(1).replace('mobile', 'Mobile No.').replace('institute', 'Institute')} <span className="text-red-500">*</span>
                                            </label>
                                            {errors[field] && <p className="text-xs text-red-500 mt-1 ml-1">{errors[field]}</p>}
                                        </div>
                                    ))}
                                </div>

                                {/* Country */}
                                <div className="relative h-14">
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={(e) => {
                                            setFormData({ ...formData, country: e.target.value });
                                            if (errors.country) setErrors({ ...errors, country: '' });
                                        }}
                                        onFocus={() => handleFocus('country')}
                                        onBlur={() => handleBlur('country')}
                                        className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 ${errors.country
                                            ? 'border-red-500 focus:ring-red-200'
                                            : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'}`}
                                    >
                                        <option value="">Select Country</option>
                                        <option value="USA">United States</option>
                                        <option value="UK">United Kingdom</option>
                                        <option value="India">India</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Australia">Australia</option>
                                    </select>
                                    {errors.country && <p className="text-xs text-red-500 mt-1 ml-1">{errors.country}</p>}
                                </div>

                                {/* Message */}
                                <div className="relative">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        onFocus={() => handleFocus('message')}
                                        onBlur={() => handleBlur('message')}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                                    />
                                    <label className={`absolute left-4 transition-all duration-200 pointer-events-none bg-white px-1 ${focusedFields.message || formData.message
                                        ? '-top-3 text-sm text-blue-600'
                                        : 'top-4 text-gray-500'}`}>
                                        Your Message
                                    </label>
                                </div>

                                {/* Checkboxes */}
                                <div className="space-y-4 h-20">
                                    <div className="flex items-start">
                                        <input
                                            type="checkbox"
                                            name="shareMaterial"
                                            checked={formData.shareMaterial}
                                            onChange={(e) => setFormData({ ...formData, shareMaterial: e.target.checked })}
                                            className="h-4 w-4 text-blue-600 rounded accent-orange-600 border-gray-300 focus:ring-blue-500"
                                        />
                                        <label className="ml-3 text-sm text-gray-700">Share marketing materials with me</label>
                                    </div>

                                    <div className="flex items-start">
                                        <input
                                            type="checkbox"
                                            name="agreeTerms"
                                            checked={formData.agreeTerms}
                                            onChange={(e) => {
                                                setFormData({ ...formData, agreeTerms: e.target.checked });
                                                if (errors.agreeTerms) setErrors({ ...errors, agreeTerms: '' });
                                            }}
                                            className="h-4 w-4 text-blue-600 accent-orange-600 rounded border-gray-300 focus:ring-blue-500"
                                        />
                                        <label className="ml-3 text-sm text-gray-700">
                                            I agree to the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a>
                                            <span className="text-red-500">*</span>
                                        </label>
                                    </div>
                                    {errors.agreeTerms && <p className="text-xs text-red-500 ml-1 !mt-2">{errors.agreeTerms}</p>}
                                </div>

                                <button type="submit" className="w-full bg-secondary text-white py-4 px-6 rounded-lg hover:bg-secondary/80 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* HQ Section */}
            <HQSection offices={offceHQ} />

            {/* Contact Numbers Section */}
            <Contact contact={contactNo} heading="Call Sales using one of our local numbers" />
        </>
    );
};

export default About;
