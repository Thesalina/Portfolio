import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission process
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Clear form after submission
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    
    <section id="contact" className="relative min-h-screen bg-black text-white py-16">
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-pink-400 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-400 rounded-full blur-3xl opacity-40"></div>

      <div className="container mx-auto px-6 md:px-12">
        {/* Heading with Animation */}
        <motion.h2
          className="text-4xl font-extrabold text-center text-pink-400 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Contact Information */}
          <motion.div
            className="w-full md:w-1/3 text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold text-pink-400 mb-4">Contact Info</h3>
            <p className="text-lg text-gray-300 mb-4">
              Feel free to reach out through any of the following channels:
            </p>
            <div className="text-lg text-gray-300 mb-2">
              📧 <span>Email: <a href="mailto:example@example.com" className="text-pink-500">gotamesalina6@gmail.com</a></span>
            </div>
            <div className="text-lg text-gray-300 mb-2">
              📞 <span>Phone: +977 <a href="tel:+1234567890" className="text-pink-500">9809878769</a></span>
            </div>
            <div className="text-lg text-gray-300">
              📍 <span>Location: Ghorahi Dang Nepal</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-medium text-pink-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border black-text  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-medium text-pink-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-lg  font-medium text-pink-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border  text-black border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Your Message"
                  rows="6"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors duration-300"
              >
                Send Message
              </button>

              {/* Success Message */}
              {submitted && (
                <motion.p
                  className="mt-4 text-center text-lg font-semibold text-green-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  ✅ Message sent successfully!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
