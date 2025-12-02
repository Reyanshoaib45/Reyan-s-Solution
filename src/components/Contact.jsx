import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        service: '',
        projectDetails: ''
    });

    useEffect(() => {
        const handleServiceSelect = (e) => {
            setFormData(prev => ({
                ...prev,
                service: e.detail
            }));
        };

        window.addEventListener('serviceSelected', handleServiceSelect);
        return () => window.removeEventListener('serviceSelected', handleServiceSelect);
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Save to localStorage
        const submission = {
            id: Date.now(),
            name: formData.name,
            email: formData.email,
            whatsapp: formData.whatsapp,
            service: formData.service,
            projectDetails: formData.projectDetails,
            timestamp: new Date().toISOString(),
            date: new Date().toLocaleString('en-US', {
                dateStyle: 'medium',
                timeStyle: 'short'
            })
        };

        // Get existing submissions
        const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        existingSubmissions.push(submission);
        localStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions));

        // Create WhatsApp message
        const message = `Hello! I'm ${formData.name}%0A%0AEmail: ${formData.email}%0AWhatsApp: ${formData.whatsapp}%0A%0AService of Interest: ${formData.service}%0A%0AProject Details:%0A${formData.projectDetails}`;
        window.open(`https://wa.me/923464769301?text=${message}`, '_blank');

        // Reset form
        setFormData({
            name: '',
            email: '',
            whatsapp: '',
            service: '',
            projectDetails: ''
        });

        // Show success message
        alert('Thank you! Your message has been saved and will open in WhatsApp.');
    };

    return (
        <section id="contact" className="py-24 bg-gray-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-extrabold text-white sm:text-4xl"
                    >
                        Get in Touch
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 max-w-2xl mx-auto text-xl text-gray-400"
                    >
                        Ready to start your project? Fill out the form below or reach us directly!
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-700"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-2">
                                    WhatsApp Number *
                                </label>
                                <input
                                    type="tel"
                                    id="whatsapp"
                                    name="whatsapp"
                                    required
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="+92 XXX XXXXXXX"
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                                    Service of Interest
                                </label>
                                <input
                                    type="text"
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Selected service will appear here..."
                                />
                            </div>

                            <div>
                                <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-300 mb-2">
                                    Project Details *
                                </label>
                                <textarea
                                    id="projectDetails"
                                    name="projectDetails"
                                    required
                                    value={formData.projectDetails}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all"
                            >
                                Send Message via WhatsApp
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-700">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                {/* WhatsApp */}
                                <motion.a
                                    href="https://wa.me/923464769301"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 p-4 bg-green-600/20 hover:bg-green-600/30 rounded-xl border border-green-600/50 transition-all group"
                                >
                                    <div className="flex-shrink-0">
                                        <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">WhatsApp</p>
                                        <p className="text-lg font-semibold text-white">03464769301</p>
                                    </div>
                                </motion.a>

                                {/* Email */}
                                <motion.a
                                    href="mailto:reyanshoaib@gmail.com"
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 p-4 bg-purple-600/20 hover:bg-purple-600/30 rounded-xl border border-purple-600/50 transition-all group"
                                >
                                    <div className="flex-shrink-0">
                                        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Email</p>
                                        <p className="text-lg font-semibold text-white break-all">reyanshoaib@gmail.com</p>
                                    </div>
                                </motion.a>

                                {/* Portfolio */}
                                <motion.a
                                    href="https://personal-profile-beta-sage.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 p-4 bg-indigo-600/20 hover:bg-indigo-600/30 rounded-xl border border-indigo-600/50 transition-all group"
                                >
                                    <div className="flex-shrink-0">
                                        <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Portfolio</p>
                                        <p className="text-lg font-semibold text-white">View Our Work</p>
                                    </div>
                                </motion.a>
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-600/30">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <p className="text-white font-bold text-lg">Available 24/7</p>
                            </div>
                            <p className="text-gray-300">
                                We're always ready to discuss your project and provide quick responses to your queries.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
