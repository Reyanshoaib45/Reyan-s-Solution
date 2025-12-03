import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        content: "Reyan Solutions delivered our POS system ahead of schedule. The multi-store inventory management has eliminated our stock discrepancies completely. Best investment we've made!",
        author: "Ahmed Al-Rashid",
        role: "Operations Manager",
        company: "Retail Chain, Dubai",
        rating: 5
    },
    {
        content: "Working with Reyan was seamless despite the time zone difference. They built our school management system exactly as we envisioned. Parents love the transparency!",
        author: "Dr. Sarah Khan",
        role: "Principal",
        company: "Private School, Karachi",
        rating: 5
    },
    {
        content: "The restaurant ordering system transformed our business. Online orders increased by 150% and kitchen errors dropped significantly. Highly professional team!",
        author: "Marco Rossi",
        role: "Restaurant Owner",
        company: "Italian Restaurant, Abu Dhabi",
        rating: 5
    },
    {
        content: "My portfolio website looks incredibly professional. I've received 5x more recruiter inquiries since launch. Reyan's attention to detail is outstanding!",
        author: "Jennifer Lee",
        role: "Software Developer",
        company: "Tech Professional, USA",
        rating: 5
    },
    {
        content: "Fast, reliable, and excellent communication. They understood our requirements perfectly and delivered a dashboard that exceeded expectations.",
        author: "Hassan Mahmoud",
        role: "CEO",
        company: "E-commerce Startup, UAE",
        rating: 5
    },
    {
        content: "The best part? No technical jargon. Reyan explained everything clearly and kept us updated throughout. The final product is exactly what we needed.",
        author: "Lisa Thompson",
        role: "Marketing Director",
        company: "Digital Agency, UK",
        rating: 5
    }
];


const Testimonials = () => {
    return (
        <section className="py-24 bg-blue-900/20 relative overflow-hidden">
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
                        What Our Clients Say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 max-w-2xl mx-auto text-xl text-gray-400"
                    >
                        Real feedback from real clients across the globe
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-700 hover:border-blue-600/50 transition-all"
                        >
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                            <div className="border-t border-gray-700 pt-4">
                                <p className="font-bold text-white text-lg">{testimonial.author}</p>
                                <p className="text-blue-400 text-sm font-medium">{testimonial.role}</p>
                                <p className="text-gray-500 text-xs mt-1">{testimonial.company}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-600/30">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-300 font-medium">Trusted by 30+ businesses worldwide</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;

