import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const servicesData = [
    {
        id: 1,
        title: 'Website Development',
        icon: '🌐',
        color: 'from-blue-500 to-cyan-500',
        description: 'Professional websites for every business need',
        subServices: [
            'Business Websites',
            'Portfolio Websites',
            'E-commerce Websites',
            'Landing Pages',
            'Booking Websites',
            'Blog Websites',
            'Multi-vendor Sites',
            'Custom Web Applications'
        ]
    },
    {
        id: 2,
        title: 'UI/UX & Frontend',
        icon: '🎨',
        color: 'from-purple-500 to-pink-500',
        description: 'Beautiful designs that convert',
        subServices: [
            'UI/UX Design (Figma)',
            'Website Redesign / Revamp',
            'Mobile Responsive Fixing',
            'Speed Optimization',
            'SEO-friendly Page Structure',
            'Custom Animations (GSAP / Tailwind)'
        ]
    },
    {
        id: 3,
        title: 'Backend & SaaS',
        icon: '⚙️',
        color: 'from-indigo-500 to-blue-500',
        description: 'Robust systems for enterprise',
        subServices: [
            'Custom Dashboards',
            'CRM Systems',
            'Inventory / POS Systems',
            'School Management Systems',
            'Restaurant Ordering Systems',
            'Multi-store Management',
            'API Development',
            'Admin Panels'
        ]
    },
    {
        id: 4,
        title: 'Maintenance & Support',
        icon: '🔧',
        color: 'from-green-500 to-emerald-500',
        description: 'Keep your site running smoothly',
        subServices: [
            'Monthly Website Maintenance',
            'Security Monitoring',
            'Bug Fixing',
            'Speed Optimization',
            'Hosting & Domain Management',
            'Backup & Recovery',
            'Analytics Reports'
        ]
    },
    {
        id: 5,
        title: 'Digital Marketing Tech',
        icon: '📊',
        color: 'from-orange-500 to-red-500',
        description: 'Technical marketing solutions',
        subServices: [
            'Facebook Pixel Setup',
            'Google Analytics Setup',
            'Conversion Tracking Setup',
            'CRM Integration',
            'Landing Page Optimization',
            'WhatsApp Lead Form Integration'
        ]
    },
    {
        id: 6,
        title: 'E-commerce Solutions',
        icon: '🛒',
        color: 'from-yellow-500 to-orange-500',
        description: 'Complete online store setup',
        subServices: [
            'Shopify Store Development',
            'WooCommerce Setup',
            'Product Uploading',
            'Payment Gateway Integration',
            'Shipping Integration',
            'Conversion-focused Store Design'
        ]
    },
    {
        id: 7,
        title: 'Business Digitization',
        icon: '💼',
        color: 'from-teal-500 to-cyan-500',
        description: 'Transform your business digitally',
        subServices: [
            'Appointment Booking Systems',
            'Real Estate Listing Website',
            'Clinic/Salon Management System',
            'Restaurant Online Menu + Ordering',
            'Custom ERP (Lite version)'
        ]
    },
    {
        id: 8,
        title: 'Branding Services',
        icon: '✨',
        color: 'from-pink-500 to-rose-500',
        description: 'Build your brand identity',
        subServices: [
            'Logo Design',
            'Business Card Design',
            'Social Media Templates',
            'Brand Kit Setup'
        ]
    },
    {
        id: 9,
        title: 'Consulting Services',
        icon: '💡',
        color: 'from-violet-500 to-purple-500',
        description: 'Expert advice for growth',
        subServices: [
            'Tech Consulting',
            'Website Audit',
            'Performance Audit',
            'Code Review',
            'Marketing Funnel Consultation',
            'Automation Consultation'
        ]
    }
];

const Services = () => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section id="services" className="py-24 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-extrabold text-white sm:text-4xl"
                    >
                        Our Complete Service Portfolio
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 max-w-2xl mx-auto text-xl text-gray-400"
                    >
                        Click on any service to explore what we offer
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map((service, index) => {
                        const isExpanded = expandedId === service.id;

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={`bg-gray-800 rounded-2xl border-2 overflow-hidden shadow-xl transition-all duration-300 ${isExpanded ? 'border-blue-500 shadow-blue-500/20' : 'border-gray-700 hover:border-gray-600'
                                    }`}
                            >
                                {/* Card Header - Clickable */}
                                <button
                                    onClick={() => toggleExpand(service.id)}
                                    className="w-full p-6 text-left transition-colors hover:bg-gray-750"
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Icon */}
                                        <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl shadow-lg transform transition-transform ${isExpanded ? 'scale-110' : ''
                                            }`}>
                                            {service.icon}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>
                                            <p className="text-sm text-gray-400 mb-2">{service.description}</p>
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600/20 text-blue-400 border border-blue-600/30">
                                                {service.subServices.length} Services
                                            </span>
                                        </div>

                                        {/* Arrow Icon */}
                                        <motion.div
                                            animate={{ rotate: isExpanded ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex-shrink-0 mt-1"
                                        >
                                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </motion.div>
                                    </div>
                                </button>

                                {/* Expandable Content */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pt-2 border-t border-gray-700 bg-gray-800/50">
                                                <ul className="space-y-3">
                                                    {service.subServices.map((subService, idx) => (
                                                        <motion.li
                                                            key={idx}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: idx * 0.05 }}
                                                            className="flex items-center gap-3 text-gray-300 group cursor-pointer"
                                                            onClick={() => {
                                                                // Dispatch event
                                                                window.dispatchEvent(new CustomEvent('serviceSelected', { detail: subService }));
                                                                // Scroll to contact
                                                                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                                                            }}
                                                        >
                                                            <span className="text-blue-400 text-lg flex-shrink-0 group-hover:scale-125 transition-transform">✓</span>
                                                            <span className="text-sm group-hover:text-white group-hover:underline transition-all">{subService}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-600/30 rounded-2xl p-8 mb-8">
                        <p className="text-lg text-gray-300 mb-2">Need something specific?</p>
                        <p className="text-gray-400 mb-6">We create custom solutions tailored to your business needs</p>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all"
                        >
                            <span>Get Custom Solution</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
