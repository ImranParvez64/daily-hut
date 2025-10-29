import OthersHero from '@/Components/Shared/OthersHero';
import React from 'react';

export default function ContactPage() {
    return (
        <section className="mt-10 mb-20 px-6 flex flex-col items-start justify-center container mx-auto border-gray-300 bg-white relative">

            {/* Header Center */}
           <div className='w-full'>
             <OthersHero title={"Contact us"}></OthersHero>
           </div>
           

            <div className="max-w-4xl ml-70 w-full   bg-white rounded-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-md mt-24">

                {/* Left Side - Info */}
                <div className="text-gray-700  p-10 flex flex-col justify-between  bg-gray-50">
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Get in Touch</h3>

                        <ul className="space-y-6 text-sm">
                            <li className="flex gap-3 items-start">
                                <span className="text-blue-600 text-lg">📍</span>
                                <div>
                                    <p className="font-medium">Address</p>
                                    <p className="text-gray-600">Dhaka, Bangladesh</p>
                                </div>
                            </li>

                            <li className="flex gap-3 items-start">
                                <span className="text-blue-600 text-lg">📞</span>
                                <div>
                                    <p className="font-medium">Phone</p>
                                    <p className="text-gray-600">+880 1780-000000</p>
                                </div>
                            </li>

                            <li className="flex gap-3 items-start">
                                <span className="text-blue-600 text-lg">✉</span>
                                <div>
                                    <p className="font-medium">Email</p>
                                    <p className="text-gray-600">support@dailyhut.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-10">
                        <h3 className="font-semibold mb-3">Follow Us</h3>
                        <div className="flex gap-3">
                            <a className="w-9 h-9 flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-sm hover:border-blue-600 transition">F</a>
                            <a className="w-9 h-9 flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-sm hover:border-blue-600 transition">I</a>
                            <a className="w-9 h-9 flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-sm hover:border-blue-600 transition">Y</a>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="p-10">
                    <h3 className="text-xl font-semibold text-gray-800 mb-5">Send Message</h3>
                    <form className="space-y-4">
                        <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-400 outline-none" />
                        <input type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-400 outline-none" />
                        <input type="text" placeholder="Subject" className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-400 outline-none" />
                        <textarea rows="5" placeholder="Message" className="w-full border border-gray-300 rounded-lg p-3 text-sm resize-none focus:ring-2 focus:ring-blue-400 outline-none"></textarea>
                        <button className="w-full py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}