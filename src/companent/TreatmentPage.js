import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { Phone, Mail,CheckCircle, Headphones, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

import { motion } from "framer-motion";
import formimage from "../image/formiamge.jpg"
import image from '../image/Aesthetic Dermatology1.jpeg';
import logo from '../image/vdlb-removebg-preview.png';
import {
  Star,
  Award,
  Users,
  Calendar,
  ChevronRight,
  Heart,
  Shield,
  Sparkles,
} from "lucide-react";


// Main reusable component
function TreatmentPage({ pageData }) {
  const [hoveredTreatment, setHoveredTreatment] = useState(null);
  const [hoveredDoctor, setHoveredDoctor] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  // {form}

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        time: "",
        description: "",
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [submitStatus, setSubmitStatus] = useState("");
    
      // Handle input change
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      // Auto-send to WhatsApp
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("Preparing message...");
    
        try {
          const message = `🏥 *VEDARA CARE*
    
    👤 *Name:* ${formData.name}
    📞 *Phone:* ${formData.phone}
    📧 *Email:* ${formData.email}
    🩺 *Service:* ${formData.service}
    📅 *Date:* ${formData.date}
    ⏰ *Time:* ${formData.time}
    📝 *Details:* ${formData.description || 'No additional details'}
    
    Please confirm this appointment. Thank you!`;
    
          // Create WhatsApp URL
          const whatsappURL = `https://wa.me/9710566597878?text=${encodeURIComponent(message)}`;
          console.log('whatsapp url',whatsappURL);
          
          setSubmitStatus("✅ Redirecting to WhatsApp...");
          
          // Auto-redirect to WhatsApp after a short delay
          setTimeout(() => {
            window.location.href = whatsappURL;
          }, 1000);
          
          // Reset form after successful submission
          setTimeout(() => {
            setFormData({
              name: "",
              phone: "",
              email: "",
              service: "",
              date: "",
              time: "",
              description: "",
            });
            setSubmitStatus("✅ Message sent successfully!");
          }, 3000);
    
        } catch (error) {
          console.error("Error sending message:", error);
          setSubmitStatus("❌ Failed to send message. Please try again.");
        } finally {
          setTimeout(() => {
            setIsSubmitting(false);
          }, 1000);
        }
      };

  return (
    <div className="min-h-screen bg-[#FDF2EC]">

      <div className="bg-[#4B1F0E] text-white py-20 px-4 rounded-3xl  md:  relative overflow-hidden animate-fadeInDown">
      {/* Left SVG decoration */}
      <div className="absolute top-8 left-8 opacity-20 hidden md:block">
        <svg width="100" height="100" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M0,60 C20,40 40,80 60,60" />
          <path d="M10,80 C30,50 50,100 70,70" />
        </svg>
      </div>

      {/* Right SVG decoration */}
      <div className="absolute bottom-8 right-8 opacity-20 hidden md:block rotate-180">
        <svg width="100" height="100" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M0,60 C20,40 40,80 60,60" />
          <path d="M10,80 C30,50 50,100 70,70" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="text-center relative z-10">
        <div
            className={`${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            } text-white`}
          >
            <h1 className="text-5xl md:text-5xl font-bold mb-6">
              {pageData.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {pageData.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
              <button className="text-[#4B1F0E] bg-[#FDF2EC] hover:bg-white/90 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                {pageData.hero.buttonText}
              </button>
              </a>
            </div>
          </div>
        
      </div>
    </div>
      

      {/* Hero Section */}
      

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full opacity-20"
          whileInView={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-20"
          whileInView={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/3 w-20 h-20 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20"
          whileInView={{
            x: [0, 120, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="min-h-screen bg-[#FDF2EC] flex flex-col lg:flex-row ">
        {/* Left - Static List */}
        <div className="lg:w-2/3 w-full p-4 bg-[#FDF2EC] shadow-xl  lg:sticky top-0 h-fit  md: overflow-auto animate-fade-in">
          <h2 className="text-2xl font-bold mb-4">{pageData.sidebar.title}</h2>
          <ul className="space-y-2 font-medium">
            {pageData.sidebar.services.map((service, index) => (
                <Link
            key={index}
            to={service.link}
            className=" px-6  cursor-pointer transform hover:scale-105 transition-all duration-300"
          >
              <li
               
                className="bg-gradient-to-r from-[#4B1F0E] to-[#E76F51] hover:from-[#4B1F0E] hover:to-[#4B1F0E] text-white px-12 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-xl"
              >
               
                 {service.im}
              </li></Link>
            ))}
          </ul>
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <img
              src={image} // Replace with your image
              alt="leftimage"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4B1F0E] via-green-700/50 to-transparent"></div>
           
          </div>
        </div>

        {/* Right - Scrollable Cards */}
        <div className="md:w-full lg:2/3 w-full bg-[#FDF2EC] overflow-y-auto p-6 space-y-10 animate-slide-in">
          {/* Main Content Section */}
          <div className="w-full  flex items-center justify-center ">
            <div className="p-4 w-full flex flex-col items-center animate-fadeIn transition-all duration-1000 ease-in-out">
              <img
                src={pageData.content.mainImage}
                alt={pageData.content.alt}
                className="w-full  object-cover rounded-md  transform transition-transform duration-500 hover:scale-105"
              />
              <div className="mt-6  px-4 bg-[#FDF2EC]">
                <h1 className="text-3xl md:text-4xl  text-[#4B1F0E] mb-4">
                  {pageData.content.title}
                </h1>
                <p className="text-gray-600 text-base md:text-base leading-relaxed animate-fadeIn delay-200 pb-2">
                  {pageData.content.description}
                </p>
                <p className="text-gray-600 text-base md:text-base leading-relaxed animate-fadeIn delay-200 pb-2">
                  {pageData.content.description2}
                </p>
                <p className="text-gray-600 text-base md:text-base leading-relaxed animate-fadeIn delay-200">
                  {pageData.content.description3}
                </p>
              </div>
            </div>
          </div>

          {/* [added] */}

          <div className="w-full  flex items-center p-0 ">
            <div className="pl-4 w-full flex flex-col items-center animate-fadeIn transition-all duration-1000 ease-in-out">
              
              <div className="   bg-[#FDF2EC]">
                <h1 className="text-3xl md:text-4xl  text-[#4B1F0E] mb-4">
                  {pageData.content.title2}
                </h1>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed animate-fadeIn delay-200">
                  {pageData.content.description2}
                </p>
                <b/>

                <h1 className="text-3xl md:text-4xl  text-[#4B1F0E] mb-4">
                  {pageData.content.title22}
                </h1>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed animate-fadeIn delay-200">
                  {pageData.content.description22}
                </p>
                <b/>
                <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
          {pageData.content.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p className="mt-6 text-gray-700">{pageData.content.closing}</p>
                
              </div>
                  <div>
        <h2 className="text-3xl md:text-4xl  text-[#4B1F0E] mb-8">
          {pageData.content.title33}
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed animate-fadeIn delay-200">
                  {pageData.content.descriptionab}
                </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pageData.content.list1.map((item, i) => (
            <div key={i} className="flex items-start space-x-3">
              <CheckCircle className="text-[#4B1F0E] w-6 h-6 flex-shrink-0 mt-1" />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-gray-700">{pageData.content.closing1}</p>
      </div>

      <h2 className="text-3xl pt-4 md:text-4xl  text-[#4B1F0E] ">
          {pageData.content.title34}
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed animate-fadeIn delay-200">
                  {pageData.content.descriptionac}
                </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
          {pageData.content.list2.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
          
       
        <p className="mt-6 text-gray-700">{pageData.content.closing2}</p>


        <h2 className="text-3xl pl-0 pt-4 md:text-4xl text-[#4B1F0E]  ">
          {pageData.content.title35}
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed animate-fadeIn delay-200">
                  {pageData.content.descriptionad}
                </p>

            </div>
          </div>



          {/* {last} */}

          <div className="w-full  flex items-center p-0 ">
            <div className="pl-4 w-full flex flex-col items-center animate-fadeIn transition-all duration-1000 ease-in-out">
              
              <div className="mt-6   bg-[#FDF2EC]">
                <h1 className="text-3xl md:text-4xl  text-[#4B1F0E] mb-4">
                  {pageData.content.titles}
                </h1>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed animate-fadeIn delay-200">
                  {pageData.content.descriptions}
                  
                </p>
              </div>
            </div>
          </div>

          {/* Services Cards */}
          {pageData.content.services.map((service, index) => (
            <div
              key={index}
              className="bg-[#FDF2EC] rounded-xl shadow-md p-4 transform hover:scale-[1.02] transition duration-300"
            >
              
              <h3 className="text-3xl md:text-4xl  text-[#4B1F0E] mb-4">{service.title}</h3>
              <p className="text-700 text-sm">{service.description} </p>
                <ul className="pl-3">
                  <li class="font-medium  text-gray-800 ">{service.a}</li>
                  <p class=" text-gray-800 text-sm">{service.e}</p>
                  <li class="font-medium  text-gray-800 " >{service.b}</li>
                  <li class=" text-gray-800 text-sm">{service.f}</li>
                  <li class="font-medium  text-gray-800 ">{service.c}</li>
                  <li class=" text-gray-800 text-sm">{service.g}</li>
                  <li class="font-medium  text-gray-800 ">{service.d}</li>
                  <li class=" text-gray-800 text-sm ">{service.h}</li>
                   <li class="font-medium  text-gray-800 ">{service.i}</li>
                  <li class=" text-gray-800 text-sm">{service.j}</li>
                   <li class="font-medium  text-gray-800 ">{service.k}</li>
                  <li class=" text-gray-800 text-sm">{service.l}</li>
                   <li class="font-medium  text-gray-800 ">{service.m}</li>
                  <li class=" text-gray-800 text-sm">{service.n}</li>
                </ul>
                
             
             
            </div>
          ))}
{/* {} */}
<h1 className="text-3xl h-auto md:text-4xl  text-[#4B1F0E] mb-4">
                  {pageData.content.title21}
                </h1>
                <p className="text-gray-600 h-auto text-base md:text-lg leading-relaxed animate-fadeIn delay-200">
                  {pageData.content.description21}
                </p>

                <h1 className="text-3xl h-auto md:text-4xl  text-[#4B1F0E] mb-4">
                  {pageData.content.title22}
                </h1>
                <p className="text-gray-600 h-auto text-base md:text-lg leading-relaxed animate-fadeIn delay-200">
                  {pageData.content.description22}
                </p>



          {/* Image Gallery */}
          {pageData.content.gallery && (
            <div className="flex items-center justify-center p-6">
              <div className="flex flex-col md:flex-row gap-6 max-w-6xl w-full animate-fade-in">
                {pageData.content.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out"
                  >
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          


          <div className="w-full h-auto flex items-center pt-0 ">
            <div className="pl-4 w-full flex flex-col items-center animate-fadeIn transition-all duration-1000 ease-in-out">
              
              <div className="   bg-[#FDF2EC]">
                <h1 className="text-2xl md:text-3xl font-bold text-[#4B1F0E]  animate-slideInUp">
                  {pageData.content.titleb}
                </h1>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed animate-fadeIn delay-200">
                  {pageData.content.descriptionb}
                  
                </p>
              </div>
            </div>
          </div> 
{/* {added} */}
{/* <div className="w-full  flex items-center p-0 ">
            <div className="pl-4 w-full flex flex-col items-center animate-fadeIn transition-all duration-1000 ease-in-out">
              
              <div className="   bg-[#FDF2EC]">
                <h1 className="text-2xl md:text-4xl font-bold text-[#4B1F0E]  animate-slideInUp">
                  {pageData.content.title1}
                </h1>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed animate-fadeIn delay-200">
                  {pageData.content.description1}
                </p>
                 <ul>
                  <li class="font-medium  text-gray-800">{pageData.content.a}</li>
                  <li class=" text-gray-800 text-sm">{pageData.content.e}</li>
                  <li class="font-medium  text-gray-800" >{pageData.content.b}</li>
                  <li class=" text-gray-800 text-sm">{pageData.content.f}</li>
                  <li class="font-medium  text-gray-800">{pageData.content.c}</li>
                  <li class=" text-gray-800 text-sm">{pageData.content.g}</li>
                  <li class="font-medium  text-gray-800">{pageData.content.d}</li>
                  <li class=" text-gray-800 text-sm">{pageData.content.h}</li>
                  <li class="font-medium  text-gray-800">{pageData.content.i}</li>
                  <li class=" text-gray-800 text-sm">{pageData.content.j}</li>
                  <li class="font-medium  text-gray-800">{pageData.content.k}</li>
                  <li class=" text-gray-800 text-sm">{pageData.content.l}</li>
                  
                </ul>
                
              </div>
            </div>
          </div>
        
         


          {/* Treatment Data Section */}
      <div className="w-full p-4 ">
        <div className="">
          
          

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
              {pageData.content.features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className={`p-6 rounded-xl shadow-lg ${
                      feature.dark
                        ? "bg-[#4B1F0E] text-white"
                        : "bg-white border text-gray-800"
                    }`}
                  >
                    <Icon
                      className={`w-10 h-10 mb-4 ${
                        feature.dark ? "" : "text-emerald-900"
                      }`}
                    />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className={`${feature.dark ? "text-white" : "text-gray-600"}`}>
                      {feature.description}
                    </p>
                    <ul>
                  <li className={`${feature.dark ? "text-white" : "text-gray-600"}`}>{feature.a}</li>
                  <li className={`${feature.dark ? "text-white" : "text-gray-600"}`}>{feature.e}</li>
                  <li className={`${feature.dark ? "text-white" : "text-gray-600"}`} >{feature.b}</li>
                  <li className={`${feature.dark ? "text-white" : "text-gray-600"}`}>{feature.f}</li>
                  <li className={`${feature.dark ? "text-white" : "text-gray-600"}`}>{feature.c}</li>
                  <li className={`${feature.dark ? "text-white" : "text-gray-600"}`}>{feature.g}</li>
                  <li className={`${feature.dark ? "text-white" : "text-gray-600"}`}>{feature.d}</li>
                  <li className={`${feature.dark ? "text-white" : "text-gray-600"}`}>{feature.h}</li>
                  <li className={`${feature.dark ? "text-white" : "text-gray-600"}`}>{feature.i}</li>
                  <li className={`${feature.dark ? "text-white" : "text-gray-600"}`}>{feature.j}</li>
                  <li className={`${feature.dark ? "text-white" : "text-gray-600"}`}>{feature.k}</li>
                  <li className={`${feature.dark ? "text-white" : "text-gray-600"}`}>{feature.l}</li>
                  
                </ul>
                  </div>
                );
              })}
            </div>

           
          </div>
        </div>
      </div>

          {/* FAQ Section */}
          <div className="text-center bg-[#FDF2EC]">
            <h1 className="text-2xl bg-[#FDF2EC] md:text-3xl font-bold text-[#4B1F0E] mb-2 animate-slideInUp">
              {pageData.faq.title}
            </h1>
            <p className="text-[#4B1F0E] bg-[#FDF2EC] text-base md:text-lg leading-relaxed animate-fadeIn delay-200">{pageData.faq.d}</p>
            <p className="text-[#4B1F0E] bg-[#FDF2EC] text-base md:text-lg leading-relaxed animate-fadeIn delay-200">{pageData.faq.e}</p>
            <p className="text-[#4B1F0E] bg-[#FDF2EC] text-base md:text-lg leading-relaxed animate-fadeIn delay-200">{pageData.faq.f}</p>
            <p className="text-[#4B1F0E] bg-[#FDF2EC] text-base md:text-lg leading-relaxed animate-fadeIn delay-200">{pageData.faq.g}</p>
          </div>

          <div className="flex items-center justify-center px-4">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-1 w-full max-w-6xl animate-fadeIn">
              {pageData.faq.questions.map((item, index) => (
                <div
                  key={index}
                  className="text-white p-5 rounded-lg bg-[#4B1F0E] hover:from-[#4B1F0E] hover:to-[#4B1F0E] shadow-md hover:shadow-lg transition duration-300"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="text-left w-full  font-semibold text-lg focus:outline-none"
                  >
                    {item.question}
                  </button>
                  <div
                    className={`mt-2 overflow-hidden transition-all duration-500 ease-in-out ${
                      activeIndex === index
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm">{item.answer}</p>
                    <p className="text-sm"></p>
                    <ul>
                      <li>{item.answers}</li>
                      <li>{item.answer1}</li>
                      <li>{item.answer2}</li>
                      <li>{item.answer3}</li>
                      <li>{item.answer4}</li>
                      <li>{item.answer5}</li>
                    </ul>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-[#FDF2EC] backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {pageData.stats.map((stat, i) => (
            <div
              key={i}
              className="text-center group transform hover:scale-110 transition-all duration-500"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#E76F51] to-[#4B1F0E] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl font-bold text-gray-800 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

       <div className="max-w-7xl p-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md: items-start">
        {/* Left Side Image with Overlay */}
        <div className="relative order-2 md:order-1">
          <img
            src={formimage}
            alt="Doctor"
            className="rounded-lg p-6 shadow-lg w-full h-64 sm:h-80 md:h-96 lg:h-[550px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-3 sm:p-4 text-white rounded-b-lg text-center">
            <p className="text-base sm:text-lg font-bold">Opening Hours</p>
            <p className="text-sm sm:text-base">10:00 AM to 10:00 PM</p>
            <p className="text-xs sm:text-sm">{today}</p>
          </div>
        </div>

        {/* Right Side Contact Form */}
        <div className="bg-[#FDF2EC] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg order-1 md:order-2">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
            Get in touch with us
          </h2>
          <div className="">
            <div className="w-full grid grid-cols-1 gap-4">
      {submitStatus && (
        <div className={`mb-4 p-3 rounded-md text-center font-medium text-sm sm:text-base ${
          submitStatus.includes('✅') 
            ? 'bg-green-100 text-green-800 border border-green-300' 
            : submitStatus.includes('❌')
            ? 'bg-red-100 text-red-800 border border-red-300'
            : 'bg-blue-100 text-blue-800 border border-blue-300'
        }`}>
          {submitStatus}
        </div>
      )}

      <div className="bg-[#FDF2EC] p-4 sm:p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name Here"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#254D42] focus:border-transparent disabled:bg-gray-100 text-sm sm:text-base"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#254D42] focus:border-transparent disabled:bg-gray-100 text-sm sm:text-base"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#254D42] focus:border-transparent disabled:bg-gray-100 text-sm sm:text-base"
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            disabled={isSubmitting}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#254D42] focus:border-transparent disabled:bg-gray-100 text-sm sm:text-base"
          >
            <option value="">Select Service</option>
            <option value="Skin Treatment">Skin Treatment</option>
            <option value="Dental Care">Dental Care</option>
            <option value="Body Treatment">Body Treatment</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            disabled={isSubmitting}
            min={new Date().toISOString().split('T')[0]}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#254D42] focus:border-transparent disabled:bg-gray-100 text-sm sm:text-base"
          />
          <input
            type="time"
            name="time"
            placeholder="time"
            value={formData.time}
            onChange={handleChange}
            disabled={isSubmitting}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#254D42] focus:border-transparent disabled:bg-gray-100 text-sm sm:text-base"
          />
          <textarea
            name="description"
            placeholder="Description here about service or your problem..."
            value={formData.description}
            onChange={handleChange}
            disabled={isSubmitting}
            className="border border-gray-300 rounded-md p-3 w-full col-span-1 sm:col-span-2 h-20 sm:h-28 focus:outline-none focus:ring-2 focus:ring-[#254D42] focus:border-transparent disabled:bg-gray-100 resize-none text-sm sm:text-base"
          />
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || !formData.name || !formData.phone || !formData.email || !formData.service || !formData.date || !formData.time}
            className="col-span-1 sm:col-span-2 bg-[#E76F51] text-white font-medium py-3 sm:py-4 rounded-md hover:bg-[#4B1F0E] transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Sending...
              </>
            ) : (
              "Send Message to WhatsApp"
            )}
          </button>
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>

      {/* Treatments Section */}
      

      {/* Doctors Section */}
      

      

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

// Add the default export
export default TreatmentPage;