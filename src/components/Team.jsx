import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
    {
        name: 'Reyan Shoaib',
        role: 'Founder & Lead Developer',
        description: 'Visionary leader with a passion for innovative software solutions.',
        initials: 'RS',
        color: 'from-blue-500 to-indigo-600'
    },
    {
        name: 'Sarah Khan',
        role: 'UI/UX Designer',
        description: 'Creative mind behind our stunning and user-friendly designs.',
        initials: 'SK',
        color: 'from-purple-500 to-pink-600'
    },
    {
        name: 'Ahmed Ali',
        role: 'Senior Developer',
        description: 'Expert in full-stack development and system architecture.',
        initials: 'AA',
        color: 'from-emerald-500 to-teal-600'
    },
    {
        name: 'Fatima Noor',
        role: 'Project Manager',
        description: 'Ensures projects are delivered on time and exceed expectations.',
        initials: 'FN',
        color: 'from-orange-500 to-red-600'
    },
];

const Team = () => {
    return (
        <section id="team" className="py-24 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-extrabold text-white sm:text-4xl"
                    >
                        Meet Our Team
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 max-w-2xl mx-auto text-xl text-gray-400"
                    >
                        The talented individuals driving our success.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 text-center p-8 border border-gray-700"
                        >
                            <div className={`w-28 h-28 mx-auto bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-lg`}>
                                {member.initials}
                            </div>
                            <h3 className="text-xl font-bold text-white">{member.name}</h3>
                            <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                            <p className="text-gray-400 text-sm">{member.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
