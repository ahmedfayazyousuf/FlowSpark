'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';

export default function Footer() {
    const [theme] = useState('light'); 

  return (
    <div className={theme}>
      <footer className="bg-gray-800 text-white rounded-t-3xl py-20">
        <main className="flex flex-col items-center px-4 md:px-12 lg:px-24">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
                <div>
                    <h3 className="text-sm font-bold mb-2">Product</h3>
                    <ul className="text-sm space-y-1">
                        <li>Overview</li>
                        <li>Key Features</li>
                        <li>Integrations</li>
                        <li>Customisation Options</li>
                        <li>AI-led Insights</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-bold mb-2">Academy</h3>
                    <ul className="text-sm space-y-1">
                        <li>Training programme</li>
                        <li>Webinars</li>
                        <li>Education blog</li>
                        <li>FAQs</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-bold mb-2">Support</h3>
                    <ul className="text-sm space-y-1">
                        <li>Support Center</li>
                        <li>Account login</li>
                        <li>Schedule a call</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-bold mb-2">Company</h3>
                    <ul className="text-sm space-y-1">
                        <li>Partnerships</li>
                        <li>Media + Press</li>
                        <li>Contact Us</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
        </main>

        <div className="w-full flex justify-center flex-col items-center gap-4">
            <Image src="/Images/BrandAssets/Logo.png" alt="FlowSpark Logo" width={150} height={100} className="object-contain" />

            <div className="flex justify-center space-x-2 text-[#32baae]">
                <FaTwitter size={24} />
                <FaInstagram size={24} />
                <FaLinkedin size={24} />
                <FaYoutube size={24} />
                <FaFacebook size={24} />
            </div>

            <div className="flex justify-center space-x-4 text-sm">
                <a href="/terms" className="hover:underline">
                Terms of Service
                </a>
                <span>|</span>
                <a href="/privacy" className="hover:underline">
                Privacy Policy
                </a>
            </div>
            <p className='text-sm'>&copy; FlowSpark Digital LLC</p>
        </div>

        </footer>
    </div>
  );
}
