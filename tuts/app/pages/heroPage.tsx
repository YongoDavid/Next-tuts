import React from "react";

const HeroPage: React.FC = () => {
    return (
        <main className="min-h-screen flex items-center bg-gradient-to-b from-white via-gray-50 to-gray-100">
            <section className="w-full max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: copy */}
                <div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                        AI for eCommerce that sells — faster.
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-xl">
                        We combine machine learning, product intelligence, and conversion design to
                        automate catalog optimization, personalize shopper journeys, and increase AOV.
                        Launch experiments in days, not months.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-md"
                        >
                            Get a demo
                        </a>
                        <a
                            href="#features"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-200 text-gray-700 bg-white hover:bg-gray-50"
                        >
                            See features
                        </a>
                    </div>

                    <ul className="mt-8 flex flex-wrap gap-4 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                            Real-time personalization
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                            Auto product tagging & insights
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                            30+ integrations (Shopify, BigCommerce)
                        </li>
                    </ul>
                </div>

                {/* Right: illustration */}
                <div className="flex items-center justify-center">
                    <div className="w-full max-w-md p-6 bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg">
                        <svg
                            viewBox="0 0 600 420"
                            className="w-full h-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="AI e-commerce illustration"
                        >
                            <defs>
                                <linearGradient id="g1" x1="0" x2="1">
                                    <stop offset="0" stopColor="#6366f1" />
                                    <stop offset="1" stopColor="#06b6d4" />
                                </linearGradient>
                            </defs>
                            <rect x="10" y="30" width="420" height="280" rx="18" fill="#fff" stroke="#e6e9ef" />
                            {/* Cart */}
                            <g transform="translate(60,60)">
                                <rect x="0" y="0" width="220" height="140" rx="12" fill="url(#g1)" opacity="0.12" />
                                <g transform="translate(18,20)">
                                    <rect x="0" y="0" width="120" height="70" rx="8" fill="#fff" />
                                    <text x="12" y="38" fill="#111827" fontSize="16" fontWeight="600">Product A</text>
                                </g>
                                {/* nodes */}
                                <circle cx="180" cy="30" r="10" fill="#06b6d4" />
                                <circle cx="200" cy="70" r="8" fill="#8b5cf6" />
                                <circle cx="150" cy="95" r="9" fill="#06b6d4" />
                                <line x1="140" y1="60" x2="185" y2="35" stroke="#c7d2fe" strokeWidth="3" strokeLinecap="round" />
                                <line x1="160" y1="80" x2="195" y2="75" stroke="#c7d2fe" strokeWidth="3" strokeLinecap="round" />
                                <g transform="translate(20,100)">
                                    <rect x="0" y="0" width="176" height="36" rx="8" fill="#fff" opacity="0.9" stroke="#eef2ff" />
                                    <text x="12" y="24" fill="#374151" fontSize="13">AI Suggested: Title + 5% price uplift</text>
                                </g>
                            </g>

                            {/* subtle decorative circles */}
                            <circle cx="520" cy="80" r="36" fill="#eef2ff" />
                            <circle cx="480" cy="300" r="22" fill="#f0f9ff" />
                        </svg>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HeroPage;