"use client";

import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="space-y-4 text-sm sm:text-base text-gray-700">
      
      <div className="flex items-start gap-3">
        <span className="mt-1 text-teal-600 text-lg sm:text-xl"><FaMapMarkerAlt /></span>
        <div>
          <h4 className="font-semibold text-gray-900">Address</h4>
          <p>Shewrapara, Mirpur-1280, Dhaka, Bangladesh</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <span className="mt-1 text-teal-600 text-lg sm:text-xl"><FaPhoneAlt /></span>
        <div>
          <h4 className="font-semibold text-gray-900">Call Us</h4>
          <a href="tel:+91540025124553" className="block hover:underline">(+88) - 0192-300964</a>
        </div>
      </div>

      
    </div>
  );
};

export default ContactInfo;
