import React, { useState, useEffect } from "react";
import CompareImage from "react-compare-image";
import { motion, useAnimation } from "framer-motion";
import {
  Mail,
  Headphones,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

import {
  User,
  Zap,
  Star,
  CheckCircle,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { ChevronDown, ChevronUp } from "lucide-react";
import hero1 from "../image/hero1.png";
import hero2 from "../image/hero2.jpg";
import skin1 from "../image/skin1.jpg";
import skin12 from "../image/skin1.2.jpg";
import skin2 from "../image/skin2.jpg";
import skin22 from "../image/skin2.2.jpg";
import dermatology from "../image/image2.webp";

import ayureda from "../image/home5.jpg";

import phy from "../image/b.png";
import home1 from "../image/home1.jpg";
import home2 from "../image/home2.jpg";
import home3 from "../image/home3g.jpg";
import home4 from "../image/compressed_dental_image.jpeg";
import home5 from "../image/Anti-Aging Treatments.jpg";
// import formimage from "../image/formiamge.jpg";
import logo from "../image/vdlb-removebg-preview.png";

const faqs = [
  {
    question: "What services does Vedara Care Polyclinic offer?",
    answer:
      "Vedara Care Polyclinic is a multi-specialty health and wellness center in Dubai offering a wide range of services, including:",
    answer: "Dermatology and aesthetic treatments",

    answer: "Ayurvedic therapies and Panchakarma",
    answer: "Physiotherapy and rehabilitation",
    answer: "General physician consultations",
    answer:
      "PRP therapy, body shaping, and more   We cater to all age groups with a focus on personalized, holistic, and affordable care.",
  },
  {
    question: "Where is Vedara Care Polyclinic located?",
    answer:
      "We are conveniently located in JVC, Jumeirah Village Circle, Dubai, providing easy access for residents and visitors. Our clinic is situated in a central area with excellent connectivity and ample parking options. Visit our Contact Us page for directions and location details.",
  },
  {
    question: "What makes Vedara Care Polyclinic the best clinic in Dubai?",
    answer: "Vedara Care stands out due to our:",
    answer: "Expert team of licensed professionals",
    answer:
      "Comprehensive range of medical and wellness services under one roof",
    answer: "Patient-first approach with personalized care plans",
    answer: "Use of modern technology and internationally approved techniques",
    answer: "Affordable pricing without compromising on quality",
    answer:
      "Whether it's aesthetic improvement or medical care, we focus on delivering real results with compassion.",
    answer: "Affordable pricing without compromising on quality",
  },
  {
    question: "Do you offer consultations for dermatology services?",
    answer:
      "Absolutely! We provide thorough dermatology consultations to understand your skin concerns, assess your condition, and recommend tailored treatment plans. From acne and pigmentation to anti-aging and rejuvenation, our experts ensure you receive the right guidance before starting any procedure",
  },
  {
    question: "Are your skin services suitable for all ages?",
    answer:
      "Yes, our skin department serves patients of all age groups—from children to seniors. We provide gentle pediatric care, preventive services, braces for teens, and restorative/cosmetic dentistry for adults. Our family-friendly approach ensures a comfortable experience for everyone.",
  },
  {
    question: "What types of Ayurvedic treatments do you provide?",
    answer:
      "Our Ayurvedic services are rooted in authentic Indian traditions and include:",
    answer: "Panchakarma detox",
    answer: "Herbal oil massages",
    answer: "Shirodhara",
    answer: "Ayurvedic weight management",
    answer: "Stress relief therapies",
    answer: "Lifestyle and diet guidance",
    answer:
      "We offer customized programs based on your dosha type, focusing on long-term wellness and balance of mind, body, and spirit.",
  },
  {
    question: "Do you offer consultations for dermatology services?",
    answer:
      "Yes, we offer comprehensive dermatology consultations and personalized skincare treatments.",
  },
];

const itemss = [
  {
    text: "Ayurveda",
    bg: ayureda,
    link: "/ayurveda-treatment-dubai",
  },

  {
    text: "Physiotherapy",
    bg: phy,
    link: "/physiotherapy-dubai",
  },

  {
    text: "Aesthetic Dermatology",
    bg: dermatology,
    link: "/aesthetic_dermatology-dubai",
  },
];

const MotionDiv = ({
  children,
  initial,
  whileInView,
  transition,
  whileHover,
  className,
  ...props
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const elementRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const getTransform = () => {
    let transform = "";

    if (initial && whileInView) {
      if (!isVisible) {
        if (initial.x) transform += `translateX(${initial.x}px) `;
        if (initial.y) transform += `translateY(${initial.y}px) `;
        if (initial.rotateY) transform += `rotateY(${initial.rotateY}deg) `;
        if (initial.rotateX) transform += `rotateX(${initial.rotateX}deg) `;
        if (initial.scale) transform += `scale(${initial.scale}) `;
      }
    }

    if (whileHover && isHovered) {
      if (whileHover.rotateY) transform += `rotateY(${whileHover.rotateY}deg) `;
      if (whileHover.rotateX) transform += `rotateX(${whileHover.rotateX}deg) `;
      if (whileHover.scale) transform += `scale(${whileHover.scale}) `;
      if (whileHover.z) transform += `translateZ(${whileHover.z}px) `;
    }

    return transform;
  };

  const getOpacity = () => {
    if (initial && whileInView && !isVisible) {
      return initial.opacity !== undefined ? initial.opacity : 1;
    }
    return 1;
  };

  const duration = transition?.duration || 0.6;
  const delay = transition?.delay || 0;

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform: getTransform(),
        opacity: getOpacity(),
        transition: `all ${duration}s ease-out ${delay}s`,
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </div>
  );
};

const MotionLi = ({
  children,
  initial,
  whileInView,
  transition,
  whileHover,
  className,
  ...props
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const elementRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const getTransform = () => {
    let transform = "";

    if (initial && whileInView) {
      if (!isVisible) {
        if (initial.x) transform += `translateX(${initial.x}px) `;
        if (initial.y) transform += `translateY(${initial.y}px) `;
        if (initial.rotateY) transform += `rotateY(${initial.rotateY}deg) `;
        if (initial.scale) transform += `scale(${initial.scale}) `;
      }
    }

    if (whileHover && isHovered) {
      if (whileHover.x) transform += `translateX(${whileHover.x}px) `;
      if (whileHover.y) transform += `translateY(${whileHover.y}px) `;
      if (whileHover.scale) transform += `scale(${whileHover.scale}) `;
      if (whileHover.rotateY) transform += `rotateY(${whileHover.rotateY}deg) `;
    }

    return transform;
  };

  const getOpacity = () => {
    if (initial && whileInView && !isVisible) {
      return initial.opacity !== undefined ? initial.opacity : 1;
    }
    return 1;
  };

  const duration = transition?.duration || 0.6;
  const delay = transition?.delay || 0;

  return (
    <li
      ref={elementRef}
      className={className}
      style={{
        transform: getTransform(),
        opacity: getOpacity(),
        transition: `all ${duration}s ease-out ${delay}s`,
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </li>
  );
};

const MotionImg = ({
  src,
  alt,
  className,
  initial,
  whileInView,
  transition,
  whileHover,
  ...props
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const elementRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const getTransform = () => {
    let transform = "";

    if (initial && whileInView) {
      if (!isVisible) {
        if (initial.scale) transform += `scale(${initial.scale}) `;
        if (initial.rotateY) transform += `rotateY(${initial.rotateY}deg) `;
        if (initial.x) transform += `translateX(${initial.x}px) `;
      }
    }

    if (whileHover && isHovered) {
      if (whileHover.scale) transform += `scale(${whileHover.scale}) `;
      if (whileHover.rotateY) transform += `rotateY(${whileHover.rotateY}deg) `;
      if (whileHover.rotateX) transform += `rotateX(${whileHover.rotateX}deg) `;
    }

    return transform;
  };

  const getOpacity = () => {
    if (initial && whileInView && !isVisible) {
      return initial.opacity !== undefined ? initial.opacity : 1;
    }
    return 1;
  };

  const duration = transition?.duration || 0.6;
  const delay = transition?.delay || 0;

  return (
    <img
      ref={elementRef}
      src={src}
      alt={alt}
      className={className}
      style={{
        transform: getTransform(),
        opacity: getOpacity(),
        transition: `all ${duration}s ease-out ${delay}s`,
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    />
  );
};

const MotionSpan = ({
  children,
  initial,
  whileInView,
  transition,
  whileHover,
  className,
  ...props
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const elementRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const getTransform = () => {
    let transform = "";

    if (whileHover && isHovered) {
      if (whileHover.scale) transform += `scale(${whileHover.scale}) `;
      if (whileHover.rotateY) transform += `rotateY(${whileHover.rotateY}deg) `;
    }

    return transform;
  };

  const duration = transition?.duration || 0.6;

  return (
    <span
      ref={elementRef}
      className={className}
      style={{
        transform: getTransform(),
        transition: `all ${duration}s ease-out`,
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </span>
  );
};

const MotionH2 = ({
  children,
  initial,
  whileInView,
  transition,
  className,
  ...props
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const elementRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const getTransform = () => {
    let transform = "";

    if (initial && whileInView) {
      if (!isVisible) {
        if (initial.y) transform += `translateY(${initial.y}px) `;
      }
    }

    return transform;
  };

  const getOpacity = () => {
    if (initial && whileInView && !isVisible) {
      return initial.opacity !== undefined ? initial.opacity : 1;
    }
    return 1;
  };

  const duration = transition?.duration || 0.6;
  const delay = transition?.delay || 0;

  return (
    <h2
      ref={elementRef}
      className={className}
      style={{
        transform: getTransform(),
        opacity: getOpacity(),
        transition: `all ${duration}s ease-out ${delay}s`,
      }}
      {...props}
    >
      {children}
    </h2>
  );
};

const services = [
  "General Checkup",
  "Pediatrics",
  "Cardiology",
  "Dermatology",
  "Orthopedics",
  "Mental Health",
  "Vaccinations",
  "Lab Testing",
];

function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const controls = useAnimation();

  const [hoveredImage, setHoveredImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      controls.start("visible");
    }, 500);
    return () => clearTimeout(timer);
  }, [controls]);

  const testimonials = [
    {
      name: "Jessica M.",
      treatment: "Skin Rejuvenation",
      text: "Amazing results! My skin looks 10 years younger after just 3 sessions.",
      rating: 5,
    },
    {
      name: "David R.",
      treatment: "Hair Removal",
      text: "Finally found a permanent solution. Professional staff and great results!",
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // {form}
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
    📝 *Details:* ${formData.description || "No additional details"}
    
    Please confirm this appointment. Thank you!`;

      // Create WhatsApp URL
      const whatsappURL = `https://wa.me/9710566597878?text=${encodeURIComponent(
        message
      )}`;
      console.log("whatsapp url", whatsappURL);

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
    <div className="min-h-screen  w-full max-w-7xl rounded-2xl bg-[#FDF2EC]">
      {/* Hero Section */}
      <div className="bg-[#FDF2EC]  flex flex-col items-center ">
        {/* Main Card */}
        <div className="bg-[#4B1F0E] text-white items-center w-full max-w-7xl rounded-2xl  md:pl-12 grid md:grid-cols-2 items-center  shadow-lg">
          {/* Left Text Section */}
          <div className="space-y-6 mb-6 p-6 animate-fadeInLeft">
            <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
              Trusted Polyclinic in Dubai for Complete Care
            </h1>
            <p className="text-base text-gray-200 pb-6">
              <b>Vedara Care Polyclinic</b> offers expert medical services
              including general medicine, dermatology, Ayurveda, and
              physiotherapy—all in one place. With experienced doctors and
              modern facilities, we provide personalized care you can trust.
            </p>
            <a href="/services" className="py-8">
              <button className="bg-white text-[#4B1F0E] px-8 py-2 rounded-full font-medium hover:bg-gray-200 transition">
                View Our Services →
              </button>
            </a>

            {/* Review Section */}
            <div className="flex items-center gap-4 pt-4">
              <img
                src={hero2} // Replace with your own image
                alt="Review"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium">
                  Your Health, Our Mission — All-in-One Care Under One Roof.
                </p>
                <p className="text-xs text-yellow-300 mt-1">⭐ 5.0</p>
              </div>
            </div>
          </div>

          {/* Right Image + Rotating Circle */}
          <div className="relative h-full flex items-end justify-center">
            <img
              src={hero1}
              alt="Model"
              className="h-full object-contain z-10"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
              <img
                src="https://ramacarepolyclinic.ae/wp-content/uploads/2025/03/hero-circle-text.png"
                alt="Rotating Text"
                className="w-40 h-40"
              />
            </div>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="max-w-6xl w-full mt-8 grid md:grid-cols-3 gap-6 text-center bg-[#FDF2EC] text-sm text-gray-800">
          <div>
            <p className="font-medium">📩 Contact Us</p>
            <p>Email: Info@vedaracare.ae</p>
            <p>Phone: +971566597878</p>
          </div>
          <div>
            <p className="font-medium">📍 Our Location</p>
            <p>
              JVC, <br />
              JVC, Jumeirah Village Circle, 395368, Dubai
            </p>
          </div>
          <div>
            <p className="font-medium">🕒 Working Hours</p>
            <p>Monday - Sunday : 10:00 AM to 10:00 PM</p>
          </div>
        </div>
      </div>

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

      <div className="relative z-10 px-4 py-10 md:px-2 lg: w-full max-w-7xl ">
        {/* Hero Section */}
        <motion.div
          className="text-center "
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-2xl text-[#4B1F0E] md:text-4xl lg:text-2x1 font-bold p-6  "
            variants={itemVariants}
          >
            Vedara Care Polyclinic – Your Trusted Choice as the Best Polyclinic
            in Dubai
          </motion.h1>

          <div className="min-h-screen flex flex-col lg:flex-row w-full max-w-7xl rounded-2xl ">
            {/* Left - Static List */}
            <div className="lg:w-1/3 w-full  bg-[#FDF2EC] shadow-xl lg:sticky p-4 top-0 h-fit md: overflow-auto animate-fade-in">
              <div className="w-full lg:w-full flex-shrink-0">
                <img
                  src={home1}
                  alt="Vedara Care Polyclinic"
                  className="w-full h-auto object-cover rounded-xl shadow-lg 
                     transform transition-transform duration-300 "
                />
              </div>
            </div>

            {/* Right - Scrollable Cards */}
            <div className="lg:w-2/3 pl-2 w-full bg-[#FDF2EC] overflow-y-auto  space-y-10 animate-slide-in">
              <div className="w-full  flex items-center justify-center p-4">
                <div
                  className=" p-4 w-full text-left flex-col  
                   animate-fadeIn transition-all duration-1000 ease-in-out"
                >
                  {/* Text Container */}
                  <div className="w-full lg:w-full text-base bg-[#FDF2EC] ">
                    <div className="space-y-6 text-base">
                      <p className="text-gray-700  text-sm sm:text-base lg:text-base text-base leading-relaxed">
                        Welcome to{" "}
                        <b className="text-[#4B1F0E]">Vedara Care Polyclinic</b>
                        , your trusted{" "}
                        <b className="text-[#4B1F0E]">
                          polyclinic in Dubai, located conveniently in Jumeirah{" "}
                        </b>
                        1. We are proud to be recognized as one of the best
                        clinics in Dubai, offering high-quality, affordable, and
                        compassionate healthcare tailored to meet your unique
                        needs.
                      </p>

                      <p className="text-gray-700 text-base text-sm sm:text-base lg:text-base leading-relaxed">
                        At <b className="text-[#4B1F0E]">Vedara Care</b>, we
                        believe in a patient-first approach. Our experienced
                        medical team uses the latest technology and
                        evidence-based methods to ensure accurate diagnoses and
                        effective treatments. From routine health checkups to
                        ongoing wellness care, we are here to guide you through
                        every stage of your health journey.
                      </p>

                      <p className="text-gray-700  text-sm sm:text-base lg:text-base leading-relaxed">
                        Whether you need expert support in{" "}
                        <b className="text-[#4B1F0E]">
                          dermatology, Ayurveda, physiotherapy, general
                          medicine,
                        </b>{" "}
                        our expert team is here to provide personalized care in
                        a comfortable, caring environment. We aim to treat not
                        just the symptoms, but the root causes of your health
                        concerns—helping you feel better, faster.
                      </p>

                      <p className="text-gray-700 text-sm sm:text-base lg:text-base leading-relaxed">
                        If you're searching for a{" "}
                        <b className="text-[#4B1F0E]">polyclinic near me,</b>{" "}
                        look no further.{" "}
                        <b className="text-[#4B1F0E]">Vedara Care </b>combines
                        medical excellence with modern facilities to deliver the
                        care you can trust. Our clinic in Dubai is not only
                        well-equipped but also known for its warm, welcoming
                        atmosphere and patient-centered philosophy.
                      </p>

                      <p className="text-gray-700 text-sm sm:text-base lg:text-base leading-relaxed">
                        Thousands of patients across Dubai have made Vedara Care
                        their first choice for medical care. As a{" "}
                        <b className="text-[#4B1F0E]">
                          top-rated clinic in JVC, Jumeirah Village Circle,
                        </b>{" "}
                        we are committed to preventive healthcare, early
                        detection, and personalized treatment plans that
                        prioritize your well-being.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Scrollable Content */}
              <div className="md:w-2/2 w-full overflow-y-auto   animate-slide-in"></div>
            </div>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        <div className="  py-10 overflow-hidden">
          <div className="container mx-auto px-4 mb-8">
            <h1 className="text-3xl  md:text-4x1 lg:text-4xl font-bold text-center text-[#4B1F0E] mb-12 bg-gradient-to-r from-[#4B1F0E] bg-clip-text ">
              Popular Medical Services at Vedara Care Polyclinic Dubai
            </h1>
            <p className="text-gray-600 text-base md:text-base leading-relaxed animate-fadeIn delay-200">
              At <b className="text-[#4B1F0E]">Vedara Care Polyclinic,</b> we
              are committed to delivering exceptional healthcare through a
              patient-focused and integrated approach. As a leading{" "}
              <b className="text-[#4B1F0E]">polyclinic in Dubai,</b> we stand
              out for our combination of modern medical science and traditional
              healing methods. Our expert team specializes in{" "}
              <b className="text-[#4B1F0E]">
                Dermatology, Ayurveda, and Physiotherapy
              </b>{" "}
              — making us a trusted destination for complete
              <b className="text-[#4B1F0E]">family healthcare.</b>
            </p>
            <p className="text-gray-600 text-base md:text-base leading-relaxed animate-fadeIn delay-200">
              With a strong reputation for quality, compassion, and results,
              Vedara Care is the smart choice for anyone seeking a reliable
              <b className="text-[#4B1F0E]">polyclinic Dubai</b>. option for
              advanced and personalized treatments.
            </p>
          </div>

          {/* Moving cards container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-slide gap-6 hover:[animation-play-state:paused]">
              {/* Duplicate items for seamless loop */}
              {[...itemss, ...itemss].map((item, index) => (
                <a key={index} href={item.link}>
                  <div
                    key={`${item.id}-${index}`}
                    className="group relative flex-shrink-0 w-80 sm:w-96 lg:w-100 h-80 sm:h-72 lg:h-64 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-75 hover:scale-105 hover:shadow-[#4B1F0E] bg-[#4B1F0E] backdrop-[#4B1F0E]-sm"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${item.bg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Animated overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Text overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white font-bold text-lg sm:text-xl drop-shadow-lg">
                        {item.text}
                      </div>
                      <p className="text-white sm:text-xl drop-shadow-lg">
                        {item.text}
                      </p>
                    </div>

                    {/* Bottom gradient overlay for better visibility */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#4B1F0E] to-transparent"></div>

                    {/* Card number indicator */}
                    <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:bg-purple-500/60 transition-colors duration-300">
                      {item.id}
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-[#4B1F0E] from-[#4B1F0E]-500/20 to-[#4B1F0E]-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <style jsx>{`
            @keyframes slide {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-120%);
              }
            }

            .animate-slide {
              animation: slide 50s linear infinite;
            }

            @media (max-width: 640px) {
              .animate-slide {
                animation: slide 20s linear infinite;
              }
              .animate-slide-reverse {
                animation: slideReverse 20s linear infinite;
              }
            }

            @media (min-width: 1024px) {
              .animate-slide {
                animation: slide 10s linear infinite;
              }
              .animate-slide-reverse {
                animation: slideReverse 30s linear infinite;
              }
            }
          `}</style>
        </div>

        <section className="bg-[#FDF2EC] py-12 px-6 md:">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#4B1F0E] mb-2">
                Why Choose Vedara Care Polyclinic in Dubai?
              </h2>
              <p className="text-gray-700 mb-2">
                At{" "}
                <b className="text-[#4B1F0E]">
                  Vedara Care Polyclinic in JVC, Jumeirah Village Circle,.
                  Dubai,
                </b>{" "}
                the way we work is simple — we care deeply, we work together,
                and we put your health first. Every step of our process is
                designed to make you feel supported, understood, and confident
                in your treatment.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#4B1F0E] mb-1">
                    All-in-One Medical and Wellness Care
                  </h3>
                  <p className="text-gray-700">
                    <b className="text-[#4B1F0E]">Vedara Care Polyclinic</b> is
                    your one-stop destination for healthcare in Dubai. Instead
                    of moving between different clinics, you can find everything
                    you need under one roof — from{" "}
                    <b className="text-[#4B1F0E]">
                      general medicine and physiotherapy to dermatology,
                      Ayurveda, ,
                    </b>{" "}
                    and advanced wellness treatments. Our integrated approach
                    saves you time while ensuring you receive consistent,
                    high-quality care
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#4B1F0E] mb-1">
                    Expert Doctors, Tailored Treatments
                  </h3>
                  <p className="text-gray-700">
                    With more than{" "}
                    <b className="text-[#4B1F0E]">
                      12 years of trusted experience,
                    </b>{" "}
                    our medical team delivers personalized treatment plans
                    designed around your unique health goals. Whether you need
                    long-term care for chronic conditions, professional{" "}
                    <b className="text-[#4B1F0E]">skin and hair treatments,</b>{" "}
                    or preventive health solutions, we blend modern medical
                    technology with traditional expertise to give you the best
                    possible outcome.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#4B1F0E] mb-1">
                    A Trusted Polyclinic in the Heart of JVC, Jumeirah Village
                    Circle
                  </h3>
                  <p className="text-gray-700">
                    Located in{" "}
                    <b className="text-[#4B1F0E]">
                      JVC, Jumeirah Village Circle, Dubai, Vedara Care
                      Polyclinic
                    </b>{" "}
                    has built a reputation for affordable, compassionate, and
                    effective healthcare. Families and individuals across the
                    city rely on us for our patient-first approach, modern
                    facilities, and commitment to excellence. When you choose
                    Vedara Care, you’re choosing a clinic that truly cares about
                    your health and well-being.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="">
              <img src={home2} alt="Vedara Care Treatment" className="" />
            </div>
          </div>
        </section>

        <div className="min-h-screen flex flex-col lg:flex-row gap-6 w-full ">
          {/* Left - Static List */}
          <div className="lg:w-1/3 w-full p-6 bg-[#FDF2EC] shadow-xl lg:sticky top-0 h-fit md: overflow-auto animate-fade-in">
            <div className="w-full lg:w-full flex-shrink-0">
              <motion.div
                className="relative order-2 lg:order-1"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl lg:rounded-3xl blur-lg opacity-20 transform rotate-3"></div>
                <img
                  src={home4}
                  alt="Vedara Care Polyclinic Dermatology Excellence"
                  className="w-full h-auto rounded-lg shadow-2xl group-hover:shadow-3xl transition-shadow duration-500"
                  style={{
                    transform: "translateZ(20px)",
                  }}
                />
                <motion.div
                  className="absolute top-2 right-2 lg:top-4 lg:right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 lg:p-3 shadow-lg"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <img
                    src={home5}
                    alt="Laser Equipment"
                    className="w-4 h-4 lg:w-6 lg:h-6 rounded-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right - Scrollable Cards */}
          <div className="lg:w-2/3 w-full bg-[#FDF2EC] overflow-y-auto   animate-slide-in">
            <div className="w-full  flex items-center justify-center p-4">
              <div
                className=" p-4 w-full flex flex-col items-center 
                   animate-fadeIn transition-all duration-1000 ease-in-out"
              >
                {/* Text Container */}
                <motion.div
                  className="space-y-4 lg:space-y-6 order-1 lg:order-2"
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="text-2xl text-[#4B1F0E] sm:text-3xl lg:text-2xl font-bold mb-4 lg:mb-6">
                    How We Work at Vedara Care Polyclinic
                  </h2>
                  <p className="text-base leading-relaxed">
                    At{" "}
                    <b className="text-[#4B1F0E]">
                      Vedara Care Polyclinic in JVC, Jumeirah Village Circle,
                      Dubai,
                    </b>{" "}
                    the way we work is simple — we care deeply, we work
                    together, and we put your health first. Every step of our
                    process is designed to make you feel supported, understood,
                    and confident in your treatment.
                  </p>

                  <h2 className="text-2xl sm:text-3xl lg:text-lg font-bold text-[#4B1F0E] mb-4 lg:mb-6">
                    Your Health Comes First
                  </h2>
                  <p className="text-base leading-relaxed">
                    We start by listening. Every patient who walks through our
                    doors is treated with respect, kindness, and full attention.
                    Instead of rushing through appointments, we take time to
                    understand your concerns so we can create care that feels
                    personal — not just clinical.
                  </p>
                  <h2 className="text-2xl sm:text-3xl lg:text-lg font-bold text-[#4B1F0E] mb-4 lg:mb-6">
                    A Team That Works as One
                  </h2>
                  <p className="text-base leading-relaxed">
                    Healthcare works best when experts work together. That’s why
                    our specialists in medicine,
                    <b className="text-[#4B1F0E]">
                      {" "}
                      physiotherapy, skin care, Ayurveda,
                    </b>{" "}
                    and dentistry collaborate to build treatment plans tailored
                    to your needs. You benefit from the combined knowledge of an
                    entire team focused on your well-being.
                  </p>
                  <h2 className="text-2xl sm:text-3xl lg:text-lg font-bold text-[#4B1F0E] mb-4 lg:mb-6">
                    Blending Modern Medicine with Holistic Healing
                  </h2>
                  <p className="text-base leading-relaxed">
                    At <b className="text-[#4B1F0E]">Vedara Care</b>, we believe
                    the best results come from balance. We rely on proven
                    medical science while also embracing holistic therapies that
                    support long-term health. Whether you’re here for pain
                    management,{" "}
                    <b className="text-[#4B1F0E]">skin rejuvenation,</b> or
                    preventive care, we choose the methods that give you real,
                    lasting results.
                  </p>

                  <p>
                    Your smile deserves the best. Trust{" "}
                    <b className="text-[#4B1F0E]">Vedara Care Polyclinic</b> for
                    advanced dentistry in Dubai—where your comfort and
                    confidence come first.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Right - Scrollable Content */}
            <div className="md:w-2/2 w-full overflow-y-auto p-6 space-y-10 animate-slide-in"></div>
          </div>
        </div>

        {/* Treatments Section */}

        <div className=" py-12 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Animated Title */}
            <motion.div
              className="mb-6"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <div className="   overflow-hidden">
                <div className="container mx-auto  ">
                  <motion.h2
                    className="text-4xl md:text-5x1 font-bold text-center text-[#4B1F0E] mb-3 bg-gradient-to-r from-[#4B1F0E] bg-clip-text "
                    variants={itemVariants}
                  >
                    Our Process at Vedara Care Polyclinic
                  </motion.h2>
                  <p className=" text-base md:text-base leading-relaxed animate-fadeIn delay-200 ">
                    Choosing the right clinic is about more than just treatments
                    — it’s about finding a place where you feel valued,
                    understood, and truly cared for. At{" "}
                    <b className="text-[#4B1F0E]">
                      Vedara Care Polyclinic in JVC, Jumeirah Village Circle,
                    </b>{" "}
                    we’ve built our reputation on one simple promise: your
                    health comes first.
                  </p>
                  <p className=" text-base md:text-base leading-relaxed animate-fadeIn delay-200 p-3">
                    Our approach combines clinical expertise, compassion, and
                    cutting-edge techniques to help you heal effectively—whether
                    you're recovering from an injury, managing chronic pain, or
                    aiming to boost your physical performance. Quick &
                    Convenient Appointments Booking a visit is fast and
                    flexible, so you can access care without unnecessary delays.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row  lg:">
              {/* Left side: Content with staggered animations */}
              <div className="lg:w-2/3 ">
                <h4 className="text-2xl text-[#4B1F0E] ">
                  Personalized Consultations
                </h4>
                <p className="text-base leading-relaxed">
                  Our doctors take time to listen, understand, and guide you
                  toward the right treatment for your needs.
                </p>

                <div
                  className={`transform transition-all duration-1000 delay-700 ease-out ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-10 opacity-0"
                  }`}
                >
                  <h4 className="text-2xl text-[#4B1F0E] ">
                    Accurate Diagnosis & Tailored Treatments
                  </h4>
                  <p className="text-base leading-relaxed">
                    With advanced technology and expert care, we provide precise
                    diagnoses and create treatments that deliver real results.
                  </p>
                  <h4 className="text-2xl text-[#4B1F0E] ">
                    Comprehensive Ongoing Support
                  </h4>
                  <p className="text-base leading-relaxed">
                    Your care doesn’t end after a single visit. We provide
                    continuous guidance to help you maintain long-term health
                    and wellness.
                  </p>
                  <h4 className="text-2xl text-[#4B1F0E] ">
                    Modern Meets Traditional
                  </h4>
                  <p className="text-base leading-relaxed">
                    From advanced medical solutions to holistic approaches like
                    Ayurveda, we combine what works best for your overall
                    well-being.
                  </p>
                  <h4 className="text-2xl text-[#4B1F0E] ">
                    Clear & Transparent Health Plans
                  </h4>
                  <p className="text-base leading-relaxed">
                    No hidden costs — just honest, affordable, and
                    straightforward healthcare options you can trust.
                  </p>
                  <h4 className="text-2xl text-[#4B1F0E] ">
                    Multispecialty Collaboration
                  </h4>
                  <p className="text-base leading-relaxed">
                    Our team of specialists across medicine, physiotherapy,
                    dermatology, dentistry, and Ayurveda work together for your
                    complete care.
                  </p>
                  <h4 className="text-2xl text-[#4B1F0E] ">
                    Dedicated Aftercare & Communication
                  </h4>
                  <p className="text-base leading-relaxed">
                    We stay connected even after your treatment, ensuring
                    recovery, progress, and ongoing peace of mind.
                  </p>
                </div>
              </div>

              {/* Right side: 3D Image with enhanced effects */}
              <div className="lg:w-1/3   pb-6   ">
                <img src={home5} alt="Laser Equipment" className="p-6 " />
              </div>
            </div>
          </div>

          <style jsx>{`
            .perspective-1000 {
              perspective: 1000px;
            }
            .rotate-y-5 {
              transform: rotateY(5deg);
            }
            .rotate-x-2 {
              transform: rotateX(2deg);
            }
            .shadow-3xl {
              box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
            }
          `}</style>
        </div>

        <section className="bg-[#4B1F0E] text-white py-12 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="   overflow-hidden">
              <div className="container mx-auto  ">
                <motion.h2
                  className="text-4xl md:text-5x1 font-bold text-center text-white mb-3 bg-gradient-to-r from-white bg-clip-text "
                  variants={itemVariants}
                >
                  Discover the Benefits of Choosing VedaraCare Your Polyclinic
                  in Jumeirah
                </motion.h2>
                <p className="text-white/90 text-base md:text-lg leading-relaxed animate-fadeIn delay-200 ">
                  At Vedara Care Polyclinic, we’re committed to delivering
                  exceptional care with visible results. Whether you're seeking
                  skin rejuvenation, or holistic wellness, our skilled team is
                  here to support you at every stage of your health journey.
                  Discover our wide range of services designed to keep you
                  feeling and looking your best.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            {/* Left Column */}
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="text-xl font-semibold">
                  Aesthetic Dermatology for Youthful Skin
                </h2>
                <p className="mt-2 text-sm text-white/90">
                  Experience the best in aesthetic skin care with our advanced
                  dermatology services . We specialize in treating acne scars,
                  pigmentation, wrinkles, and signs of aging through treatments
                  like chemical peels, Botox, fillers, laser therapy, and PRP .
                  Rediscover your skin’s youthful glow with confidence.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">
                  Authentic Ayurvedic Therapies in Dubai
                </h2>
                <p className="mt-2 text-sm text-white/90">
                  Embrace holistic wellness through our authentic Ayurvedic
                  treatments. Using time-tested herbal remedies, therapeutic
                  massage, detoxification therapies, and lifestyle guidance, our
                  Ayurvedic experts help restore harmony between mind, body, and
                  spirit—naturally and effectively.
                </p>
              </div>
            </div>

            {/* Center Image */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="bg-[#2E6A5A]  rounded-full">
                <img
                  src={home3}
                  alt="Smiling Woman"
                  className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-80 object-cover rounded-full"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8 order-3">
              <div>
                <h2 className="text-xl font-semibold">
                  General Physician Services You Can Trust
                </h2>
                <p className="mt-2 text-sm text-white/90">
                  Our experienced general physicians offer comprehensive medical
                  care for individuals and families. From routine health
                  checkups and diagnosis of common ailments to chronic disease
                  management, we provide compassionate and customized care for
                  your everyday health needs.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">
                  Physiotherapy for Pain Relief & Mobility
                </h2>
                <p className="mt-2 text-sm text-white/90">
                  Restore movement, relieve pain, and regain strength with our
                  expert physiotherapy services in Dubai . Whether you're
                  recovering from an injury, surgery, or managing a chronic
                  condition, we design tailored physiotherapy plans that include
                  exercises, manual therapy, and rehabilitation techniques.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">The Vedara Care Promise</h2>
            <p className="mt-2 text-sm text-white/90">
              We combine cutting-edge treatments, personalized care, and
              holistic wellness under one roof to help you feel confident and
              healthy. From your first consultation to your final result, we
              ensure you receive the highest standard of service—because your
              health and beauty deserve nothing less.
            </p>
            <p className="mt-2 text-sm text-white/90">
              Book your appointment today and experience the difference at
              Vedara Care Polyclinic – your trusted destination for
              comprehensive, affordable care in Dubai.
            </p>
          </div>
        </section>

        <section className="bg-[#FDF2EC] py-12 px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-10">
            <p className="text-[#4B1F0E] text-sm font-medium tracking-wide">
              ●● Our Result
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#4B1F0E] mt-2">
              Visible Skin Transformations with Expert Dermatology
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Discover the stunning difference our treatments make. From acne
              reduction to anti-aging solutions, our{" "}
              <b className="text-[#4B1F0E]">Before & After results</b> speak for themselves. Explore our
              gallery to see real patient transformations and the true power of{" "}
              <b className="text-[#4B1F0E]">advanced dermatology treatments in Dubai—</b>where science
              meets beauty and results are undeniable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="rounded-xl overflow-hidden shadow-md">
              <CompareImage
                leftImage={skin1}
                rightImage={skin12}
                sliderLineColor="#4B1F0E"
                handleSize={40}
              />
            </div>

            <div className="rounded-xl overflow-hidden shadow-md">
              <CompareImage
                leftImage={skin2}
                rightImage={skin22}
                sliderLineColor="#4B1F0E"
                handleSize={40}
              />
            </div>
          </div>
        </section>

        <section className="bg-[#4B1F0E] text-white px-4 sm:px-6 lg:px-16 py-12 rounded-t-3xl">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
            {/* Left Column (Sticky Heading) */}
            <div className="lg:w-1/2">
              <div className="lg:sticky lg:top-24">
                <p className="text-white/80 text-sm font-medium mb-2">
                  ● Frequently Asked Questions
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
                  Frequently asked
                  <br />
                  question find out more
                </h2>
                <p className="text-white/80 mt-4">
                  Have questions about our dermatology services? Our ‘Frequently
                  Asked Questions’ section.
                </p>
                {/* <button className="mt-6 inline-flex items-center bg-white text-green-900 font-medium px-6 py-2 rounded-full hover:bg-gray-200 transition-all duration-200">
                    View All FAQs <span className="ml-2">→</span>
                  </button> */}
              </div>
            </div>

            {/* Right Column (Natural Scroll) */}
            <div className="lg:w-1/2 space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-white/30 pb-4">
                  <button
                    className="w-full flex justify-between items-center text-left"
                    onClick={() => toggle(index)}
                  >
                    <span className="text-lg font-medium">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  <div
                    className={`mt-2 text-white/80 text-sm transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-3 gap-2 lg:gap-4 pt-4 lg:pt-6">
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#4B1F0E]">
              500+
            </div>
            <div className="text-xs sm:text-sm text-[#4B1F0E]">
              Happy Clients
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#4B1F0E]">
              15+
            </div>
            <div className="text-xs sm:text-sm text-gray-600">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-xxl sm:text-2xl lg:text-3xl font-bold text-[#4B1F0E]">
              98%
            </div>
            <div className="text-xs sm:text-sm text-[#4B1F0E]">
              Success Rate
            </div>
          </div>
        </div>
        <br />

        {/* Testimonials Section */}
        <motion.div
          className="mb-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#4B1F0E]"
            variants={itemVariants}
          >
            What Our Clients Say
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-white to-gray-50 rounded-3xl p-8 shadow-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 text-white bg-[#4B1F0E] from-[#4B1F0E] rounded-full flex items-center justify-center  font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.treatment}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}

        <div className="w-full bg-[#FDF2EC] py-10 px-6 md:">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left Side - Map & Address */}
            <div className="space-y-6">
              <div className="w-full grid grid-cols-1 md:grid-cols-2">
                <div>
                  <h2 className="text-lg font-semibold">JVC,</h2>
                  <p className="text-gray-700">
                    Jumeirah Village Circle, 393558, Dubai
                  </p>
                </div>
                <div className="flex flex-col gap-2 text-gray-700">
                  <p>📞 +971542669346</p>
                  <p>☎️ 042862006</p>
                  <p>☎️0566597878</p>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-md">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.0247252043284!2d55.278154!3d25.252323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4349a8ec3d0b%3A0x97d6b014b2a6a38c!2sRama%20Care%20Polyclinic!5e0!3m2!1sen!2sae!4v1692533449334!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
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
                    <div
                      className={`mb-4 p-3 rounded-md text-center font-medium text-sm sm:text-base ${
                        submitStatus.includes("✅")
                          ? "bg-[#4B1F0E] text-[#4B1F0E] border border-[#4B1F0E]"
                          : submitStatus.includes("❌")
                          ? "bg-red-100 text-red-800 border border-red-300"
                          : "bg-blue-100 text-blue-800 border border-blue-300"
                      }`}
                    >
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
                        <option value="Skin Treatment">Hair Treatment</option>
                        <option value="Body Treatment">Body Treatment</option>
                        <option value="AyurvedaTreatment">
                          AyurvedaTreatment
                        </option>
                        <option value="Physiotherapy Treatment">
                          Physiotherapy Treatment
                        </option>

                        <option value="Other">Other</option>
                      </select>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        min={new Date().toISOString().split("T")[0]}
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
                        disabled={
                          isSubmitting ||
                          !formData.name ||
                          !formData.phone ||
                          !formData.email ||
                          !formData.service ||
                          !formData.date ||
                          !formData.time
                        }
                        className="col-span-1 sm:col-span-2 bg-[#4B1F0E] text-white font-medium py-3 sm:py-4 rounded-md hover:bg-[#4B1F0E] transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
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
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-[#4B1F0E] text-white px-4 sm:px-6 md:px-12 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {/* Newsletter */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className=" flex items-center justify-center text-sm font-bold">
              <img
                src={logo}
                alt="logo footer"
                className="h-full w-full flex items-center justify-center pl-4"
              />
            </div>
            <p className="text-sm font-medium">
              Sign Up To Our Newsletter For News, Offers And More.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-md sm:rounded-l-md sm:rounded-r-none text-black flex-1 text-sm"
              />
              <button className="bg-white text-[#144734] p-2 px-4 rounded-md sm:rounded-r-md sm:rounded-l-none font-bold text-sm">
                →
              </button>
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
              <span className="text-sm sm:text-base">
                Emergency toll free no
              </span>
            </div>
            <p className="ml-6 sm:ml-7 text-sm sm:text-base">042862006</p>
          </div>

          {/* Get In Touch */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Get In Touch</h3>
            <p className="text-sm sm:text-base">
              <span className="font-medium">Location</span>
              <br />
              JVC, Jumeirah Village Circle, 393558, Dubai
            </p>
            <p className="text-sm sm:text-base">
              <span className="font-medium">Email</span>
              <br />
              <span className="break-all sm:break-normal">
                Info@vedaracare.ae
              </span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Quick Link</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline text-sm sm:text-base">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="services"
                  className="hover:underline text-sm sm:text-base"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="contact"
                  className="hover:underline text-sm sm:text-base"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 sm:mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
          <p className="mb-4 sm:mb-0">Copyright © 2025 All Rights Reserved.</p>
          <div className="flex space-x-3 sm:space-x-4">
            <a href="#" className="hover:scale-110 transition-transform">
              <Twitter className="text-base sm:text-lg" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Facebook className="text-base sm:text-lg" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Instagram className="text-base sm:text-lg" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Linkedin className="text-base sm:text-lg" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Youtube className="text-base sm:text-lg" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
