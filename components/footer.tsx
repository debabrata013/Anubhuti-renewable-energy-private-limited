"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0d5f3f] to-[#0a4a32] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#00ff88]">AR Energy</h3>
            <p className="text-gray-300 mb-4">
              Empowering a sustainable future with cutting-edge solar plant solutions for residential, commercial, and
              industrial needs.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-[#00ff88]" />
                <p className="text-gray-300">info@arenergy.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-[#00ff88]" />
                <p className="text-gray-300">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[#00ff88]" />
                <p className="text-gray-300">123 Solar Park, Green City, India</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#00ff88] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/solar-solutions" className="text-gray-300 hover:text-[#00ff88] transition-colors">
                  Solar Solutions
                </Link>
              </li>
              <li>
                <Link href="/our-presence" className="text-gray-300 hover:text-[#00ff88] transition-colors">
                  Our Presence
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-[#00ff88] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#00ff88] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/residential" className="text-gray-300 hover:text-[#00ff88] transition-colors">
                  Residential Solar
                </Link>
              </li>
              <li>
                <Link href="/commercial" className="text-gray-300 hover:text-[#00ff88] transition-colors">
                  Commercial Solar
                </Link>
              </li>
              <li>
                <Link href="/industrial" className="text-gray-300 hover:text-[#00ff88] transition-colors">
                  Industrial Solar
                </Link>
              </li>
              <li>
                <Link href="/battery-storage" className="text-gray-300 hover:text-[#00ff88] transition-colors">
                  Battery Storage
                </Link>
              </li>
              <li>
                <Link href="/monitoring" className="text-gray-300 hover:text-[#00ff88] transition-colors">
                  Monitoring Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Stay Updated</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest solar news and offers.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#00ff88]"
              />
              <button
                type="submit"
                className="w-full bg-[#00ff88] text-[#0d5f3f] font-bold py-2 rounded-lg hover:bg-[#00cc6a] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#00ff88]/30 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
            <div>
              <h5 className="font-semibold text-[#00ff88] mb-2">Legal</h5>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-[#00ff88] transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00ff88] transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[#00ff88] mb-2">Support</h5>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-[#00ff88] transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#00ff88] transition-colors">
                    Contact Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[#00ff88] mb-2">Resources</h5>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-[#00ff88] transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00ff88] transition-colors">
                    Guides
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#0a3d2a] border-t border-[#00ff88]/20">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2025 AR Energy. All rights reserved.</p>
          <p>Powering India with Clean Energy</p>
        </div>
      </div>
    </footer>
  )
}
