import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative bg-gray-950 overflow-hidden min-h-screen flex items-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/banner.png"
                    alt="Technology Background"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/95 to-gray-950/60"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                                Reyan Solutions
                            </span>
                        </h1>
                        <p className="mt-6 text-xl sm:text-2xl text-gray-300 font-medium">
                            Building Scalable Websites & Dashboards for Dubai Businesses & Beyond
                        </p>
                        <div className="mt-4 flex items-center justify-center lg:justify-start gap-2">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-600/30">
                                <span className="text-xl">🌍</span>
                                <span className="text-gray-300 text-sm font-medium">Serving UAE & International Clients</span>
                            </span>
                        </div>
                        <p className="mt-4 text-lg text-gray-400">
                            We specialize in crafting high-performance websites, robust applications, and long-term digital strategies to propel your business forward.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contact"
                                className="px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 md:py-4 md:text-lg shadow-lg hover:shadow-blue-500/50 transition-all"
                            >
                                Get a Quote
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://personal-profile-beta-sage.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 border-2 border-blue-600 text-base font-medium rounded-full text-white hover:bg-blue-600/10 md:py-4 md:text-lg shadow-lg transition-all"
                            >
                                View Portfolio
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Side Animated Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden lg:flex justify-center items-center relative"
                    >
                        <div className="relative w-full max-w-lg aspect-square">
                            {/* Abstract Tech Visuals */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="relative z-10 border border-gray-800 bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
                                <div className="space-y-4">
                                    <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-800 rounded w-1/2"></div>
                                    <div className="h-32 bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                                        <span className="text-blue-500 font-mono text-sm">&lt;Code /&gt;</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="h-10 w-10 rounded-full bg-blue-600/20"></div>
                                        <div className="h-10 w-10 rounded-full bg-purple-600/20"></div>
                                        <div className="h-10 w-10 rounded-full bg-indigo-600/20"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-10 bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-xl"
                            >
                                <span className="text-2xl">🚀</span>
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-5 -left-5 bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-xl"
                            >
                                <span className="text-2xl">💻</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
