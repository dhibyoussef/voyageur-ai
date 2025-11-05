import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 px-4" id="footer">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl flex items-center justify-center">
                            <div className="icon-sparkles text-xl text-white"></div>
                        </div>
                        <span className="text-2xl font-bold">Trip Link</span>
                    </div>
                    <p className="text-gray-400">Your intelligent travel companion</p>
                    <p className="text-gray-500 text-sm mt-2">Powered by advanced AI technology</p>
                </div>
                <div>
                    <h4 className="font-bold mb-4 text-lg">Company</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4 text-lg">Support</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4 text-lg">Connect With Us</h4>
                    <div className="flex space-x-4 mb-4">
                        <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-colors">
                            <div className="icon-linkedin text-xl"></div>
                        </a>
                        <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-colors">
                            <div className="icon-twitter text-xl"></div>
                        </a>
                        <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-colors">
                            <div className="icon-instagram text-xl"></div>
                        </a>
                    </div>
                    <div className="flex space-x-3">
                        <div className="icon-shield-check text-2xl text-green-500"></div>
                        <div className="icon-lock text-2xl text-blue-500"></div>
                        <div className="icon-award text-2xl text-yellow-500"></div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()}  Trip Link. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;