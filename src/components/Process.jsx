import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        id: '01',
        title: 'Consultation',
        description: 'We discuss your ideas, requirements, and goals to understand your vision.',
    },
    {
        id: '02',
        title: 'Planning & Design',
        description: 'We create a roadmap and design the user interface and experience.',
    },
    {
        id: '03',
        title: 'Development',
        description: 'Our team builds your solution using the latest technologies and best practices.',
    },
    {
        id: '04',
        title: 'Testing & Launch',
        description: 'Rigorous testing ensures a bug-free launch and smooth deployment.',
    },
];

const Process = () => {
    return (
        <section id="process" className="py-24 bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-extrabold text-white sm:text-4xl"
                    >
                        Our Process
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 max-w-2xl mx-auto text-xl text-gray-400"
                    >
                        From concept to reality, we follow a structured approach to ensure success.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-gray-950 p-6 text-center group relative"
                            >
                                <div className="w-20 h-20 mx-auto bg-gray-900 text-blue-500 rounded-full flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 border-4 border-gray-800 shadow-xl z-20 relative">
                                    {step.id}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
