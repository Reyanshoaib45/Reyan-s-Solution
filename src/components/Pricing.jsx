import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Website Development Packages
const websitePricing = [
    {
        name: 'Starter',
        price: '$149',
        description: 'Perfect for simple landing pages',
        color: 'from-blue-500 to-cyan-500',
        features: [
            '1–4 pages',
            'Basic UI design',
            'No backend',
            'Responsive design',
            'Delivery: 5 days'
        ],
        popular: false,
        category: 'Website'
    },
    {
        name: 'Business',
        price: '$299–$399',
        description: 'For growing businesses',
        color: 'from-purple-500 to-pink-500',
        features: [
            '5–10 pages',
            'Custom UI/UX',
            'Blog system',
            'Contact forms',
            'Basic SEO',
            'Delivery: 7–10 days'
        ],
        popular: true,
        category: 'Website'
    },
    {
        name: 'Advanced',
        price: '$499–$799',
        description: 'Complete web solutions',
        color: 'from-indigo-500 to-purple-500',
        features: [
            'Dashboard (Admin + User)',
            'API integrations',
            'Payment gateway',
            'Custom backend',
            'Delivery: 14–21 days'
        ],
        popular: false,
        category: 'Website'
    }
];

// E-commerce Packages
const ecommercePricing = [
    {
        name: 'Basic Store',
        price: '$249',
        description: 'Start selling online',
        color: 'from-green-500 to-emerald-500',
        features: [
            '20 product listings',
            'Payment setup',
            'Shipping setup',
            'Basic admin panel'
        ],
        popular: false,
        category: 'E-commerce'
    },
    {
        name: 'Pro Store',
        price: '$499',
        description: 'Advanced e-commerce',
        color: 'from-orange-500 to-red-500',
        features: [
            'Inventory system',
            'Order tracking',
            'Custom admin panel',
            'Multiple vendors (+$100)'
        ],
        popular: true,
        category: 'E-commerce'
    }
];

// Additional Services
const additionalServices = [
    {
        name: 'API Development',
        price: '$79/endpoint',
        description: 'Custom API solutions',
        color: 'from-cyan-500 to-blue-500',
        features: [
            'Basic: $79 per endpoint',
            'Bulk: $199 for 4 endpoints',
            'RESTful architecture',
            'Documentation included'
        ],
        popular: false,
        category: 'Development'
    },
    {
        name: 'Bug Fixing',
        price: 'From $20',
        description: 'Quick fixes & optimization',
        color: 'from-yellow-500 to-orange-500',
        features: [
            'Minor Fix: $20',
            'Medium Fix: $40–$60',
            'Major Fix: $100–$150',
            'Fast turnaround'
        ],
        popular: false,
        category: 'Support'
    },
    {
        name: 'UI/UX Design',
        price: 'From $49',
        description: 'Beautiful interfaces',
        color: 'from-pink-500 to-rose-500',
        features: [
            'Landing Page: $49',
            'Full Website: $149',
            'Dashboard: $199',
            'Modern design trends'
        ],
        popular: false,
        category: 'Design'
    },
    {
        name: 'SEO Services',
        price: 'From $49/mo',
        description: 'Boost your visibility',
        color: 'from-teal-500 to-green-500',
        features: [
            'Basic SEO: $49/month',
            'Business SEO: $99/month',
            'Aggressive SEO: $199/month',
            'Monthly reports'
        ],
        popular: false,
        category: 'Marketing'
    },
    {
        name: 'Maintenance',
        price: 'From $29/mo',
        description: 'Keep your site running',
        color: 'from-violet-500 to-purple-500',
        features: [
            'Basic: $29/month',
            'Pro: $49/month',
            'Full: $99/month',
            'Updates & support'
        ],
        popular: false,
        category: 'Support'
    },
    {
        name: 'Hosting Setup',
        price: 'From $15',
        description: 'Get online quickly',
        color: 'from-slate-500 to-gray-500',
        features: [
            'Hosting Setup: $25',
            'Domain + DNS: $15',
            'Email + SSL: $20',
            'One-time setup'
        ],
        popular: false,
        category: 'Infrastructure'
    }
];

// Combine all pricing for display
const pricingTiers = [...websitePricing, ...ecommercePricing, ...additionalServices];

const faqs = [
    {
        question: 'How long does a typical project take?',
        answer: 'Project timelines vary based on complexity. A simple website takes 2-3 weeks, while complex dashboards or systems can take 2-4 months. We provide a detailed timeline during the initial consultation.'
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept international payments via PayPal, Stripe, bank transfer, and local payment methods for UAE and Pakistan clients. Payment is typically split: 50% upfront and 50% upon completion.'
    },
    {
        question: 'Do you provide ongoing maintenance?',
        answer: 'Yes! All packages include initial support period. After that, we offer monthly maintenance plans starting from $100/month for updates, bug fixes, and technical support.'
    },
    {
        question: 'Can I see my project during development?',
        answer: 'Absolutely! We provide regular updates and demos throughout development. You\'ll have access to a staging environment to review progress and provide feedback.'
    },
    {
        question: 'What if I need changes after launch?',
        answer: 'All packages include revision rounds. After launch, minor tweaks during the support period are free. Major changes or new features can be added as separate projects.'
    },
    {
        question: 'Do you work with international clients?',
        answer: 'Yes! We work with clients across UAE, Pakistan, USA, UK, and other countries. We\'re experienced in remote collaboration with clear communication and timely delivery.'
    }
];

const Pricing = () => {
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    // Calculate discounted price (20% off)
    const calculateDiscount = (priceStr) => {
        // Extract numbers from price string
        const numbers = priceStr.match(/\d+/g);
        if (!numbers) return { original: priceStr, discounted: priceStr };

        if (numbers.length === 1) {
            const original = parseInt(numbers[0]);
            const discounted = Math.round(original * 0.8);
            return {
                original: priceStr,
                discounted: priceStr.replace(original.toString(), discounted.toString())
            };
        } else if (numbers.length === 2) {
            // Handle range prices like $299–$399
            const original1 = parseInt(numbers[0]);
            const original2 = parseInt(numbers[1]);
            const discounted1 = Math.round(original1 * 0.8);
            const discounted2 = Math.round(original2 * 0.8);
            return {
                original: priceStr,
                discounted: priceStr.replace(`${original1}–${original2}`, `${discounted1}–${discounted2}`)
            };
        }
        return { original: priceStr, discounted: priceStr };
    };

    // Get unique categories
    const categories = ['All', ...new Set(pricingTiers.map(tier => tier.category))];

    // Filter pricing tiers based on selected category
    const filteredTiers = selectedCategory === 'All'
        ? pricingTiers
        : pricingTiers.filter(tier => tier.category === selectedCategory);

    return (
        <section id="pricing" className="py-24 bg-gray-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-1/3 -left-24 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-extrabold text-white sm:text-4xl"
                    >
                        ⚡ Best Pricing Structure
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 max-w-2xl mx-auto text-xl text-gray-400"
                    >
                        Clear pricing with no hidden costs. Choose the package that fits your needs.
                    </motion.p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all ${selectedCategory === category
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                {/* Pricing Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
                    {filteredTiers.map((tier, index) => {
                        const priceInfo = calculateDiscount(tier.price);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ y: -10 }}
                                className={`relative bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border-2 transition-all ${tier.popular
                                    ? 'border-purple-500 shadow-2xl shadow-purple-500/20'
                                    : 'border-gray-700 hover:border-gray-600'
                                    }`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full">
                                            Popular
                                        </span>
                                    </div>
                                )}

                                {/* Discount Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                                        20% OFF
                                    </span>
                                </div>

                                {/* Category Badge */}
                                <div className="absolute top-4 right-4">
                                    <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">
                                        {tier.category}
                                    </span>
                                </div>

                                <div className="text-center mb-5">
                                    <div className={`inline-block w-14 h-14 rounded-xl bg-gradient-to-br ${tier.color} mb-3 flex items-center justify-center`}>
                                        <span className="text-xl">💼</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                                    <p className="text-gray-400 text-xs mb-3">{tier.description}</p>

                                    {/* Original Price (Strikethrough) */}
                                    <div className="text-sm text-gray-500 line-through mb-1">
                                        {priceInfo.original}
                                    </div>

                                    {/* Discounted Price */}
                                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                                        {priceInfo.discounted}
                                    </div>
                                </div>

                                <ul className="space-y-2 mb-6">
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                                            <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-xs">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={`#contact?service=${encodeURIComponent(tier.name + ' - ' + tier.category)}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        // Scroll to contact section
                                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                        // Set service in contact form after a small delay
                                        setTimeout(() => {
                                            const serviceInput = document.querySelector('input[name="service"]');
                                            if (serviceInput) {
                                                serviceInput.value = `${tier.name} - ${tier.category} (${priceInfo.discounted})`;
                                                serviceInput.dispatchEvent(new Event('input', { bubbles: true }));
                                            }
                                        }, 500);
                                    }}
                                    className={`block w-full py-2.5 px-4 rounded-xl text-center text-sm font-bold transition-all ${tier.popular
                                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg'
                                        : 'bg-gray-700 hover:bg-gray-600 text-white'
                                        }`}
                                >
                                    Get Started
                                </motion.a>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Custom Solutions Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-600/30 rounded-2xl p-8 mb-20 text-center"
                >
                    <h3 className="text-2xl font-bold text-white mb-3">Need a Custom Solution?</h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Every business is unique. If our packages don't fit your needs, we'll create a custom solution tailored specifically for you.
                    </p>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg transition-all"
                    >
                        <span>Request Custom Quote</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </motion.a>
                </motion.div>

                {/* FAQ Section */}
                <div>
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-white mb-3">Frequently Asked Questions</h3>
                        <p className="text-gray-400">Everything you need to know about our pricing and services</p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700 overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors"
                                >
                                    <span className="font-semibold text-white pr-4">{faq.question}</span>
                                    <motion.svg
                                        animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-5 h-5 text-gray-400 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </motion.svg>
                                </button>
                                {expandedFaq === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 pb-6"
                                    >
                                        <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
