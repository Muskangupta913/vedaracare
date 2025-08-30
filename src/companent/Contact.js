import React,{ useState } from 'react'
import { Phone, Mail, Headphones, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import image from '../image/formiamge.jpg';
import logo from '../image/ChatGPT.png'

function Contact() {
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
    <div className='bg-'>

      <div className="bg-[#4B1F0E] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 rounded-none sm:rounded-3xl mt-0 sm:mt-6 relative overflow-hidden">
      {/* Left SVG decoration */}
      <div className="absolute top-4 sm:top-8 left-4 sm:left-8 opacity-20 hidden md:block">
        <svg width="80" height="80" className="sm:w-24 sm:h-24 md:w-32 md:h-32" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M0,60 C20,40 40,80 60,60" />
          <path d="M10,80 C30,50 50,100 70,70" />
        </svg>
      </div>

      {/* Right SVG decoration */}
      <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 opacity-20 hidden md:block rotate-180">
        <svg width="80" height="80" className="sm:w-24 sm:h-24 md:w-32 md:h-32" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M0,60 C20,40 40,80 60,60" />
          <path d="M10,80 C30,50 50,100 70,70" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="text-center relative z-10">
        <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Contact us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-8 max-w-3xl mx-auto">
              Home/Contact Us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
            </div>
          </div>
        
      </div>
    </div>

      <div className="bg- min-h-screen p-4 sm:p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-start">
        {/* Left Side Image with Overlay */}
        <div className="relative order-2 md:order-1">
          <img
            src={image}
            alt="Doctor"
            className="rounded-lg shadow-lg w-full h-64 sm:h-80 md:h-96 lg:h-[550px] object-cover"
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
            ? 'bg-[#E76F51] text-[#4B1F0E] border border-[#4B1F0E]' 
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
            className="col-span-1 sm:col-span-2 bg-[#4B1F0E] text-white font-medium py-3 sm:py-4 rounded-md hover:bg-green-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
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

      {/* Contact Info */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 text-white px-4 sm:px-6">
        <div className="bg-[#4B1F0E] p-4 sm:p-6 rounded-lg text-center shadow-lg">
          <h3 className="font-bold text-base sm:text-lg mb-2">Phone</h3>
          <div className="text-sm sm:text-base space-y-1">
            <p>+971526089546</p>
            <p>042862006</p>
            <p>0566697878</p>
          </div>
        </div>
        <div className="bg-[#4B1F0E] p-4 sm:p-6 rounded-lg text-center shadow-lg">
          <h3 className="font-bold text-base sm:text-lg mb-2">Address</h3>
          <p className="text-sm sm:text-base leading-relaxed">
            JVC, Jumeirah Village Circle,,
            <br />
            JVC, Jumeirah Village Circle, Dubai
          </p>
        </div>
        <div className="bg-[#4B1F0E] p-4 sm:p-6 rounded-lg text-center shadow-lg sm:col-span-2 md:col-span-1">
          <h3 className="font-bold text-base sm:text-lg mb-2">Email</h3>
          <p className="text-sm sm:text-base break-all sm:break-normal">info@vedaracare.ae</p>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-8 sm:mt-12 max-w-6xl mx-auto shadow-lg rounded-lg overflow-hidden px-4 sm:px-6">
        <iframe
          title="Vedara Care Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.123778132811!2d55.265560875369095!3d25.24198887767183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d1b9ecde355%3A0xa6eac703e9f2a6b7!2sRama%20Care%20Polyclinic!5e0!3m2!1sen!2sae!4v1691524156149!5m2!1sen!2sae"
          width="100%"
          height="300"
          className="sm:h-80 md:h-[400px]"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      
    </div>

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
            JVC, Jumeirah Village Circle,, JVC, Jumeirah Village Circle, 393558, Dubai
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
  )
}

export default Contact