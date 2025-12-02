import React from 'react';
import { motion } from 'framer-motion';

const UAETarget = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="flex items-center gap-2">
                            <span className="text-4xl">🇦🇪</span>
                            <div className="h-12 w-1 bg-white/30"></div>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                            Serving Dubai & UAE
                        </h2>
                    </div>

                    <p className="text-xl sm:text-2xl md:text-3xl text-blue-100 font-medium max-w-4xl mx-auto leading-relaxed">
                        We build websites for Dubai startups, real estate, clinics, and small businesses.
                    </p>

                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                        {[
                            { icon: '🚀', label: 'Startups' },
                            { icon: '🏢', label: 'Real Estate' },
                            { icon: '🏥', label: 'Clinics' },
                            { icon: '💼', label: 'Small Business' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all"
                            >
                                <div className="text-3xl mb-2">{item.icon}</div>
                                <p className="text-white font-medium">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-10"
                    >
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 shadow-2xl hover:shadow-white/20 transition-all text-lg"
                        >
                            <span>Start Your Project</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default UAETarget;
