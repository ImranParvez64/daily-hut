'use client'
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="space-y-3 text-sm text-gray-700">
      <div className="flex items-start gap-3">
        <span className="mt-1 text-xl text-teal-600"><FaMapMarkerAlt /></span>
        <div>
          <h4 className="font-semibold text-gray-900">Address</h4>
          <p>Shewrapara, Mirpur-1280, Dhaka, Bangladesh</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <span className="mt-1 text-xl text-teal-600"><FaPhoneAlt /></span>
        <div>
          <h4 className="font-semibold text-gray-900">Call Us</h4>
          <a href="tel:+91540025124553" className="block hover:underline">(+88) - 0192-300964</a>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <span className="mt-1 text-xl text-teal-600"><FaEnvelope /></span>
        <div>
          <h4 className="font-semibold text-gray-900">Email</h4>
          <a href="mailto:sale@Nest.com" className="block hover:underline">support.daily-hut@com</a>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <span className="mt-1 text-xl text-teal-600"><FaClock /></span>
        <div>
          <h4 className="font-semibold text-gray-900">Hours</h4>
          <p>10:00 - 18:00, Mon - Sat</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
