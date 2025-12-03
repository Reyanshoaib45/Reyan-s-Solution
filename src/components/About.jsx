import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 bg-gray-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-1/4 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-extrabold text-white sm:text-4xl"
                    >
                        About Reyan Solutions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 max-w-2xl mx-auto text-xl text-gray-400"
                    >
                        Building digital solutions that drive real business growth
                    </motion.p>
                </div>

                {/* Story Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-gray-800">
                        <h3 className="text-2xl font-bold text-white mb-6">Our Story</h3>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>
                                Reyan Solutions was founded with a simple mission: to help businesses leverage technology
                                to achieve their goals. We specialize in creating custom web applications, dashboards,
                                and digital solutions that are not just beautiful, but functional and scalable.
                            </p>
                            <p>
                                From startups to established businesses, we've helped clients across Pakistan, UAE, and
                                internationally transform their operations through smart software solutions. Our approach
                                combines technical expertise with a deep understanding of business needs.
                            </p>
                            <p>
                                We believe in building long-term partnerships with our clients, providing ongoing support
                                and evolving solutions as their businesses grow.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    {[
                        { number: '50+', label: 'Projects Completed' },
                        { number: '30+', label: 'Happy Clients' },
                        { number: '3+', label: 'Years Experience' },
                        { number: '5+', label: 'Countries Served' }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl p-6 text-center border border-blue-600/20"
                        >
                            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Why Choose Us */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Why Choose Reyan Solutions?</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: '🎯',
                                title: 'Results-Driven Approach',
                                description: 'We focus on delivering measurable business outcomes, not just code. Every solution is designed to solve real problems and drive growth.'
                            },
                            {
                                icon: '🌍',
                                title: 'International Experience',
                                description: 'We work with clients across UAE, Pakistan, and internationally. Remote-first approach with clear communication and timely delivery.'
                            },
                            {
                                icon: '⚡',
                                title: 'Modern Technology Stack',
                                description: 'We use cutting-edge technologies and best practices to build fast, secure, and scalable applications that stand the test of time.'
                            },
                            {
                                icon: '💬',
                                title: 'Clear Communication',
                                description: 'No technical jargon. We explain everything in plain English and keep you updated throughout the development process.'
                            },
                            {
                                icon: '🔧',
                                title: 'Ongoing Support',
                                description: 'We don\'t disappear after launch. We provide maintenance, updates, and support to ensure your solution continues to perform.'
                            },
                            {
                                icon: '💰',
                                title: 'Transparent Pricing',
                                description: 'No hidden costs or surprises. We provide clear quotes upfront and stick to our commitments on budget and timeline.'
                            }
                        ].map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-gray-800 hover:border-blue-600/50 transition-all"
                            >
                                <div className="text-4xl mb-4">{reason.icon}</div>
                                <h4 className="text-lg font-bold text-white mb-2">{reason.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Values */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 md:p-12 border border-blue-600/30"
                >
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Core Values</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Quality First',
                                description: 'We never compromise on code quality, security, or performance. Every line of code is written with care.'
                            },
                            {
                                title: 'Client Success',
                                description: 'Your success is our success. We measure our work by the impact it has on your business.'
                            },
                            {
                                title: 'Continuous Learning',
                                description: 'Technology evolves fast. We stay updated with the latest tools and best practices to serve you better.'
                            }
                        ].map((value, index) => (
                            <div key={index} className="text-center">
                                <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                                <p className="text-gray-400 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
