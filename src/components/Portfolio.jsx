import React from 'react';
import { motion } from 'framer-motion';

const portfolioItems = [
    {
        title: 'Personal Portfolio',
        description: 'Modern personal portfolio showcasing professional work and achievements',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=450&fit=crop&q=80',
        link: 'https://personal-profile-beta-sage.vercel.app/',
        tags: ['React', 'Tailwind CSS', 'Modern Design']
    },
    {
        title: 'E-Commerce Dashboard',
        description: 'Comprehensive admin dashboard for managing online stores with real-time analytics',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop&q=80',
        link: '#',
        tags: ['React', 'Dashboard', 'Analytics']
    },
    {
        title: 'Real Estate Platform',
        description: 'Property listing and management system for real estate businesses',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=450&fit=crop&q=80',
        link: '#',
        tags: ['Next.js', 'Real Estate', 'CRM']
    },
    {
        title: 'Clinic Management System',
        description: 'Complete healthcare management solution with appointment scheduling',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=450&fit=crop&q=80',
        link: '#',
        tags: ['Healthcare', 'Booking', 'Management']
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
};

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-extrabold text-white sm:text-4xl"
                    >
                        Our Portfolio
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 max-w-2xl mx-auto text-xl text-gray-400"
                    >
                        Explore our successful projects and see the quality we deliver
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
                >
                    {portfolioItems.map((project, index) => (
                        <motion.a
                            key={index}
                            variants={item}
                            whileHover={{ y: -10 }}
                            href={project.link}
                            target={project.link.startsWith('http') ? '_blank' : '_self'}
                            rel={project.link.startsWith('http') ? 'noopener noreferrer' : ''}
                            className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all shadow-xl hover:shadow-blue-500/20"
                        >
                            <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="text-center">
                                        <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </div>
                                        <p className="text-white font-semibold text-lg">View Project</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 text-xs font-medium bg-blue-600/20 text-blue-400 rounded-full border border-blue-600/30"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://personal-profile-beta-sage.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 border-2 border-blue-600 text-base font-medium rounded-full text-white hover:bg-blue-600/10 shadow-lg transition-all"
                    >
                        <span>View Full Portfolio</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
