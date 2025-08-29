import React, { useState } from "react";

function DR_doctor() {
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
      const message = `🏥 *New Appointment Request*

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
🩺 *Service:* ${formData.service}
📅 *Date:* ${formData.date}
⏰ *Time:* ${formData.time}
📝 *Details:* ${formData.description || 'No additional details'}

Please confirm this appointment. Thank you!`;

      // Create WhatsApp URL
      const whatsappURL = `https://wa.me/917888477955?text=${encodeURIComponent(message)}`;
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
    <div className="max-w-2xl mx-auto p-4">
      {submitStatus && (
        <div className={`mb-4 p-3 rounded-md text-center font-medium ${
          submitStatus.includes('✅') 
            ? 'bg-green-100 text-green-800 border border-green-300' 
            : submitStatus.includes('❌')
            ? 'bg-red-100 text-red-800 border border-red-300'
            : 'bg-blue-100 text-blue-800 border border-blue-300'
        }`}>
          {submitStatus}
        </div>
      )}

      <div className="bg-pink-50 p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name Here"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            className="border rounded-md p-3 w-full focus:outline-green-600 disabled:bg-gray-100"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
            className="border rounded-md p-3 w-full focus:outline-green-600 disabled:bg-gray-100"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            className="border rounded-md p-3 w-full focus:outline-green-600 disabled:bg-gray-100"
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            disabled={isSubmitting}
            className="border rounded-md p-3 w-full focus:outline-green-600 disabled:bg-gray-100"
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
            className="border rounded-md p-3 w-full focus:outline-green-600 disabled:bg-gray-100"
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            disabled={isSubmitting}
            className="border rounded-md p-3 w-full focus:outline-green-600 disabled:bg-gray-100"
          />
          <textarea
            name="description"
            placeholder="Description here about service or your problem..."
            value={formData.description}
            onChange={handleChange}
            disabled={isSubmitting}
            className="border rounded-md p-3 w-full col-span-2 h-28 focus:outline-green-600 disabled:bg-gray-100"
          />
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || !formData.name || !formData.phone || !formData.email || !formData.service || !formData.date || !formData.time}
            className="col-span-2 bg-[#4B1F0E] text-white font-medium py-3 rounded-md hover:bg-green-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
  );
}

export default DR_doctor;