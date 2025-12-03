import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CaseStudy from './CaseStudy';

const portfolioItems = [
    {
        title: 'Personal Portfolio Website',
        description: 'Modern, responsive portfolio showcasing professional work and achievements with smooth animations',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=450&fit=crop&q=80',
        link: 'https://personal-profile-beta-sage.vercel.app/',
        tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
        duration: '2 weeks',
        teamSize: '1 Developer',
        industry: 'Personal Branding',
        challenge: 'Client needed a professional online presence to showcase their skills and projects to potential employers and clients. The existing portfolio was outdated and not mobile-friendly, resulting in poor engagement from recruiters.',
        solution: 'Designed and developed a modern, fully responsive portfolio website with smooth animations and an intuitive user experience. Implemented dark mode, project filtering, and contact integration to maximize engagement.',
        features: [
            'Fully responsive design optimized for all devices',
            'Smooth scroll animations and micro-interactions',
            'Project showcase with filtering capabilities',
            'Integrated contact form with email notifications',
            'SEO optimized for better discoverability'
        ],
        results: [
            { metric: '300%', description: 'Increase in profile views' },
            { metric: '5x', description: 'More recruiter inquiries' },
            { metric: '95+', description: 'Lighthouse performance score' },
            { metric: '100%', description: 'Mobile responsive' }
        ],
        testimonial: {
            quote: 'Reyan delivered exactly what I needed. The portfolio looks professional and I\'ve already received multiple job offers!',
            author: 'Portfolio Client',
            role: 'Software Developer'
        }
    },
    {
        title: 'Multi-Store POS & Inventory System',
        description: 'Comprehensive point-of-sale and inventory management system for multi-location retail businesses',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop&q=80',
        link: '#',
        tags: ['Laravel', 'MySQL', 'Real-time Analytics', 'Multi-tenant'],
        duration: '3 months',
        teamSize: '2 Developers',
        industry: 'Retail & E-commerce',
        challenge: 'A growing retail chain needed a unified system to manage inventory across multiple stores, track sales in real-time, and generate comprehensive reports. Their existing manual processes were causing stock discrepancies and lost revenue.',
        solution: 'Built a full-featured POS system with multi-store management, real-time inventory tracking, role-based access control, and advanced reporting. The system handles product variations, supplier management, and automated low-stock alerts.',
        features: [
            'Multi-store inventory synchronization',
            'Real-time sales tracking and reporting',
            'Product variations and SKU management',
            'Role-based access control for staff',
            'Automated low-stock alerts and reordering',
            'Comprehensive sales and inventory reports',
            'Barcode scanning integration'
        ],
        results: [
            { metric: '40%', description: 'Reduction in stock discrepancies' },
            { metric: '60%', description: 'Faster checkout process' },
            { metric: '25%', description: 'Increase in overall sales' },
            { metric: '10hrs/week', description: 'Time saved on reporting' }
        ],
        testimonial: {
            quote: 'This system transformed our business operations. We can now manage all our stores from one dashboard and make data-driven decisions.',
            author: 'Store Owner',
            role: 'Retail Chain Manager'
        }
    },
    {
        title: 'School Management System',
        description: 'Complete education management platform with student records, fee management, and parent portal',
        image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=450&fit=crop&q=80',
        link: '#',
        tags: ['Laravel', 'Vue.js', 'MySQL', 'Education'],
        duration: '4 months',
        teamSize: '3 Developers',
        industry: 'Education',
        challenge: 'A private school was managing student records, attendance, and fee collection manually using spreadsheets and paper forms. This led to errors, delays in communication with parents, and difficulty in generating reports for administration.',
        solution: 'Developed a comprehensive school management system that digitizes all administrative tasks including student enrollment, attendance tracking, fee management, grade reporting, and parent-teacher communication.',
        features: [
            'Student enrollment and profile management',
            'Automated attendance tracking',
            'Fee structure and challan generation',
            'Grade and report card management',
            'Parent portal for real-time updates',
            'Teacher dashboard for class management',
            'SMS and email notifications',
            'Comprehensive administrative reports'
        ],
        results: [
            { metric: '80%', description: 'Reduction in administrative workload' },
            { metric: '95%', description: 'Parent satisfaction rate' },
            { metric: '50%', description: 'Faster fee collection' },
            { metric: '100%', description: 'Paperless operations' }
        ],
        testimonial: {
            quote: 'The system has revolutionized how we manage our school. Parents love the transparency and we\'ve saved countless hours of manual work.',
            author: 'School Principal',
            role: 'Educational Institution'
        }
    },
    {
        title: 'Restaurant Ordering & Management',
        description: 'Online ordering system with kitchen display, table management, and delivery integration',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=450&fit=crop&q=80',
        link: '#',
        tags: ['React', 'Node.js', 'Real-time', 'Payment Integration'],
        duration: '6 weeks',
        teamSize: '2 Developers',
        industry: 'Food & Hospitality',
        challenge: 'A restaurant needed to modernize their ordering process to handle both dine-in and online orders efficiently. They were losing customers due to long wait times and order errors, and had no online presence for delivery orders.',
        solution: 'Created an integrated ordering system with customer-facing menu website, kitchen display system for order management, table reservation system, and integration with delivery platforms. Included real-time order tracking and payment processing.',
        features: [
            'Customer-facing online menu and ordering',
            'Kitchen display system for order management',
            'Table reservation and management',
            'Real-time order status tracking',
            'Multiple payment gateway integration',
            'Delivery partner integration',
            'Menu management and pricing control',
            'Sales analytics and reporting'
        ],
        results: [
            { metric: '150%', description: 'Increase in online orders' },
            { metric: '35%', description: 'Reduction in order errors' },
            { metric: '45%', description: 'Faster table turnover' },
            { metric: '20%', description: 'Revenue growth' }
        ],
        testimonial: {
            quote: 'Our restaurant has never been more efficient. The online ordering brought in new customers and the kitchen system eliminated confusion during rush hours.',
            author: 'Restaurant Owner',
            role: 'Food & Beverage Business'
        }
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
    const [selectedProject, setSelectedProject] = useState(null);
    const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

    const openCaseStudy = (project) => {
        setSelectedProject(project);
        setIsCaseStudyOpen(true);
    };

    const closeCaseStudy = () => {
        setIsCaseStudyOpen(false);
        setTimeout(() => setSelectedProject(null), 300);
    };

    return (
        <>
            <CaseStudy
                isOpen={isCaseStudyOpen}
                onClose={closeCaseStudy}
                project={selectedProject}
            />

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
                            Real projects, real results. See how we've helped businesses grow.
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
                            <motion.div
                                key={index}
                                variants={item}
                                whileHover={{ y: -10 }}
                                onClick={() => openCaseStudy(project)}
                                className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all shadow-xl hover:shadow-blue-500/20 cursor-pointer"
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
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </div>
                                            <p className="text-white font-semibold text-lg">View Case Study</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-2 py-1 text-xs font-medium bg-blue-600/20 text-blue-400 rounded border border-blue-600/30">
                                            {project.industry}
                                        </span>
                                        <span className="text-gray-500 text-xs">• {project.duration}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <span className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full">
                                                +{project.tags.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
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
        </>
    );
};

export default Portfolio;

