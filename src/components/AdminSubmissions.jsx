import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AdminSubmissions = () => {
    const [submissions, setSubmissions] = useState([]);
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        loadSubmissions();
    }, []);

    const loadSubmissions = () => {
        const data = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        setSubmissions(data.reverse()); // Show newest first
    };

    const deleteSubmission = (id) => {
        if (window.confirm('Are you sure you want to delete this submission?')) {
            const updated = submissions.filter(sub => sub.id !== id);
            localStorage.setItem('contactSubmissions', JSON.stringify(updated.reverse()));
            loadSubmissions();
        }
    };

    const clearAll = () => {
        if (window.confirm('Are you sure you want to delete ALL submissions? This cannot be undone!')) {
            localStorage.removeItem('contactSubmissions');
            setSubmissions([]);
        }
    };

    const exportData = () => {
        const dataStr = JSON.stringify(submissions, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `contact-submissions-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
    };

    const filteredSubmissions = submissions.filter(sub => {
        const matchesSearch = sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sub.projectDetails.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-4xl font-extrabold text-white mb-2">
                                📬 Contact Submissions
                            </h1>
                            <p className="text-gray-400">
                                Total: <span className="text-blue-400 font-semibold">{submissions.length}</span> submissions
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={exportData}
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Export JSON
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={clearAll}
                                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition-all flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                Clear All
                            </motion.button>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search by name, email, or project details..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </motion.div>

                {/* Submissions List */}
                {filteredSubmissions.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-gray-900 border border-gray-700 rounded-2xl p-12 text-center"
                    >
                        <div className="text-6xl mb-4">📭</div>
                        <p className="text-xl text-gray-400">No submissions yet</p>
                        <p className="text-gray-500 mt-2">Contact form submissions will appear here</p>
                    </motion.div>
                ) : (
                    <div className="space-y-4">
                        {filteredSubmissions.map((submission, index) => (
                            <motion.div
                                key={submission.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-blue-600/50 transition-all"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-xl font-bold text-white">{submission.name}</h3>
                                            <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded-full border border-blue-600/30">
                                                #{submissions.length - index}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 text-sm">{submission.date}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <motion.a
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            href={`https://wa.me/${submission.whatsapp.replace(/\D/g, '')}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-green-600/20 hover:bg-green-600/30 text-green-400 rounded-lg transition-all"
                                            title="WhatsApp"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            href={`mailto:${submission.email}`}
                                            className="p-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 rounded-lg transition-all"
                                            title="Email"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </motion.a>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => deleteSubmission(submission.id)}
                                            className="p-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg transition-all"
                                            title="Delete"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </motion.button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div className="bg-gray-800 rounded-xl p-4">
                                        <p className="text-xs text-gray-500 mb-1">Email</p>
                                        <p className="text-white font-medium">{submission.email}</p>
                                    </div>
                                    <div className="bg-gray-800 rounded-xl p-4">
                                        <p className="text-xs text-gray-500 mb-1">WhatsApp</p>
                                        <p className="text-white font-medium">{submission.whatsapp}</p>
                                    </div>
                                </div>

                                <div className="bg-gray-800 rounded-xl p-4">
                                    <p className="text-xs text-gray-500 mb-2">Project Details</p>
                                    <p className="text-white whitespace-pre-line">{submission.projectDetails}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Back to Home Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 text-center"
                >
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-xl transition-all"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default AdminSubmissions;
