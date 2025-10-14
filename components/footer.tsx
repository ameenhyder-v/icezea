import Link from "next/link"
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"
import MintFooterShader from "./mint-footer-shader"

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <MintFooterShader
          proportion={0.5}
          softness={1.2}
          distortion={0.3}
          swirl={0.6}
          swirlIterations={8}
          shapeScale={0.15}
          scale={1.2}
          speed={0.5}
          colors={["#FFE5EC", "#FFF8E7", "#E8D5F2", "#FFE4D6"]}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-3xl font-serif font-bold text-gray-900">Icezea</div>
            <p className="text-sm text-gray-700">Premium Ice Cream for Everyone</p>
            <p className="text-xs text-gray-600">Made with ❤️ in UAE</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-900">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                Products
              </Link>
              <Link href="#about" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                About Us
              </Link>
              <Link href="#contact" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-900">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-gray-700">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Ajman, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Phone size={16} className="flex-shrink-0" />
                <span>+971 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Mail size={16} className="flex-shrink-0" />
                <span>hello@icezea.ae</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-900">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-pink-200/40 flex items-center justify-center hover:bg-pink-200/60 transition-colors backdrop-blur-sm"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-gray-800" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-pink-200/40 flex items-center justify-center hover:bg-pink-200/60 transition-colors backdrop-blur-sm"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-gray-800" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-pink-200/40 flex items-center justify-center hover:bg-pink-200/60 transition-colors backdrop-blur-sm"
                aria-label="Twitter"
              >
                <Twitter size={20} className="text-gray-800" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Icezea Ice Cream Manufacturing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
