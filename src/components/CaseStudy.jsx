import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CaseStudy = ({ isOpen, onClose, project }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-hidden"
                    >
                        <div className="bg-gray-900 rounded-2xl border border-gray-700 h-full flex flex-col shadow-2xl">
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-700">
                                <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                                >
                                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-8">
                                {/* Hero Image */}
                                <div className="aspect-video rounded-xl overflow-hidden border border-gray-700">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Project Overview */}
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                                        <div className="text-blue-400 text-sm font-medium mb-1">Duration</div>
                                        <div className="text-white font-semibold">{project.duration}</div>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                                        <div className="text-blue-400 text-sm font-medium mb-1">Team Size</div>
                                        <div className="text-white font-semibold">{project.teamSize}</div>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                                        <div className="text-blue-400 text-sm font-medium mb-1">Industry</div>
                                        <div className="text-white font-semibold">{project.industry}</div>
                                    </div>
                                </div>

                                {/* Challenge */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                        <span className="text-2xl">🎯</span>
                                        The Challenge
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
                                </div>

                                {/* Solution */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                        <span className="text-2xl">💡</span>
                                        Our Solution
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed mb-4">{project.solution}</p>
                                    {project.features && (
                                        <ul className="space-y-2">
                                            {project.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-gray-300">
                                                    <span className="text-blue-400 mt-1">✓</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                        <span className="text-2xl">⚙️</span>
                                        Technologies Used
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 rounded-lg border border-blue-600/30 font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Results */}
                                {project.results && (
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                            <span className="text-2xl">📊</span>
                                            Results & Impact
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {project.results.map((result, idx) => (
                                                <div key={idx} className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-xl p-4 border border-blue-600/30">
                                                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-1">
                                                        {result.metric}
                                                    </div>
                                                    <div className="text-gray-300 text-sm">{result.description}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Client Testimonial */}
                                {project.testimonial && (
                                    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                                        <div className="flex text-yellow-400 mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-gray-300 italic mb-4">"{project.testimonial.quote}"</p>
                                        <div>
                                            <div className="font-bold text-white">{project.testimonial.author}</div>
                                            <div className="text-blue-400 text-sm">{project.testimonial.role}</div>
                                        </div>
                                    </div>
                                )}

                                {/* CTA */}
                                {project.link && project.link !== '#' && (
                                    <div className="flex gap-4">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl text-center transition-all shadow-lg hover:shadow-blue-500/50"
                                        >
                                            View Live Project
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CaseStudy;
