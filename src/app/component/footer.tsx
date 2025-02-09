import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Bandage</h1>
        <div className="flex space-x-4">
          <img
            src="facebookB.png"
            alt="Facebook"
            className="h-6 w-6 cursor-pointer"
          />
          <img
            src="instaB.png"
            alt="Instagram"
            className="h-6 w-6 cursor-pointer"
          />
          <img
            src="twitterB.png"
            alt="Twitter"
            className="h-6 w-6 cursor-pointer"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <div>
          <h3 className="font-semibold mb-4 text-lg">Company Info</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/carrier">Carrier</Link>
            </li>
            <li>
              <Link href="/hiring">We are hiring</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-lg">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/refunds">Refund Policy</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-lg">Features</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/business">Business Marketing</Link>
            </li>
            <li>
              <Link href="/analytics">User Analytics</Link>
            </li>
            <li>
              <Link href="/chat">Live Chat</Link>
            </li>
            <li>
              <Link href="/support">Unlimited Support</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-lg">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/apps">iOS & Android</Link>
            </li>
            <li>
              <Link href="/demo">Watch a Demo</Link>
            </li>
            <li>
              <Link href="/customers">Customers</Link>
            </li>
            <li>
              <Link href="/api">API</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-lg">Get In Touch</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-600">
        <p>Made With Love By Finland. All Rights Reserved © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
