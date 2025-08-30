import React from "react";
import { FaCheck, FaPlay, FaQuoteLeft, FaStar } from "react-icons/fa";
import { Phone, Mail, Headphones, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Slider from "react-slick";
import a from '../image/image1.webp';

import c from '../image/Ayurveda/a7.png';
import d from '../image/Physiotherapy/pt4.png';
import e from '../image/general_phy/dd3.png';
import f from '../image/skin/bot.jpeg';
import g from '../image/skin/hairprp2.png';

import logo from '../image/ChatGPT.png';

const services = [
  {
    title: "Aesthetic Dermatology",
    description:
      "From preventive care to specialized treatments, our wide range.",
    image:
      a,
    icon: "/icons/box.svg",
    link: "/aesthetic_dermatology-dubai",
  },
  
  {
    title: "Ayurveda",
    description:
      "From preventive care to specialized treatments, our wide range.",
    image:
      c,
    icon: "/icons/box.svg",
    link: "/ayurveda-treatment-dubai",
  },
  {
    title: "Physiotherapy",
    description:
      "From preventive care to specialized treatments, our wide range.",
    image:
      d,
    icon: "/icons/box.svg",
    link: "/physiotherapy-dubai",
  },
  {
    title: "Skin Booster",
    description:
      "From preventive care to specialized treatments, our wide range.",
    image:
      f,
    icon: "/icons/globe.svg",
    link: "/aesthetic_dermatology/skin-treatments/skin-booster-treatment-dubai",
  },
  {
    title: "Hair Loss",
    description:
      "From preventive care to specialized treatments, our wide range.",
    image:
      g,
    icon: "/icons/globe.svg",
    link: "/aesthetic_dermatology/hair-treatments/hair-loss-dubai",
  },
  {
    title: "Skin Treatment",
    description:
      "From preventive care to specialized treatments, our wide range.",
    image:
      e,
    icon: "/icons/globe.svg",
    link: "/aesthetic_dermatology/skin-treatments-dubai",
  },


];

function Services() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <div className="[#FDF2EC]">
      <div className="bg-[#4B1F0E] text-white py-20 px-4 rounded-3xl  md: mt-6 relative overflow-hidden animate-fadeInDown">
        {/* Left SVG decoration */}
        <div className="absolute top-8 left-8 opacity-20 hidden md:block">
          <svg
            width="100"
            height="100"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          >
            <path d="M0,60 C20,40 40,80 60,60" />
            <path d="M10,80 C30,50 50,100 70,70" />
          </svg>
        </div>

        {/* Right SVG decoration */}
        <div className="absolute bottom-8 right-8 opacity-20 hidden md:block rotate-180">
          <svg
            width="100"
            height="100"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          >
            <path d="M0,60 C20,40 40,80 60,60" />
            <path d="M10,80 C30,50 50,100 70,70" />
          </svg>
        </div>

        {/* Main Content */}
        <div className="text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-semibold">Our Services</h1>
          <p className="mt-4 text-sm md:text-base text-gray-200">
            Home/services
          </p>
        </div>
      </div>

      <div className="bg-[#f9f3f2] py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <a
            key={index}
            href={service.link}
            className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4B1F0E] via-green-700/30 to-transparent group-hover:from-[#4B1F0E]/90 transition-all duration-300"></div>
            <div className="absolute bottom-5 left-5 text-white z-10">
              
              <h3 className="text-xl font-semibold group-hover:text-green-100">{service.title}</h3>
              <p className="text-sm group-hover:text-gray-200">{service.description}</p>
              
            </div>
          </a>
        ))}
      </div>
    </div>

      <section className="w-full bg-[#f9f3f2] py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image with overlay */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://ramacarepolyclinic.ae/wp-content/uploads/2025/03/why-choose-image.jpg" // Replace with your image
              alt="Dermatology"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4B1F0E] via-green-700/50 to-transparent"></div>
           
          </div>

          {/* Right Side - Text Content */}
          <div>
            <p className="text-sm text-gray-600 mb-1">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#4B1F0E] mb-4 leading-snug">
              Expert dermatology care for healthy, radiant skin
            </h2>
            <p className="text-[#4B1F0E] mb-6">
              From preventive care to specialized treatments, our wide range of
              services is designed to support your health at every stage.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-6">
              {[
                "Expert Dermatologists",
                "Advanced Technology",
                "Effective Solutions",
                "Personalized Care",
                "Comprehensive Services",
                "Comfortable Environment",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[#4B1F0E]">
                  <FaCheck className="text-[#4B1F0E]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            

            <p className="text-sm mt-4 text-gray-700">
              Your skin’s transformation starts here –{" "}
              <a
                href="/contact"
                className="text-[#4B1F0E] underline font-medium hover:text-green-900"
              >
                Book Today!
              </a>
            </p>
          </div>
        </div>
      </section>
       {/* Footer */}
       <footer className="bg-[#4B1F0E] text-white px-4 sm:px-6 md:px-12 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
        {/* Newsletter */}
        <div className="space-y-4 sm:col-span-2 lg:col-span-1">
          <div className=" flex items-center justify-center text-sm font-bold">
            <img src={logo} alt='logo footer' className='h-full w-full flex items-center justify-center pl-4'/>
          </div>
          <p className="text-sm font-medium">Sign Up To Our Newsletter For News, Offers And More.</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md sm:rounded-l-md sm:rounded-r-none text-black flex-1 text-sm"
            />
            <button className="bg-white text-[#144734] p-2 px-4 rounded-md sm:rounded-r-md sm:rounded-l-none font-bold text-sm">→</button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-base sm:text-lg font-semibold">Contact Us</h3>
          <div className="flex items-center space-x-2">
            <Phone className="text-lg sm:text-xl" />
            <span className="text-sm sm:text-base">For more information</span>
          </div>
          <p className="ml-6 sm:ml-7 text-sm sm:text-base">0566597878</p>

          <div className="flex items-center space-x-2 mt-2">
            <Headphones className="text-lg sm:text-xl" />
            <span className="text-sm sm:text-base">Emergency toll free no</span>
          </div>
          <p className="ml-6 sm:ml-7 text-sm sm:text-base">042862006</p>
        </div>

        {/* Get In Touch */}
        <div className="space-y-4">
          <h3 className="text-base sm:text-lg font-semibold">Get In Touch</h3>
          <p className="text-sm sm:text-base">
            <span className="font-medium">Location</span><br />
            JVC, Jumeirah Village Circle,, JVC, Jumeirah Village Circle, Dubai
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-medium">Email</span><br />
            <span className="break-all sm:break-normal">info@vedaracare.ae</span>
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-base sm:text-lg font-semibold">Quick Link</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline text-sm sm:text-base">Home</a></li>
            <li><a href="#" className="hover:underline text-sm sm:text-base">Services</a></li>
            <li><a href="#" className="hover:underline text-sm sm:text-base">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 mt-8 sm:mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
        <p className="mb-4 sm:mb-0">Copyright © 2025 All Rights Reserved.</p>
        <div className="flex space-x-3 sm:space-x-4">
          <a href="#" className="hover:scale-110 transition-transform"><Twitter className="text-base sm:text-lg" /></a>
          <a href="#" className="hover:scale-110 transition-transform"><Facebook className="text-base sm:text-lg" /></a>
          <a href="#" className="hover:scale-110 transition-transform"><Instagram className="text-base sm:text-lg" /></a>
          <a href="#" className="hover:scale-110 transition-transform"><Linkedin className="text-base sm:text-lg" /></a>
          <a href="#" className="hover:scale-110 transition-transform"><Youtube className="text-base sm:text-lg" /></a>
        </div>
      </div>
    </footer>

      
    </div>
  );
}

export default Services;
