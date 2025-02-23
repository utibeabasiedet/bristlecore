import Link from "next/link";
import Image from "next/image";
import Logo from '../public/assets/BCORE dark.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1: Logo & About */}
        <div>
        <Link href="/" >
          <span className="text-2xl font-bold ">
            <Image src={Logo} height='150' width={200} alt='img' />
          </span>
        </Link>
          <p className="text-gray-400">
            Bristlecore Innovations – Your partner in branding, web, and AI solutions.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-gray-400 hover:text-primary">Home</Link></li>
            <li><Link href="/about" className="text-gray-400 hover:text-primary">About</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-primary">Services</Link></li>
            <li><Link href="/projects" className="text-gray-400 hover:text-primary">Projects</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-400">123 Business Street, Port Harcourt, Nigeria</p>
          <p className="text-gray-400 mt-2">Email: <a href="mailto:info@bristlecore.com" className="hover:text-primary">info@bristlecore.com</a></p>
          <p className="text-gray-400 mt-2">Phone: <a href="tel:+2348123456789" className="hover:text-primary">+234 812 345 6789</a></p>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <p className="text-gray-400 mb-4">Subscribe to get updates on our latest services.</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-3 py-2 w-full rounded-l bg-gray-800 text-white focus:outline-none"
            />
            <button className="bg-primary px-4 py-2 rounded-r text-gray-900 font-bold">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Copyright Text */}
      <div className="border-t border-gray-700 mt-6 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Bristlecore Innovations. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
