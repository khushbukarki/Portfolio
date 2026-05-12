import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Using Formspree - sign up at formspree.io
    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section id="contact" className="w-full py-20 bg-gray-900">
      <div className="max-w-2xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
        >
          Get In Touch
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 mb-12"
        >
          Have a project or question? Let's connect!
        </motion.p>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-6 mb-12"
        >
          {/* Success Message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-900 bg-opacity-30 border border-green-500 text-green-300 px-4 py-3 rounded"
            >
              ✓ Message sent successfully! I'll get back to you soon.
            </motion.div>
          )}

          {/* Name Input */}
          <div>
            <label className="block text-white mb-2 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 text-white rounded border border-gray-700 focus:border-blue-500 focus:outline-none transition"
              placeholder="Your name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-white mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 text-white rounded border border-gray-700 focus:border-blue-500 focus:outline-none transition"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-white mb-2 font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 bg-gray-800 text-white rounded border border-gray-700 focus:border-blue-500 focus:outline-none transition resize-none"
              placeholder="Tell me about your project or question..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded font-bold hover:from-blue-700 hover:to-blue-800 transition"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-12 border-t border-gray-700 text-center"
        >
          <p className="text-gray-400 mb-6">Or connect with me on:</p>
          <div className="flex justify-center gap-6 flex-wrap">
            <motion.a
              href="https://github.com/khushbukarki"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition font-semibold"
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/khushbukarki"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition font-semibold"
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="mailto:khushbu.karki@example.com"
              whileHover={{ scale: 1.1 }}
              className="px-6 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 transition font-semibold"
            >
              Email
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;