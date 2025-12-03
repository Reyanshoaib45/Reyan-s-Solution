import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col font-sans bg-gray-950 text-gray-100">
            {/* Navbar */}
            <nav className="bg-gray-950/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center gap-3">
                            <img src="/logo.png" alt="Reyan Solutions Logo" className="h-10 w-auto" />
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                Reyan Solutions
                            </span>
                        </div>
                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#about" className="relative text-gray-300 hover:text-blue-400 transition-all duration-300 focus:outline-none focus:text-blue-400 group">
                                <span>About</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 group-hover:w-full transition-all duration-300" />
                            </a>
                            <a href="#services" className="relative text-gray-300 hover:text-blue-400 transition-all duration-300 focus:outline-none focus:text-blue-400 group">
                                <span>Services</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 group-hover:w-full transition-all duration-300" />
                            </a>
                            <a href="#portfolio" className="relative text-gray-300 hover:text-blue-400 transition-all duration-300 focus:outline-none focus:text-blue-400 group">
                                <span>Portfolio</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 group-hover:w-full transition-all duration-300" />
                            </a>
                            <a href="#pricing" className="relative text-gray-300 hover:text-blue-400 transition-all duration-300 focus:outline-none focus:text-blue-400 group">
                                <span>Pricing</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 group-hover:w-full transition-all duration-300" />
                            </a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contact"
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
                            >
                                Get in Touch
                            </motion.a>
                        </div>
                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-gray-900 border-b border-gray-800 overflow-hidden"
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-all duration-300 focus:outline-none focus:text-blue-400 focus:bg-gray-800 focus:ring-2 focus:ring-blue-500">About</a>
                                <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-all duration-300 focus:outline-none focus:text-blue-400 focus:bg-gray-800 focus:ring-2 focus:ring-blue-500">Services</a>
                                <a href="#portfolio" className="block px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-all duration-300 focus:outline-none focus:text-blue-400 focus:bg-gray-800 focus:ring-2 focus:ring-blue-500">Portfolio</a>
                                <a href="#pricing" className="block px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-all duration-300 focus:outline-none focus:text-blue-400 focus:bg-gray-800 focus:ring-2 focus:ring-blue-500">Pricing</a>
                                <a href="#contact" className="block px-3 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-500 hover:to-indigo-500 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500">Contact Us</a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Main Content */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <footer className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border-t border-gray-800 text-white py-16 overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-500 rounded-full blur-3xl animate-pulse animation-delay-400" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        {/* Company Info */}
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-3 mb-6">
                                <img src="/logo.png" alt="Reyan Solutions Logo" className="h-10 w-auto" />
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Reyan Solutions</h3>
                            </div>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Innovating the future with cutting-edge software solutions. We transform ideas into powerful digital experiences.
                            </p>
                            {/* Social Media Links */}
                            <div className="flex gap-4">
                                <a href="https://personal-profile-beta-sage.vercel.app/" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950">
                                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" /></svg>
                                </a>
                                <a href="https://wa.me/923464769301" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950">
                                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                </a>
                                <a href="mailto:reyanshoaib45@gmail.com" className="group w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950">
                                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </a>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950">
                                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                </a>
                            </div>
                        </div>
                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Quick Links</h3>
                            <ul className="space-y-3">
                                <li><a href="#services" className="group text-gray-400 hover:text-blue-400 transition-all duration-300 inline-flex items-center focus:outline-none focus:text-blue-400 focus:underline"><span className="transform group-hover:translate-x-1 transition-transform duration-300">Services</span><svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></a></li>
                                <li><a href="#process" className="group text-gray-400 hover:text-blue-400 transition-all duration-300 inline-flex items-center focus:outline-none focus:text-blue-400 focus:underline"><span className="transform group-hover:translate-x-1 transition-transform duration-300">Process</span><svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></a></li>
                                <li><a href="#team" className="group text-gray-400 hover:text-blue-400 transition-all duration-300 inline-flex items-center focus:outline-none focus:text-blue-400 focus:underline"><span className="transform group-hover:translate-x-1 transition-transform duration-300">Team</span><svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></a></li>
                                <li><a href="#contact" className="group text-gray-400 hover:text-blue-400 transition-all duration-300 inline-flex items-center focus:outline-none focus:text-blue-400 focus:underline"><span className="transform group-hover:translate-x-1 transition-transform duration-300">Contact</span><svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></a></li>
                            </ul>
                        </div>
                        {/* Contact Info */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Contact</h3>
                            <ul className="space-y-3">
                                <li><a href="mailto:reyanshoaib45@gmail.com" className="text-gray-400 hover:text-blue-400 transition-all duration-300 inline-flex items-center group focus:outline-none focus:text-blue-400 focus:underline"><svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg><span className="text-sm">reyanshoaib45@gmail.com</span></a></li>
                                <li><a href="tel:+923464769301" className="text-gray-400 hover:text-blue-400 transition-all duration-300 inline-flex items-center group focus:outline-none focus:text-blue-400 focus:underline"><svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg><span className="text-sm">+92 346 4769301</span></a></li>
                                <li><a href="tel:+923168930791" className="text-gray-400 hover:text-blue-400 transition-all duration-300 inline-flex items-center group focus:outline-none focus:text-blue-400 focus:underline"><svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg><span className="text-sm">+92 316 8930791</span></a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-gray-800">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Reyan Solutions. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
