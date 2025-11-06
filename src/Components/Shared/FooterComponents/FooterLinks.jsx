"use client";

import React from 'react';

const FooterLinks = () => {
    const footerLinks = [
        {
            title: "Company",
            links: [
                { name: "About Us", url: "#" },
                { name: "Delivery Information", url: "#" },
                { name: "Privacy Policy", url: "#" },
                { name: "Terms & Conditions", url: "#" },
                { name: "Contact Us", url: "#" },
                { name: "Support Center", url: "#" },
                { name: "Careers", url: "#" },
            ],
        },
        {
            title: "Account",
            links: [
                { name: "Sign In", url: "#" },
                { name: "View Cart", url: "#" },
                { name: "My Wishlist", url: "#" },
                { name: "Track My Order", url: "#" },
                { name: "Help Ticket", url: "#" },
                { name: "Shipping Details", url: "#" },
                { name: "Compare products", url: "#" },
            ],
        },
        {
            title: "Corporate",
            links: [
                { name: "Become a Vendor", url: "#" },
                { name: "Affiliate Program", url: "#" },
                { name: "Farm Business", url: "#" },
                { name: "Farm Careers", url: "#" },
                { name: "Our Suppliers", url: "#" },
                { name: "Accessibility", url: "#" },
                { name: "Promotions", url: "#" },
            ],
        },
        {
            title: "Popular",
            links: [
                { name: "Milk & Flavoured Milk", url: "#" },
                { name: "Butter and Margarine", url: "#" },
                { name: "Eggs Substitutes", url: "#" },
                { name: "Marmalades", url: "#" },
                { name: "Sour Cream and Dips", url: "#" },
                { name: "Tea & Kombucha", url: "#" },
                { name: "Cheese", url: "#" },
            ],
        },
    ];

    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center md:place-items-start'>
            {footerLinks.map((section) => (
                <div key={section.title}>
                    <h3 className="font-semibold text-lg sm:text-xl text-gray-900 mb-4">{section.title}</h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                        {section.links.map((link) => (
                            <li key={link.name}>
                                <a href={link.url} className="hover:text-teal-500 transition">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default FooterLinks;
